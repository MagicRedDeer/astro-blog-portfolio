import { Search, Filter } from 'lucide-preact';

type BlogFilterProps = {
  tags: string[];
  search: string;
  selectedTag: string;
  onSearchChange: (search: string) => void;
  onTagChange: (tag: string) => void;
};

export default function BlogFilter({
  tags,
  search,
  selectedTag,
  onSearchChange,
  onTagChange,
}: BlogFilterProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => onSearchChange(e.currentTarget.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedTag}
              onChange={(e) => onTagChange(e.currentTarget.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none bg-white"
            >
              <option value="">All tags</option>
              {tags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}