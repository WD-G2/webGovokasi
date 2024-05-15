import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:3000',
});

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      let response = await client.get('blogs');
      setBlogs(response.data);
    };
    fetchBlogs();
  }, [blogs]);

  return blogs;
}

const BlogSection = () => {
  return (
    <div className="container mx-auto">
      <div id="blogs" className="mt-6 relative pt-2 lg:pt-2 min-h-screen">
        <h1 className="text-center text-4xl p-3 bg-[#1a1d40] text-white">
          Blogs
        </h1>
        <div
          className="bg-cover w-full flex justify-center items-center"
          style={{ backgroundImage: "url('/images/mybackground.jpeg')" }}
        >
          <div className="w-full bg-white p-5  bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
                { Blogs().map( (blog, idx) => {
                  <BlogCard key={idx}
                    title={blog.title}
                    author={blog.author}
                    img_url={blog.img_url}
                    created_at={blog.created_at}
                  />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
