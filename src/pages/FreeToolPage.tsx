import { useState } from 'react';
import { Calculator, DollarSign, Code, TrendingUp, Users, Clock, Award, ArrowRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';

const FreeToolPage = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const [roiInputs, setRoiInputs] = useState({
    investment: '',
    annualRevenue: '',
    costSavings: '',
    timeframe: '12',
  });

  const [costInputs, setCostInputs] = useState({
    projectType: 'web-app',
    teamSize: 'small',
    features: 'basic',
    timeline: '3',
  });

  const [techInputs, setTechInputs] = useState({
    projectType: 'web',
    scalability: 'medium',
    budget: 'medium',
  });

  const calculateROI = () => {
    const investment = parseFloat(roiInputs.investment) || 0;
    const revenue = parseFloat(roiInputs.annualRevenue) || 0;
    const savings = parseFloat(roiInputs.costSavings) || 0;
    const months = parseFloat(roiInputs.timeframe) || 12;

    const totalGain = (revenue + savings) * (months / 12);
    const roi = investment > 0 ? ((totalGain - investment) / investment) * 100 : 0;
    const paybackPeriod = totalGain > 0 ? (investment / (totalGain / months)) : 0;

    return {
      roi: roi.toFixed(2),
      totalGain: totalGain.toFixed(2),
      netProfit: (totalGain - investment).toFixed(2),
      paybackMonths: paybackPeriod.toFixed(1),
    };
  };

  const calculateProjectCost = () => {
    let baseCost = 10000;

    switch (costInputs.projectType) {
      case 'web-app':
        baseCost = 15000;
        break;
      case 'mobile-app':
        baseCost = 20000;
        break;
      case 'enterprise':
        baseCost = 50000;
        break;
      case 'mvp':
        baseCost = 8000;
        break;
    }

    const teamMultiplier = {
      'small': 1,
      'medium': 1.5,
      'large': 2.5,
    }[costInputs.teamSize] || 1;

    const featureMultiplier = {
      'basic': 1,
      'standard': 1.5,
      'advanced': 2.2,
    }[costInputs.features] || 1;

    const timelineMonths = parseFloat(costInputs.timeline) || 3;
    const totalCost = baseCost * teamMultiplier * featureMultiplier * (timelineMonths / 3);

    return {
      estimatedCost: totalCost.toFixed(0),
      monthlyRate: (totalCost / timelineMonths).toFixed(0),
      hourlyRate: (totalCost / (timelineMonths * 160)).toFixed(2),
    };
  };

  const getTechStackRecommendations = () => {
    const recommendations: any = {
      web: {
        high: {
          frontend: ['React', 'Next.js', 'TypeScript'],
          backend: ['Node.js', 'Python Django', 'PostgreSQL'],
          deployment: ['AWS', 'Docker', 'Kubernetes'],
        },
        medium: {
          frontend: ['React', 'Vue.js', 'TypeScript'],
          backend: ['Node.js', 'Express', 'MongoDB'],
          deployment: ['Vercel', 'Netlify', 'Railway'],
        },
        low: {
          frontend: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
          backend: ['Node.js', 'SQLite'],
          deployment: ['Heroku', 'Netlify'],
        },
      },
      mobile: {
        high: {
          framework: ['React Native', 'Flutter'],
          backend: ['Firebase', 'AWS Amplify'],
          testing: ['Jest', 'Detox'],
        },
        medium: {
          framework: ['React Native', 'Ionic'],
          backend: ['Supabase', 'Node.js'],
          testing: ['Jest', 'React Native Testing Library'],
        },
        low: {
          framework: ['React Native', 'Expo'],
          backend: ['Firebase', 'Supabase'],
          testing: ['Basic Jest'],
        },
      },
      api: {
        high: {
          framework: ['Node.js', 'Python FastAPI', 'Go'],
          database: ['PostgreSQL', 'MongoDB', 'Redis'],
          infrastructure: ['AWS', 'Kubernetes', 'Microservices'],
        },
        medium: {
          framework: ['Node.js', 'Express', 'NestJS'],
          database: ['PostgreSQL', 'MongoDB'],
          infrastructure: ['Docker', 'PM2'],
        },
        low: {
          framework: ['Node.js', 'Express'],
          database: ['SQLite', 'MongoDB'],
          infrastructure: ['Basic VPS', 'Heroku'],
        },
      },
    };

    const projectCategory = techInputs.projectType || 'web';
    const budgetLevel = techInputs.budget || 'medium';

    return recommendations[projectCategory]?.[budgetLevel] || recommendations.web.medium;
  };

  const tools = [
    {
      id: 'roi-calculator',
      name: 'ROI Calculator',
      description: 'Calculate the return on investment for your software development projects',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'cost-estimator',
      name: 'Project Cost Estimator',
      description: 'Get accurate cost estimates for your software development projects',
      icon: DollarSign,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'tech-advisor',
      name: 'Tech Stack Advisor',
      description: 'Receive personalized technology stack recommendations for your project',
      icon: Code,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const roiResults = calculateROI();
  const costResults = calculateProjectCost();
  const techRecommendations = getTechStackRecommendations();

  return (
    <div className="pt-20 bg-white">
      <PageHero
        badge="Free Resources"
        title="Free Development Tools"
        subtitle="Professional calculators and advisors to help you make informed decisions about your software projects"
      />

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tools.map((tool) => (
              <div
                key={tool.id}
                onClick={() => setActiveTool(activeTool === tool.id ? null : tool.id)}
                className={`group cursor-pointer bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  activeTool === tool.id ? 'border-black' : 'border-gray-100'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{tool.name}</h3>
                <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                <button className="mt-6 inline-flex items-center text-black font-semibold hover:underline">
                  {activeTool === tool.id ? 'Close Tool' : 'Use Tool'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {activeTool === 'roi-calculator' && (
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-200 animate-fadeIn">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-black">ROI Calculator</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Initial Investment ($)
                    </label>
                    <input
                      type="number"
                      value={roiInputs.investment}
                      onChange={(e) => setRoiInputs({ ...roiInputs, investment: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                      placeholder="50000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Annual Revenue Increase ($)
                    </label>
                    <input
                      type="number"
                      value={roiInputs.annualRevenue}
                      onChange={(e) => setRoiInputs({ ...roiInputs, annualRevenue: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                      placeholder="100000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Annual Cost Savings ($)
                    </label>
                    <input
                      type="number"
                      value={roiInputs.costSavings}
                      onChange={(e) => setRoiInputs({ ...roiInputs, costSavings: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                      placeholder="20000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Timeframe (months)
                    </label>
                    <input
                      type="number"
                      value={roiInputs.timeframe}
                      onChange={(e) => setRoiInputs({ ...roiInputs, timeframe: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                      placeholder="12"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-black mb-6">Results</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">Return on Investment</p>
                      <p className="text-3xl font-bold text-green-600">{roiResults.roi}%</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">Net Profit</p>
                      <p className="text-2xl font-bold text-black">${roiResults.netProfit}</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">Total Gain</p>
                      <p className="text-2xl font-bold text-black">${roiResults.totalGain}</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">Payback Period</p>
                      <p className="text-2xl font-bold text-black">{roiResults.paybackMonths} months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTool === 'cost-estimator' && (
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-200 animate-fadeIn">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-black">Project Cost Estimator</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      value={costInputs.projectType}
                      onChange={(e) => setCostInputs({ ...costInputs, projectType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="enterprise">Enterprise Software</option>
                      <option value="mvp">MVP / Prototype</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Team Size
                    </label>
                    <select
                      value={costInputs.teamSize}
                      onChange={(e) => setCostInputs({ ...costInputs, teamSize: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="small">Small (2-3 developers)</option>
                      <option value="medium">Medium (4-7 developers)</option>
                      <option value="large">Large (8+ developers)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Feature Complexity
                    </label>
                    <select
                      value={costInputs.features}
                      onChange={(e) => setCostInputs({ ...costInputs, features: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="basic">Basic Features</option>
                      <option value="standard">Standard Features</option>
                      <option value="advanced">Advanced Features</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Timeline (months)
                    </label>
                    <input
                      type="number"
                      value={costInputs.timeline}
                      onChange={(e) => setCostInputs({ ...costInputs, timeline: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                      placeholder="3"
                      min="1"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-black mb-6">Cost Estimate</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-600 mb-2">Estimated Total Cost</p>
                      <p className="text-4xl font-bold text-blue-600">${costResults.estimatedCost}</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">Monthly Rate</p>
                      <p className="text-2xl font-bold text-black">${costResults.monthlyRate}/mo</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">Hourly Rate</p>
                      <p className="text-2xl font-bold text-black">${costResults.hourlyRate}/hr</p>
                    </div>
                    <div className="mt-6 p-4 bg-blue-100 border-2 border-blue-300 rounded-xl">
                      <p className="text-sm text-blue-800">
                        This is an estimated cost. Actual costs may vary based on specific requirements and project complexity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTool === 'tech-advisor' && (
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-200 animate-fadeIn">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-black">Tech Stack Advisor</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      value={techInputs.projectType}
                      onChange={(e) => setTechInputs({ ...techInputs, projectType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="web">Web Application</option>
                      <option value="mobile">Mobile Application</option>
                      <option value="api">API / Backend</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Scalability Needs
                    </label>
                    <select
                      value={techInputs.scalability}
                      onChange={(e) => setTechInputs({ ...techInputs, scalability: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="low">Low (Small user base)</option>
                      <option value="medium">Medium (Growing user base)</option>
                      <option value="high">High (Large scale)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Level
                    </label>
                    <select
                      value={techInputs.budget}
                      onChange={(e) => setTechInputs({ ...techInputs, budget: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="low">Limited Budget</option>
                      <option value="medium">Moderate Budget</option>
                      <option value="high">Flexible Budget</option>
                    </select>
                  </div>

                  <div className="p-6 bg-purple-50 border-2 border-purple-200 rounded-xl">
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-purple-900 mb-2">Expert Recommendations</p>
                        <p className="text-sm text-purple-700">
                          Our recommendations are based on industry best practices and current market trends.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-black mb-6">Recommended Stack</h3>
                  <div className="space-y-4">
                    {Object.entries(techRecommendations).map(([category, technologies]: [string, any]) => (
                      <div key={category} className="bg-white p-5 rounded-xl shadow-sm">
                        <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">
                          {category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="mt-6 p-4 bg-purple-100 border-2 border-purple-300 rounded-xl">
                      <p className="text-sm text-purple-800">
                        These recommendations are tailored to your specific requirements. Contact us for a detailed consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
              <Calculator className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6">Need More Personalized Advice?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Our experts are ready to provide detailed consultation tailored to your specific project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/request-quote"
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Our Tools?</h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Accurate Calculations</h3>
              <p className="text-gray-600">
                Industry-standard formulas and methodologies for precise estimates
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Save Time</h3>
              <p className="text-gray-600">
                Get instant results without complex spreadsheets or consultations
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Expert Backed</h3>
              <p className="text-gray-600">
                Developed by industry professionals with years of experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeToolPage;
