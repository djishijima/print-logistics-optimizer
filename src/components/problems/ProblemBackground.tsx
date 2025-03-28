
import React from 'react';

const ProblemBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-bunshodo-light-blue/5 filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-bunshodo-light-green/5 filter blur-3xl"></div>
      <svg className="absolute top-0 right-0 text-bunshodo-blue/5 w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M42.8,-62.2C52.3,-51.7,55.4,-35.5,58.9,-20.4C62.4,-5.3,66.2,8.6,63.3,21.3C60.4,33.9,50.8,45.3,38.9,53.1C27.1,60.9,13.5,65.1,-0.4,65.7C-14.3,66.2,-28.7,63.1,-40.3,55.2C-51.9,47.3,-60.8,34.6,-66.8,19.9C-72.7,5.1,-75.8,-11.7,-70.6,-25.4C-65.3,-39,-51.8,-49.6,-38,-58.4C-24.3,-67.1,-10.2,-74,3.8,-79.1C17.7,-84.2,33.4,-72.7,42.8,-62.2Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute bottom-0 left-0 text-bunshodo-green/5 w-72 h-72" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M42.7,-69.2C55,-59.3,64.3,-46.6,70.8,-32.4C77.2,-18.1,80.8,-2.3,78.1,12.3C75.4,26.9,66.3,40.2,55,51.5C43.8,62.8,30.3,72.1,14.8,77.3C-0.7,82.5,-18.3,83.5,-33.4,77.6C-48.5,71.7,-61.1,58.9,-70.2,43.3C-79.3,27.7,-84.9,9.3,-81.9,-7.3C-78.9,-23.8,-67.2,-38.5,-54,-51.3C-40.9,-64.1,-26.3,-75,1.7,-77.5C13.7,-80,30.4,-79.1,42.7,-69.2Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
};

export default ProblemBackground;
