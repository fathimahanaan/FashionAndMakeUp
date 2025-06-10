import React, { useRef } from "react";
import Home from "../components/home/Home";
import GalleryBlog from "../components/blog/GalleryBlog";

const HomePage = () => {
  const blogRef = useRef(null);

  const scrollToBlog = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Home onScrollToBlog={scrollToBlog} />
      <div ref={blogRef}>
        <GalleryBlog />
      </div>
    </div>
  );
};

export default HomePage;
