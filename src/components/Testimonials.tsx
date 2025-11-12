import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  industry: string;
  projectType: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = testimonialsData.testimonials;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-block mb-4 px-4 py-2 bg-black/5 rounded-full">
            <span className="text-sm font-semibold text-gray-700">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Trusted by businesses worldwide for delivering exceptional results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 relative animate-fadeIn">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-gray-200 absolute top-6 left-6 sm:top-8 sm:left-8" />

            <div className="relative z-10">
              <div className="flex mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </p>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold mr-3 sm:mr-4 flex-shrink-0">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-black text-base sm:text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {currentTestimonial.location}
                  </div>
                  <span className="text-gray-300">|</span>
                  <div>{currentTestimonial.industry}</div>
                  <span className="text-gray-300">|</span>
                  <div>{currentTestimonial.projectType}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
