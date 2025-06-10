import React from "react";

const posts = [
  {
    id: 1,
    title: "make up",
    image: "woman3.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "cosmetic trends",
    image: "cosmetic.jpg",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "make over",
    image: "cos.jpg",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const GalleryBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#eed0d4] via-[#efeeee] to-[#f6c3ca] px-4 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#6b4c4c] mb-10">
        Gallery & Blog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map(({ id, title, image, excerpt }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#6b4c4c] mb-3">
                {title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">{excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryBlog;
