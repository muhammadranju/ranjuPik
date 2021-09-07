const homeRoute = require("express").Router();
const imgs = require("./images");

homeRoute.get("/", (req, res, next) => {
   res.status(200).render("pages/home/homePage", {
      title: "Unlimited Templates, Themes and More",
      imgs,
   });
});

homeRoute.get("/logout", (req, res, next) => {
   res.header("Cache-Control", "no-cache");
   req.session.destroy((err) => {
      if (err) {
         return next(err);
      }
   });
   res.redirect("/authentic/login");
});

homeRoute.use((req, res, next) => {
   res.status(404).render("pages/errorPage/404Error", {
      title: "404 - Unlimited Templates, Themes and More",
   });
   next();
});
module.exports = homeRoute;
