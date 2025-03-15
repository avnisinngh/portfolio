import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section 
       id={id} 
       className={`px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 ${className}`}
     >
      {children}
    </section>
  );
};

export default Section;