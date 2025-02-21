import Spline from '@splinetool/react-spline/next';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaRocket, FaLightbulb, FaChartLine, FaCogs } from 'react-icons/fa';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export default function Home() {
  const features = [
    {
      icon: <FaRocket className="w-12 h-12 mb-4 text-purple-500" />,
      title: "Fast & Efficient",
      description:
        "Boost your productivity with lightning-fast task management and AI-powered suggestions.",
    },
    {
      icon: <FaLightbulb className="w-12 h-12 mb-4 text-blue-500" />,
      title: "Smart Insights",
      description:
        "Get actionable insights and recommendations to optimize your workflow.",
    },
    {
      icon: <FaChartLine className="w-12 h-12 mb-4 text-green-500" />,
      title: "Progress Tracking",
      description:
        "Track your progress with detailed analytics and visual reports.",
    },
    {
      icon: <FaCogs className="w-12 h-12 mb-4 text-orange-500" />,
      title: "Customizable",
      description:
        "Tailor Todo.ai to your needs with customizable workflows and integrations.",
    },
  ];

  const words = [
    

    {
      text: "Our",
      className: "text-green-400 dark:text-green-400",
    },
    {
      text: "Features.",
      className: "text-green-400 dark:text-green-400",
    },
  ];

  return (
    <>
      <div className="flex-1 relative">
        <Spline
          scene="https://prod.spline.design/scFqWJL9fzdh45In/scene.splinecode"
        />
        <div className="absolute bottom-4 right-4 bg-slate-600 text-white px-4 py-2 rounded-lg shadow-lg text-lg font-semibold">
TASK X.Ai - Wachan       </div>
      </div>

      

      {/* Redesigned Features Section */}
      <section className="py-16 bg-black text-white">
  <div className="max-w-6xl mx-auto px-6 text-center ">
<div className='mb-8'><TypewriterEffect words={words} /></div>
  

      
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="relative flex flex-col">
          {/* Glowing effect container with increased intensity */}
          <GlowingEffect
            spread={100}      // Increased spread
            glow={true}
            disabled={false}
            proximity={50}    // Decreased proximity for more intense glow
            inactiveZone={0.01}
          />
          <div className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-lg transition-colors hover:bg-gray-700 relative z-10 h-[300px]">
            {feature.icon}
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-sm text-gray-300 text-center">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Dark Theme Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Task X.ai</h3>
              <p className="text-sm text-gray-400">
                Task x.ai is your ultimate productivity companion, designed to help you achieve more with AI-powered task management.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Task X.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
