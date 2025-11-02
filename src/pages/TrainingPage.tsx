// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Master HTML, CSS, JavaScript, and React to build stunning, responsive UIs.",
    img: "https://via.placeholder.com/600x400?text=Frontend+Development",
    price: 4200,
    oldPrice: 5500,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Learn Node.js, Express, and databases to create robust APIs and servers.",
    img: "https://via.placeholder.com/600x400?text=Backend+Development",
    price: 4600,
    oldPrice: 6000,
    rating: 4.7,
  },
  {
    id: 3,
    title: "Full Stack (MERN) Development",
    desc: "Become job-ready with MongoDB, Express, React, and Node.js full stack training.",
    img: "https://via.placeholder.com/600x400?text=Full+Stack+MERN",
    price: 6200,
    oldPrice: 7500,
    rating: 4.9,
  },
  {
    id: 4,
    title: "Cloud & AWS",
    desc: "Understand AWS fundamentals, EC2, S3, DevOps integration, and deployments.",
    img: "https://via.placeholder.com/600x400?text=Cloud+%26+AWS",
    price: 5800,
    oldPrice: 7000,
    rating: 4.8,
  },
  {
    id: 5,
    title: "Digital Marketing",
    desc: "Master SEO, Google Ads, social media marketing, and branding strategies.",
    img: "https://via.placeholder.com/600x400?text=Digital+Marketing",
    price: 3900,
    oldPrice: 5000,
    rating: 4.6,
  },
  {
    id: 6,
    title: "Data Analysis with Python",
    desc: "Analyze data with Python, Pandas, and visualization tools for real insights.",
    img: "https://via.placeholder.com/600x400?text=Data+Analysis+Python",
    price: 5400,
    oldPrice: 6500,
    rating: 4.7,
  },
];

const TrainingPage = () => {
  const handleBuyNow = (courseTitle) => {
    const message = `Hi! I'm interested in buying the ${courseTitle} course.`;
    const whatsappURL = `https://wa.me/919119161210?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // const renderStars = (rating) => {
  //   const stars = [];
  //   const fullStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 >= 0.5;

  //   for (let i = 0; i < 5; i++) {
  //     if (i < fullStars) stars.push(<FaStar key={i} className="text-yellow-400" />);
  //     else if (i === fullStars && hasHalfStar)
  //       stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
  //     else stars.push(<FaRegStar key={i} className="text-gray-400" />);
  //   }
  //   return <div className="flex">{stars}</div>;
  // };

  return (
    <div className="bg-white text-black min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight animate-fadeInUp">
            Professional IT Training
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 animate-fadeInUp delay-100">
            Hands-on, industry-ready training with internship opportunities.
          </p>
          <button
            onClick={() =>
              window.open("https://wa.me/919119161210", "_blank")
            }
            className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition transform hover:scale-105 animate-fadeInUp delay-200"
          >
            Contact Us on WhatsApp
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-12 tracking-tight">
          Explore Our Courses
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white border border-gray-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{course.desc}</p>
                {/* {renderStars(course.rating)} */}
                <div className="mt-3 mb-4">
                  <span className="text-2xl font-bold">₹{course.price}</span>
                  <span className="text-gray-500 line-through ml-2">
                    ₹{course.oldPrice}
                  </span>
                </div>
                <ul className="text-sm text-gray-700 mb-5 space-y-2">
                  <li>✅ 6-Month Internship</li>
                  <li>✅ Live Classes</li>
                  <li>✅ Real-Time Projects</li>
                </ul>
                <div className="flex gap-3 mt-auto">
                  <button className="w-1/2 border border-black py-2 rounded-lg font-medium hover:bg-black hover:text-white transition">
                    View Details
                  </button>
                  <button
                    onClick={() => handleBuyNow(course.title)}
                    className="w-1/2 bg-black text-white py-2 rounded-lg font-medium hover:bg-white hover:text-black border border-black transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
