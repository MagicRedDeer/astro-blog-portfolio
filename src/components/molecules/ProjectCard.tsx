import type { ProjectContent } from '../../lib/types/content';

type ProjectCardProps = ProjectContent;

export default function ProjectCard({
  name,
  description,
  year,
  repository,
  homepage,
  skills,
  slug,
}: ProjectCardProps) {
  return (
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold text-gray-900">{name}</h3>
      <div class="text-gray-500 text-sm mb-4">{year}</div>
      <p class="text-gray-600 mb-4">{description}</p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            class="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <div class="flex items-center gap-4">
        <a
          href={`/projects/${slug}`}
          class="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
        >
          Read more
          <svg
            class="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
        
        {repository && (
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-gray-700"
          >
            Repository
          </a>
        )}
        
        {homepage && (
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-gray-700"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
}