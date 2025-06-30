import React from 'react';
import { Brain, Shield, Zap, Users, Award, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Technology',
      description: 'Powered by state-of-the-art transfer learning models for accurate disease classification.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Early Disease Detection',
      description: 'Identify diseases before they spread, protecting entire flocks from outbreaks.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Get instant results with our optimized deep learning inference pipeline.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: 'Expert Validated',
      description: 'Developed in collaboration with veterinary experts and poultry health specialists.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const achievements = [
    { metric: '94.2%', label: 'Classification Accuracy' },
    { metric: '2,847+', label: 'Images Analyzed' },
    { metric: '156', label: 'Diseases Detected' },
    { metric: '24/7', label: 'Monitoring Available' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-white/20 p-3 rounded-lg">
              <Brain className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Transfer Learning-Based Classification</h1>
              <p className="text-blue-100 text-lg">of Poultry Diseases for Enhanced Health</p>
            </div>
          </div>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Our cutting-edge AI platform leverages advanced transfer learning techniques to provide 
            accurate, real-time classification of poultry diseases, enabling early detection and 
            proactive health management for improved flock welfare and productivity.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-blue-200 font-medium">Deep Learning</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-blue-200 font-medium">Computer Vision</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-blue-200 font-medium">Veterinary AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-900">{achievement.metric}</span>
            </div>
            <p className="text-sm text-gray-600">{achievement.label}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Technical Approach */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Award className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Technical Approach</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Transfer Learning Architecture</h3>
            <p className="text-gray-600 leading-relaxed">
              Our model is built upon pre-trained convolutional neural networks, specifically leveraging 
              ResNet and EfficientNet architectures. By utilizing transfer learning, we achieve superior 
              performance with limited training data while reducing computational requirements.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-sm text-gray-700">Pre-trained on ImageNet dataset</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-sm text-gray-700">Fine-tuned on poultry disease dataset</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-sm text-gray-700">Optimized for real-time inference</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Disease Classification Pipeline</h3>
            <p className="text-gray-600 leading-relaxed">
              The classification pipeline includes image preprocessing, feature extraction, and 
              multi-class classification with confidence scoring. Our system can identify multiple 
              diseases simultaneously and provide actionable insights for treatment.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <span className="text-sm text-gray-700">Image augmentation and normalization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <span className="text-sm text-gray-700">Multi-scale feature extraction</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <span className="text-sm text-gray-700">Ensemble prediction voting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact & Benefits */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">Impact & Benefits</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Disease Prevention</h3>
            <p className="text-gray-600">Early detection prevents disease spread, reducing mortality rates by up to 60%</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Decision Making</h3>
            <p className="text-gray-600">AI-powered insights enable data-driven treatment decisions and resource optimization</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Productivity</h3>
            <p className="text-gray-600">Improved flock health leads to increased egg production and better meat quality</p>
          </div>
        </div>
      </div>
    </div>
  );
};