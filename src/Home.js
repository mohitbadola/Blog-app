import { useState } from "react";
import BlogList from "./blogList";


const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "my new website", body: "lorem ipsum...", author: "mohit", id: 1},
    {title: "Welcome party", body: "lorem ipsum...", author: "kau kau", id: 2},
    {title: "wow awesome", body: "lorem ipsum...", author: "sohit", id: 3}
  ]) ;

  const handleDelete = (id) => {
  const newBlogs = blogs.filter(blog=> blog.id!== id);
  setBlogs(newBlogs);
  }

  return (
    <div className="home">
    <BlogList blogs = {blogs} title = "Blog" handleDelete={handleDelete}/>
    </div>
  );
};

export default Home;
