import React, { useState, useCallback } from 'react';
import { Upload, Camera, X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { UploadedImage, ClassificationResult } from '../types';
import { diseases } from '../data/diseases';

export const ImageClassifier: React.FC = () => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const simulateClassification = useCallback((imageId: string) => {
    // Simulate processing delay
    setTimeout(() => {
      const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
      const confidence = Math.random() * 0.3 + 0.7; // 70-100% confidence
      
      const result: ClassificationResult = {
        disease: randomDisease,
        confidence: confidence,
        timestamp: new Date()
      };

      setUploadedImages(prev => 
        prev.map(img => 
          img.id === imageId 
            ? { ...img, result, processing: false }
            : img
        )
      );
    }, 2000 + Math.random() * 2000); // 2-4 seconds processing time
  }, []);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;

    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const preview = URL.createObjectURL(file);

        const newImage: UploadedImage = {
          id: imageId,
          file,
          preview,
          processing: true
        };

        setUploadedImages(prev => [...prev, newImage]);
        simulateClassification(imageId);
      }
    });
  }, [simulateClassification]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const removeImage = useCallback((imageId: string) => {
    setUploadedImages(prev => {
      const imageToRemove = prev.find(img => img.id === imageId);
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
      }
      return prev.filter(img => img.id !== imageId);
    });
  }, []);

  return (
    <div className="space-y-8">
      {/* Upload Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="text-center mb-6">
          <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Poultry Images</h2>
          <p className="text-gray-600">Upload images of poultry for AI-powered disease classification</p>
        </div>

        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            dragActive 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-900 mb-2">
            Drop images here or click to upload
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Supports JPEG, PNG, and WebP formats up to 10MB
          </p>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <Upload className="h-5 w-5 mr-2" />
            Choose Files
          </label>
        </div>
      </div>

      {/* Results */}
      {uploadedImages.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Classification Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uploadedImages.map((image) => (
              <div key={image.id} className="relative bg-gray-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => removeImage(image.id)}
                  className="absolute top-2 right-2 z-10 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
                
                <img
                  src={image.preview}
                  alt="Uploaded poultry"
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">
                      {image.file.name.length > 20 
                        ? `${image.file.name.substring(0, 20)}...` 
                        : image.file.name}
                    </span>
                    {image.processing && (
                      <div className="flex items-center text-blue-600">
                        <Loader2 className="h-4 w-4 animate-spin mr-1" />
                        <span className="text-xs">Processing...</span>
                      </div>
                    )}
                  </div>

                  {image.result && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {image.result.disease.severity === 'High' ? (
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          ) : (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                          <span className="font-medium text-gray-900">
                            {image.result.disease.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          {(image.result.confidence * 100).toFixed(1)}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            image.result.confidence > 0.9 ? 'bg-green-500' :
                            image.result.confidence > 0.8 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${image.result.confidence * 100}%` }}
                        />
                      </div>
                      
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {image.result.disease.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Classification Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <p className="font-medium mb-2">Image Quality Tips:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Use clear, well-lit images</li>
              <li>Focus on affected areas</li>
              <li>Avoid blurry or dark photos</li>
              <li>Include multiple angles if possible</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Best Results:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>High resolution images (min 300x300px)</li>
              <li>Close-up shots of symptoms</li>
              <li>Natural lighting preferred</li>
              <li>Clean background when possible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};