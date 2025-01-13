import { useEffect, useRef } from 'preact/hooks';
import { initScrollspy } from '../../utils/scrollspy';

type Section = {
  id: string;
  label: string;
};

type ScrollspyNavProps = {
  sections: Section[];
};

export default function ScrollspyNav({ sections }: ScrollspyNavProps) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initScrollspy();
  }, []);

  return (
    <div 
      ref={navRef}
      className="sticky top-20 bg-white rounded-lg shadow-md p-4"
    >
      <nav>
        <ul className="space-y-2">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                data-scrollspy
                className="block py-2 px-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors [&.active]:bg-primary-100 [&.active]:text-primary-700 [&.active]:font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}