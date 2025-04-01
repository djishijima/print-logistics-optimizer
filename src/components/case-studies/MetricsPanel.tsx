
import React from 'react';
import GlassPanelEffect from '../GlassPanelEffect';
import { Metric } from './types';

interface MetricsPanelProps {
  metrics: Metric[];
}

const MetricsPanel: React.FC<MetricsPanelProps> = ({ metrics }) => {
  return (
    <div className="mb-16 reveal">
      <GlassPanelEffect
        className="p-8 rounded-2xl"
        intensity="light"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-bunshodo-blue/10 mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-bunshodo-blue mb-2">
                {metric.metric}
              </div>
              <h4 className="text-lg font-semibold mb-1">{metric.title}</h4>
              <p className="text-sm text-bunshodo-medium-gray">{metric.description}</p>
            </div>
          ))}
        </div>
      </GlassPanelEffect>
    </div>
  );
};

export default MetricsPanel;
