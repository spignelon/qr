import React from 'react';
import { Zap, Shield, Smartphone, Download } from 'lucide-react';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instant Generation',
      description: 'QR codes appear as you type',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Everything happens locally',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Perfect on any device',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: Download,
      title: 'Easy Export',
      description: 'Download or copy instantly',
      gradient: 'from-pink-400 to-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur rounded-xl p-4 border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${feature.gradient} mb-3 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm mb-1">
              {feature.title}
            </h3>
            <p className="text-xs text-gray-600">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};