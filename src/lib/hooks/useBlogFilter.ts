import { useState, useEffect } from 'preact/hooks';
import type { BlogPost } from '../types/blog';
import { POSTS_PER_PAGE } from '../constants/blog';

export function useBlogFilter(posts: BlogPost[]) {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const filtered = posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                          post.description.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
    
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [search, selectedTag, posts]);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  return {
    search,
    setSearch,
    selectedTag,
    setSelectedTag,
    currentPage,
    setCurrentPage,
    paginatedPosts,
    totalPages,
  };
}