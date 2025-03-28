
import React from 'react';

const ProblemHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-bunshodo-blue/20 to-bunshodo-green/20 backdrop-blur-sm mb-6 reveal">
        <span className="text-sm font-medium bg-gradient-to-r from-bunshodo-blue to-bunshodo-green bg-clip-text text-transparent">
          お客様の課題
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight reveal">
        こんなお悩み、ありませんか？
      </h2>
      <p className="text-bunshodo-medium-gray text-lg md:text-xl max-w-2xl mx-auto reveal">
        1つでも当てはまるなら、文唱堂印刷にお任せください！
      </p>
    </div>
  );
};

export default ProblemHeader;
