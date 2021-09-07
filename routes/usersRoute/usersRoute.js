const express = require("express");
const usersRoute = express.Router();

const { isAuthenticated } = require("../../middleware/authMiddleware");

usersRoute.get("/", (req, res) => {
   res.redirect("/");
});

usersRoute.get("/profile", (req, res) => {
   res.status(200).render("pages/users/userProfile", {
      title: "Muhammad Ranju - Pikslide",
   });
});
usersRoute.get("/setting", isAuthenticated, (req, res) => {
   res.status(200).render("pages/users/userSettings", {
      title: "Setting",
   });
});
usersRoute.get("/upload", isAuthenticated, (req, res) => {
   res.status(200).render("pages/users/userProductUpload", {
      title: "Pikslide Submission",
   });
});
usersRoute.get("/downloads", isAuthenticated, (req, res) => {
   res.status(200).render("pages/users/userMyDownloads", {
      title: "Downloads",
   });
});
usersRoute.get("/bookmark", isAuthenticated, (req, res) => {
   res.status(200).render("pages/users/userBookmark", {
      title: "Your Bookmark",
   });
});
usersRoute.get("/sales", isAuthenticated, (req, res) => {
   res.status(200).render("pages/users/userSales", {
      title: "Seles",
   });
});
usersRoute.get("/email_setting", isAuthenticated, (req, res) => {
   res.status(200).render("pages/users/userEmail", {
      title: "Email Setting",
   });
});
usersRoute.get("/billing", isAuthenticated, (req, res) => {
   res.status(200).render("pages/users/userBilling", {
      title: "Billing",
   });
});
usersRoute.get("/mycart", isAuthenticated, (req, res) => {
   res.status(200).render("pages/users/userMycart", {
      title: "My Cart",
   });
});

module.exports = usersRoute;
