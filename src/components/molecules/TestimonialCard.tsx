type TestimonialCardProps = {
  content: string;
  author: string;
  role: string;
  company: string;
};

export default function TestimonialCard({
  content,
  author,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <blockquote className="text-gray-600 mb-4">{content}</blockquote>
      <div>
        <cite className="not-italic font-semibold text-gray-900">{author}</cite>
        <p className="text-sm text-gray-500">{role} at {company}</p>
      </div>
    </div>
  );
}