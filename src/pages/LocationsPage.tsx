import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import companyData from '../data/company.json';
import PageHero from '../components/common/PageHero';

const LocationsPage = () => {
  const locations = companyData.locations;

  return (
    <div className="pt-20">
      <PageHero
        title="Our Locations"
        description="Visit us at our offices in Rajasthan. We're here to serve you with world-class software solutions."
        gradient="from-gray-900 via-black to-gray-800"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16 animate-fadeInUp">
            <div className="badge mb-4">Where We Are</div>
            <h2 className="section-title mb-4">Visit Our Offices</h2>
            <p className="section-text max-w-3xl mx-auto">
              We have two strategic locations in Rajasthan to serve you better. Visit us or get in touch for a consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {locations.map((location, index) => (
              <div
                key={index}
                className="card animate-fadeInUp group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      location.type === 'Head Office'
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {location.type}
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">{location.name}</h3>
                    <p className="text-gray-600 text-lg">{location.city}, Rajasthan</p>
                  </div>
                  <Building2 className="w-12 h-12 text-gray-200 group-hover:text-black transition-colors" />
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-black flex-shrink-0" />
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-black transition-colors">
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-black flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-black transition-colors break-all">
                      {location.email}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-black flex-shrink-0" />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 text-center px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm"
                  >
                    Contact This Office
                  </Link>
                  <a
                    href={`https://wa.me/${location.whatsapp.replace(/[\s+]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Why Choose Oscillion?</h2>
            <p className="section-text max-w-3xl mx-auto">
              Located in the heart of Rajasthan, we bring global expertise with local understanding
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Local Expertise',
                description: 'Deep understanding of the Indian market and business needs',
              },
              {
                title: 'Global Standards',
                description: 'International quality standards at competitive pricing',
              },
              {
                title: 'Easy Accessibility',
                description: 'Two convenient locations across Rajasthan',
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock assistance for all your queries',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit us at any of our locations or get in touch online. We're excited to hear about your project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="btn-primary inline-flex items-center justify-center bg-white text-black hover:bg-gray-100"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center justify-center border-white text-white hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;
