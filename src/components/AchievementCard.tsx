import React from 'react';
import { Trophy } from 'lucide-react';

interface AchievementCardProps {
  name: string;
  position: string;
  description: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  name,
  position,
  description,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
       <div className="flex flex-col sm:flex-row items-start gap-4">
         <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
          <Trophy className="text-yellow-500" size={24} />
        </div>
        <div className="text-center sm:text-left">
           <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
           <p className="text-yellow-500 dark:text-yellow-400 font-medium text-sm sm:text-base">{position}</p>
           <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;