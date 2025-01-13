import type { BlogPost } from '../../lib/types/blog';
import { useBlogFilter } from '../../lib/hooks/useBlogFilter';
import BlogFilter from '../molecules/BlogFilter';
import BlogList from './BlogList';
import Pagination from '../molecules/Pagination';

type BlogContentProps = {
  posts: BlogPost[];
};

export default function BlogContent({ posts }: BlogContentProps) {
  const {
    search,
    setSearch,
    selectedTag,
    setSelectedTag,
    currentPage,
    setCurrentPage,
    paginatedPosts,
    totalPages,
  } = useBlogFilter(posts);

  const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];

  return (
    <div className="space-y-8">
      <BlogFilter
        tags={uniqueTags}
        search={search}
        selectedTag={selectedTag}
        onSearchChange={setSearch}
        onTagChange={setSelectedTag}
      />
      <BlogList posts={paginatedPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}