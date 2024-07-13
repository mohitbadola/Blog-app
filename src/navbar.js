const Navbar = () => {
  return (
    <div className="navbar">
      <h1>The Blog</h1>
      <div className="link">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blogs
        </a>
      </div>
    </div>
  );
};

export default Navbar;
