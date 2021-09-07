const express = require("express");
const postsRoute = express.Router();

postsRoute.get("/", (req, res) => {
   res.status(200).render("pages/posts/allProduct", {
      title: "Posts Product",
   });
});
postsRoute.get("/products", (req, res) => {
   res.status(200).render("pages/posts/singleProduct", {
      title: "New Social Media Poster",
   });
});

module.exports = postsRoute;
