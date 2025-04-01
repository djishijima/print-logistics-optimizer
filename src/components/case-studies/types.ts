
import { ReactNode } from 'react';

export interface CaseStudy {
  icon: ReactNode;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  roi: string;
}

export interface Metric {
  icon: ReactNode;
  metric: string;
  title: string;
  description: string;
}
