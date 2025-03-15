import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
          <Briefcase className="text-purple-500" size={24} />
        </div>
        <div>
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{company}</p>
          <p className="text-sm text-blue-500 dark:text-blue-400">{period}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;