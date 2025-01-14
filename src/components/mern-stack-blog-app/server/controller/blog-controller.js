const mongoose = require("mongoose");
const Blog = require("../model/Blog");

// Fetch Blogs
const fetchListOfBlogs = async (req, res) => {
  let blogList;

  try {
    blogList = await Blog.find();
  } catch (error) {
    console.error(error);
  }

  if (!blogList) {
    return res.status(404).json({ message: "No Blogs Found" });
  }

  return res.status(200).json({ blogList });
};

// Add Blog
const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  const newlyCreatedBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newlyCreatedBlog.save();
  } catch (error) {
    console.error(error);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newlyCreatedBlog.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.send(500).json({ message: error });
  }
  return res.status(200).json({ newlyCreatedBlog });
};

// Delete Blog
const deleteBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog)
      return res.status(404).json({ message: "Blog Not Found" });
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Unable To Delete. Please Try Again..." });
  }
};

// Update Blog
const updateBlog = async (req, res) => {
  const id = req.params.id;

  const { title, description } = req.body;
  let currentBlogToUpdate;

  try {
    currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: "Update filed. Please Try Again" });
  }

  if (!currentBlogToUpdate)
    return res.status(500).json({ message: "Unable To Update" });

  return res.status(200).json({ currentBlogToUpdate });
};

module.exports = {
  fetchListOfBlogs,
  deleteBlog,
  updateBlog,
  addNewBlog,
};
