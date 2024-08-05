import { useState, useEffect } from "react";
import BlogList from "./blogList";


const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "my new website", body: "lorem ipsum...", author: "mohit", id: 1},
    {title: "Welcome party", body: "lorem ipsum...", author: "kau kau", id: 2},
    {title: "wow awesome", body: "lorem ipsum...", author: "sohit", id: 3}
  ]) ;

  const[name, setName] = useState('Green Arrow');

  const handleDelete = (id) => {
  const newBlogs = blogs.filter(blog=> blog.id!== id);
  setBlogs(newBlogs);
  }

  useEffect(()=>{
    console.log("use effect ran");
    console.log(name);
  },[name]);

  return (
    <div className="home">
    <BlogList blogs = {blogs} title = "Blog" handleDelete={handleDelete}/>
    <button onClick={()=>setName('Oliver Queen')}>change name</button>
    <p>{name}</p>
    </div>
  );
};

export default Home;
