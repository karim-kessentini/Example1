// src/components/BlogList.tsx
import React, { useState, useMemo } from "react";
import { BlogCard } from "../cards/BlogCard";

type Post = {
  id: string;
  title: string;
  photo: string;
  tags: string[];
  content: string;
  href: string;
  publishDate: string | null;
};

interface BlogListProps {
  posts: Post[];
  postsPerPage?: number;
}

const BlogList: React.FC<BlogListProps> = ({ posts, postsPerPage = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  // Filter posts based on keywords in title, content, or tags
  const filteredPosts = useMemo(() => {
    if (!query) return posts;

    const keywords = query.toLowerCase().split(" ").filter(Boolean);

    return posts.filter((p) => {
      const text = `${p.title} ${p.content} ${p.tags.join(" ")}`.toLowerCase();
      // Return true if all keywords are present
      return keywords.every((kw) => text.includes(kw));
    });
  }, [query, posts]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / postsPerPage)
  );

  const pagePosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return filteredPosts.slice(start, end);
  }, [currentPage, postsPerPage, filteredPosts]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* search */}
      <div className="mb-12 relative">
        <span className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 text-[#102227]/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="11" cy="11" r="5.5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 15l4 4"
              />
            </g>
          </svg>
        </span>
        <input
          className="w-full h-14 pl-12 pr-4 rounded-full bg-white border border-[#94792F]/20 focus:ring-2 focus:ring-[#94792F] focus:border-[#94792F] outline-none transition-shadow"
          placeholder="Search blog posts..."
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pagePosts.length === 0 ? (
          <div className="col-span-full text-center text-gray-600">
            No posts found.
          </div>
        ) : (
          pagePosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              photo={post.photo}
              tags={post.tags}
              content={post.content}
              href={post.href}
            />
          ))
        )}
      </div>

      {/* pagination */}
      <div className="mt-16 flex justify-center items-center gap-2">
        {/* Prev */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="flex size-10 items-center justify-center rounded-full hover:bg-[#94792F]/10 transition-colors disabled:text-gray-300 disabled:hover:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m14.5 17.5l-4.859-4.859a.2.2 0 0 1 0-.282L14.5 7.5"
            />
          </svg>
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const p = i + 1;
          return (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`flex size-10 items-center justify-center rounded-full font-medium text-sm px-3 py-2 ${
                p === currentPage
                  ? "bg-[#94792F] text-white font-bold"
                  : "hover:bg-[#94792F]/10 transition-colors"
              }`}
            >
              {p}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="flex size-10 items-center justify-center rounded-full hover:bg-[#94792F]/10 transition-colors disabled:text-gray-300 disabled:hover:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m9.583 17.5l4.858-4.859a.2.2 0 0 0 0-.282L9.583 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogList;
