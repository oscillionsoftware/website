const courses = [
  { id: 1, title: "Full Stack Web Development", desc: "Learn HTML, CSS, JS, React, Node.js & MongoDB from scratch." },
  { id: 2, title: "Python Programming", desc: "Master Python from basics to advanced including data handling and APIs." },
  { id: 3, title: "Data Science & Machine Learning", desc: "Work with Pandas, NumPy, Scikit-Learn, and build ML models." },
  { id: 4, title: "Cloud Computing (AWS & Azure)", desc: "Understand cloud infrastructure, storage, and deployment." },
  { id: 5, title: "Cybersecurity Essentials", desc: "Get trained on ethical hacking, penetration testing, and defense tools." },
  { id: 6, title: "DevOps Fundamentals", desc: "CI/CD, Docker, Kubernetes, and automation workflows explained." },
  { id: 7, title: "Mobile App Development", desc: "Build Android & iOS apps with React Native or Flutter." },
  { id: 8, title: "UI/UX Design", desc: "Learn user-centered design, Figma, and prototyping skills." },
  { id: 9, title: "AI & Deep Learning", desc: "Neural networks, TensorFlow, and image recognition models." },
  { id: 10, title: "Blockchain Development", desc: "Understand smart contracts, Solidity, and dApps on Ethereum." },
];

const TrainingPage = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">IT Courses Training</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Upskill yourself with our expert-led IT training courses. Each course just <span className="font-semibold text-white">₹5100</span>.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Choose Your Course
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.desc}</p>
              </div>
              <div className="mt-auto">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Price: ₹5100
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
