import { formatDate } from "../../utils/formatDate";
import { createPath } from "../../utils/path";
import type { EducationContent } from "../../lib/types/content";

type EducationCardProps = EducationContent;

export default function EducationCard({
  institution,
  degree,
  startDate,
  endDate,
  description,
  projects,
  slug,
}: EducationCardProps) {
  return (
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold text-gray-900">{degree}</h3>
      <div class="text-primary-600 font-medium mb-2">{institution}</div>
      <div class="text-gray-500 text-sm mb-4">
        {formatDate(startDate)} - {formatDate(endDate)}
      </div>
      <p class="text-gray-600 mb-4">{description}</p>

      <a
        href={createPath(`education/${slug}`)}
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
    </div>
  );
}
