import React from 'react';
import { Zap, Shield, Smartphone, Download } from 'lucide-react';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instant Generation',
      description: 'QR codes appear as you type',
      iconClass: 'bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Everything happens locally',
      iconClass: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Perfect on any device',
      iconClass: 'bg-sky-100 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400'
    },
    {
      icon: Download,
      title: 'Easy Export',
      description: 'Download or copy instantly',
      iconClass: 'bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 rounded-xl p-3 sm:p-4 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all duration-200"
          >
            <div className={`inline-flex p-2 rounded-lg ${feature.iconClass} mb-2 sm:mb-3`}>
              <Icon className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 text-sm mb-1">
              {feature.title}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
