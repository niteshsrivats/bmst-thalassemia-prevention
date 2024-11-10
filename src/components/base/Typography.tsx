import React from 'react';
import clsx from 'clsx'; // Import your CSS here

// Define the types for props
type TypographyType = 'display' | 'headline' | 'title' | 'label' | 'body';
type TypographySize = 'large' | 'medium' | 'small';

interface TypographyProps {
  type: TypographyType;
  size: TypographySize;
  children: React.ReactNode;
  className?: string;
}

// Helper to map type and size to corresponding HTML tags
const tagMap: Record<TypographyType, keyof JSX.IntrinsicElements> = {
  display: 'h1',
  headline: 'h2',
  title: 'h3',
  label: 'h4',
  body: 'p',
};

const Typography: React.FC<TypographyProps> = ({ type, size, children, className }) => {
  const Tag = tagMap[type]; // Determine the HTML element to render

  // Dynamic class based on type and size
  const typographyClass = `${type}-${size}`;

  return <Tag className={clsx(typographyClass, className)}>{children}</Tag>;
};

export default Typography;
