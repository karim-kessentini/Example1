import React from "react";

type Props = {
  title: string;
  photo: string;
  tags: string[];
  content: string;
  href: string;
};

export const BlogCard: React.FC<Props> = ({ title, photo, tags, content, href }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      {photo && (
        <img src={photo} alt={title} className="rounded-md mb-4 w-full h-48 object-cover" />
      )}
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {content.substring(0, 100)}...
      </p>
      <div className="flex gap-2 mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-[#94792F]/10 text-[#94792F] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={href} className="text-[#94792F] font-medium">
        Read more &rarr;
      </a>
    </div>
  );
};

