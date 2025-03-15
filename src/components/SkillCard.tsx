import React from 'react';

interface SkillCardProps {
  category: string;
  items: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ category, items }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
       <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center sm:text-left">{category}</h3>
       <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs sm:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;