import { formatDate } from "../../utils/formatDate";
import { createPath } from "../../utils/path";

type ExperienceCardProps = {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  skills: string[];
  slug: string;
};

export default function ExperienceCard({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  skills,
  slug,
}: ExperienceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <div className="text-primary-600 font-medium mb-2">{company}</div>
      <div className="text-gray-500 text-sm mb-4">
        {location} • {formatDate(startDate)} -{" "}
        {endDate ? formatDate(endDate) : "Present"}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      <a
        href={createPath(`work/${slug}`)}
        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
      >
        Read more
        <svg
          className="w-4 h-4 ml-1"
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
