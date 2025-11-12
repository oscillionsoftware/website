import { useState } from 'react';
import { BookOpen, Users, Clock, Award, Code, Zap, Target, TrendingUp, CheckCircle, Calendar, Video, FileText } from 'lucide-react';

const TrainingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stats = [
    { icon: Users, value: '5,000+', label: 'Trained Professionals', color: 'from-black to-gray-700' },
    { icon: BookOpen, value: '50+', label: 'Training Programs', color: 'from-gray-800 to-black' },
    { icon: Award, value: '98%', label: 'Completion Rate', color: 'from-black to-gray-600' },
    { icon: TrendingUp, value: '4.9/5', label: 'Average Rating', color: 'from-gray-700 to-black' },
  ];

  const features = [
    {
      icon: Video,
      title: 'Live Interactive Sessions',
      description: 'Real-time training with expert instructors and hands-on practice sessions.'
    },
    {
      icon: Code,
      title: 'Hands-On Projects',
      description: 'Build real-world projects to apply your learning and strengthen your skills.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of practical experience.'
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Get certified upon completion and boost your career credentials.'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Choose from weekday, weekend, or self-paced learning options.'
    },
    {
      icon: Target,
      title: 'Job Placement Support',
      description: 'Career guidance, interview preparation, and placement assistance.'
    }
  ];

  const programs = [
    {
      category: 'Development',
      title: 'Full Stack Web Development',
      duration: '12 Weeks',
      level: 'Beginner to Advanced',
      price: '$2,999',
      description: 'Master both frontend and backend technologies including React, Node.js, databases, and deployment.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'Git'],
      modules: 45,
      projects: 8
    },
    {
      category: 'Development',
      title: 'Mobile App Development',
      duration: '10 Weeks',
      level: 'Intermediate',
      price: '$2,499',
      description: 'Build native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      skills: ['React Native', 'Flutter', 'Firebase', 'Mobile UI/UX', 'App Store Deployment'],
      modules: 38,
      projects: 6
    },
    {
      category: 'AI & ML',
      title: 'Artificial Intelligence & Machine Learning',
      duration: '16 Weeks',
      level: 'Advanced',
      price: '$3,999',
      description: 'Deep dive into AI, machine learning algorithms, neural networks, and practical AI implementations.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Deep Learning'],
      modules: 60,
      projects: 10
    },
    {
      category: 'Cloud',
      title: 'Cloud Computing & DevOps',
      duration: '8 Weeks',
      level: 'Intermediate to Advanced',
      price: '$2,199',
      description: 'Master cloud platforms, containerization, CI/CD pipelines, and infrastructure as code.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Microservices'],
      modules: 32,
      projects: 5
    },
    {
      category: 'Security',
      title: 'Cybersecurity Professional',
      duration: '14 Weeks',
      level: 'Intermediate to Advanced',
      price: '$3,499',
      description: 'Comprehensive training in ethical hacking, penetration testing, and security architecture.',
      skills: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'SIEM', 'Cryptography'],
      modules: 52,
      projects: 7
    },
    {
      category: 'Design',
      title: 'UI/UX Design Mastery',
      duration: '8 Weeks',
      level: 'Beginner to Intermediate',
      price: '$1,799',
      description: 'Learn user research, wireframing, prototyping, and creating stunning user interfaces.',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
      modules: 30,
      projects: 6
    },
    {
      category: 'Data',
      title: 'Data Science & Analytics',
      duration: '12 Weeks',
      level: 'Intermediate',
      price: '$2,799',
      description: 'Master data analysis, visualization, statistical modeling, and business intelligence.',
      skills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Statistics', 'Data Visualization'],
      modules: 42,
      projects: 8
    },
    {
      category: 'Development',
      title: 'Python Programming',
      duration: '6 Weeks',
      level: 'Beginner',
      price: '$1,299',
      description: 'Learn Python from scratch, covering fundamentals, OOP, and practical applications.',
      skills: ['Python Basics', 'OOP', 'Data Structures', 'File Handling', 'APIs'],
      modules: 24,
      projects: 4
    }
  ];

  const categories = ['all', 'Development', 'AI & ML', 'Cloud', 'Security', 'Design', 'Data'];

  const filteredPrograms = selectedCategory === 'all'
    ? programs
    : programs.filter(p => p.category === selectedCategory);

  const benefits = [
    'Lifetime access to course materials',
    'Industry-recognized certifications',
    'Career counseling and mentorship',
    'Real-world project portfolio',
    'Flexible payment plans available',
    'Job placement assistance'
  ];

  return (
    <div className="pt-20 bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Professional Training Programs</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your career with industry-leading training programs designed by experts.
              Learn cutting-edge technologies and gain practical skills for the modern workplace.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Why Choose Our Training?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive training with real-world projects, expert mentorship, and job placement support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black text-center mb-8">Our Training Programs</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {filteredPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-black mb-3">
                    {program.category}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{program.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-black">{program.price}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{program.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <Clock className="w-5 h-5 mx-auto mb-1 text-black" />
                  <div className="text-sm font-semibold text-black">{program.duration}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <BookOpen className="w-5 h-5 mx-auto mb-1 text-black" />
                  <div className="text-sm font-semibold text-black">{program.modules} Modules</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <FileText className="w-5 h-5 mx-auto mb-1 text-black" />
                  <div className="text-sm font-semibold text-black">{program.projects} Projects</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold text-black mb-2">Level: {program.level}</div>
                <div className="text-sm font-semibold text-black mb-2">Skills You'll Learn:</div>
                <div className="flex flex-wrap gap-2">
                  {program.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black text-center mb-8">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-1" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Today
            </a>
            <a
              href="/request-quote"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Request Corporate Training
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
