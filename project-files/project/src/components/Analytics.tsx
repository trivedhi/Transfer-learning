import React from 'react';
import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';

export const Analytics: React.FC = () => {
  const monthlyData = [
    { month: 'Jan', classifications: 184, accuracy: 92.1 },
    { month: 'Feb', classifications: 221, accuracy: 93.4 },
    { month: 'Mar', classifications: 278, accuracy: 94.2 },
    { month: 'Apr', classifications: 312, accuracy: 94.8 },
    { month: 'May', classifications: 398, accuracy: 95.1 },
    { month: 'Jun', classifications: 445, accuracy: 94.7 }
  ];

  const diseaseDistribution = [
    { name: 'Healthy', count: 1184, percentage: 41.6, color: 'bg-green-500' },
    { name: 'Coccidiosis', count: 629, percentage: 22.1, color: 'bg-amber-500' },
    { name: 'Newcastle Disease', count: 433, percentage: 15.2, color: 'bg-red-500' },
    { name: 'Fowl Pox', count: 353, percentage: 12.4, color: 'bg-orange-500' },
    { name: 'Avian Influenza', count: 248, percentage: 8.7, color: 'bg-purple-500' }
  ];

  const modelMetrics = [
    { metric: 'Overall Accuracy', value: '94.2%', change: '+2.1%', trend: 'up' },
    { metric: 'Precision', value: '93.8%', change: '+1.8%', trend: 'up' },
    { metric: 'Recall', value: '94.6%', change: '+2.3%', trend: 'up' },
    { metric: 'F1-Score', value: '94.2%', change: '+2.0%', trend: 'up' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="text-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
            <BarChart3 className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h2>
          <p className="text-gray-600">Performance insights and classification statistics</p>
        </div>
      </div>

      {/* Model Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modelMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Activity className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-green-600 font-medium flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                {metric.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{metric.metric}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Classifications Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Classifications</h3>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700 w-8">{data.month}</span>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2 w-32">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(data.classifications / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-gray-900">{data.classifications}</span>
                  <p className="text-xs text-gray-500">{data.accuracy}% acc</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disease Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <PieChart className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Disease Distribution</h3>
          </div>
          <div className="space-y-4">
            {diseaseDistribution.map((disease, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{disease.name}</span>
                  <span className="text-sm text-gray-600">{disease.count} ({disease.percentage}%)</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${disease.color}`}
                    style={{ width: `${disease.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Classification Accuracy by Disease</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Disease</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Total Cases</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Accuracy</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Precision</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Recall</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Newcastle Disease', cases: 433, accuracy: 96.3, precision: 94.8, recall: 97.2 },
                { name: 'Avian Influenza', cases: 248, accuracy: 94.8, precision: 93.1, recall: 96.4 },
                { name: 'Fowl Pox', cases: 353, accuracy: 92.7, precision: 91.3, recall: 94.1 },
                { name: 'Coccidiosis', cases: 629, accuracy: 95.1, precision: 94.6, recall: 95.7 },
                { name: 'Healthy', cases: 1184, accuracy: 97.2, precision: 96.8, recall: 97.6 }
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{row.name}</td>
                  <td className="py-3 px-4 text-center text-gray-600">{row.cases}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {row.accuracy}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600">{row.precision}%</td>
                  <td className="py-3 px-4 text-center text-gray-600">{row.recall}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};