import { Calendar, Tag, User } from "lucide-preact";
import { formatDate } from "../../utils/formatDate";
import { createPath } from "../../utils/path";

type BlogCardProps = {
  title: string;
  description: string;
  publishDate: Date;
  author: string;
  tags: string[];
  slug: string;
};

export default function BlogCard({
  title,
  description,
  publishDate,
  author,
  tags,
  slug,
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <a
            href={createPath(`blog/${slug}`)}
            className="text-gray-900 hover:text-primary-600"
          >
            {title}
          </a>
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(publishDate)}
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {author}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              <span className="text-sm text-primary-600">{tag}</span>
            </span>
          ))}
        </div>
        <a
          href={createPath(`blog/${slug}`)}
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
    </article>
  );
}
