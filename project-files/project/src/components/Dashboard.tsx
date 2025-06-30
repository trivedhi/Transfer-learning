import React from 'react';
import { TrendingUp, Shield, AlertTriangle, CheckCircle, Activity, Brain } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Classifications',
      value: '2,847',
      change: '+12.5%',
      icon: Activity,
      color: 'blue'
    },
    {
      title: 'Accuracy Rate',
      value: '94.2%',
      change: '+2.1%',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Diseases Detected',
      value: '156',
      change: '+8.3%',
      icon: AlertTriangle,
      color: 'amber'
    },
    {
      title: 'Healthy Birds',
      value: '1,184',
      change: '+15.2%',
      icon: Shield,
      color: 'emerald'
    }
  ];

  const recentActivity = [
    { time: '2 minutes ago', action: 'Newcastle Disease detected', confidence: '92.4%', severity: 'high' },
    { time: '15 minutes ago', action: 'Healthy bird classified', confidence: '98.7%', severity: 'low' },
    { time: '1 hour ago', action: 'Fowl Pox identified', confidence: '89.1%', severity: 'medium' },
    { time: '2 hours ago', action: 'Coccidiosis detected', confidence: '94.8%', severity: 'medium' },
    { time: '3 hours ago', action: 'Healthy bird classified', confidence: '96.3%', severity: 'low' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-white/20 p-3 rounded-lg">
            <Brain className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Transfer Learning AI Platform</h1>
            <p className="text-blue-100 text-lg">Advanced poultry disease classification using deep learning</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-6 w-6 text-blue-200" />
              <div>
                <p className="text-blue-100 text-sm">Model Performance</p>
                <p className="text-2xl font-bold">94.2%</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Activity className="h-6 w-6 text-blue-200" />
              <div>
                <p className="text-blue-100 text-sm">Active Monitoring</p>
                <p className="text-2xl font-bold">24/7</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-blue-200" />
              <div>
                <p className="text-blue-100 text-sm">Disease Prevention</p>
                <p className="text-2xl font-bold">Real-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            amber: 'bg-amber-100 text-amber-600',
            emerald: 'bg-emerald-100 text-emerald-600'
          };

          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Classifications</h2>
          <p className="text-sm text-gray-600">Latest disease detection activities</p>
        </div>
        <div className="divide-y divide-gray-100">
          {recentActivity.map((activity, index) => (
            <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.severity === 'high' ? 'bg-red-500' :
                    activity.severity === 'medium' ? 'bg-amber-500' :
                    'bg-green-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{activity.confidence}</p>
                  <p className="text-xs text-gray-500">Confidence</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};