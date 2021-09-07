const router = require("express").Router();
const { check, validationResult } = require("express-validator");

const Flash = require("../../utils/Flash");

router.get("/", (req, res, next) => {
   console.log(Flash.getMessage(req));

   res.render("pages/playground/signup", {
      title: "Signup",
   });
});
router.post(
   "/",
   [
      check("username")
         .not()
         .isEmpty()
         .withMessage("Username is required")
         .isLength({ max: 15 })
         .withMessage(`Username must be 15 character`),
      check("email").isEmail().withMessage(`Email is required`),
   ],
   (req, res, next) => {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
         req.flash("fail", "There are have a error");
      } else {
         req.flash("success", "there are have no error");
      }
      res.redirect("/playground");
   }
);

module.exports = router;
