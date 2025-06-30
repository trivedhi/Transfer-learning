import React, { useState } from 'react';
import { Search, AlertTriangle, Shield, Info, TrendingUp } from 'lucide-react';
import { diseases } from '../data/diseases';

export const DiseaseDatabase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = selectedSeverity === 'all' || disease.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'High':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'Medium':
        return <Info className="h-5 w-5 text-amber-500" />;
      case 'Low':
        return <Shield className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="text-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
            <Info className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Disease Database</h2>
          <p className="text-gray-600">Comprehensive information about poultry diseases and their characteristics</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search diseases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <select
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Severities</option>
            <option value="High">High Severity</option>
            <option value="Medium">Medium Severity</option>
            <option value="Low">Low Severity</option>
          </select>
        </div>
      </div>

      {/* Disease Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDiseases.map((disease) => (
          <div key={disease.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {getSeverityIcon(disease.severity)}
                  <h3 className="text-xl font-semibold text-gray-900">{disease.name}</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(disease.severity)}`}>
                    {disease.severity} Risk
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {disease.prevalence}%
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{disease.description}</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Symptoms */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Common Symptoms</h4>
                <div className="flex flex-wrap gap-2">
                  {disease.symptoms.map((symptom, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              {/* Treatment */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Treatment & Prevention</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{disease.treatment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDiseases.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No diseases found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
};