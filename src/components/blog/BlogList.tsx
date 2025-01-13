import type { BlogPost } from '../../lib/types/blog';
import BlogCard from '../molecules/BlogCard';

type BlogListProps = {
  posts: BlogPost[];
};

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No posts found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  );
}