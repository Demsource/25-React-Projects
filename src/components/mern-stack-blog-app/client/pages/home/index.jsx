import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import classes from "./styles.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  async function fetchListOfBlogs() {
    setPending(true);

    const response = await axios("http://localhost:5550/api/blogs");
    const result = await response.data;

    if (result?.blogList?.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  }

  async function handleDeleteBlog(getCurrentId) {
    const response = await axios.delete(
      `http://localhost:5550/api/blogs/delete/${getCurrentId}`
    );
    const result = await response.data;

    if (result?.message) {
      fetchListOfBlogs();
      // navigate(0);
    }
  }

  function handleEdit(getCurrentBlogItem) {
    navigate("/add-blog", { state: { getCurrentBlogItem } });
  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>Blog List</h1>
      {pending ? (
        <h2>Loading Blogs. Please Wait...</h2>
      ) : (
        <div className={classes.blogList}>
          {blogList?.length ? (
            blogList.map((blog) => (
              <div key={blog._id}>
                <p>{blog.title}</p>
                <p>{blog.description}</p>
                <FaEdit onClick={() => handleEdit(blog)} size={30} />
                <FaTrash onClick={() => handleDeleteBlog(blog._id)} size={30} />
              </div>
            ))
          ) : (
            <h3>No Blogs To Show</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
