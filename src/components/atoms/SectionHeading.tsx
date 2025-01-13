import { type ComponentChildren } from 'preact';

type SectionHeadingProps = {
  children: ComponentChildren;
  className?: string;
};

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${className}`}>
      {children}
    </h2>
  );
}