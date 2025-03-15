import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 sm:p-6">
         <h3 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
          {title}
          <a
            href={link}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
          </a>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
           {description}
         </p>
         <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;