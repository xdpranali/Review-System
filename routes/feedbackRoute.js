import { createAdmin, createAlumni, createStudent, getAllUsers } from "../controllers/userController.js";
import { createCompany, getCompanies} from "../controllers/companyController.js";
import { createReview, getAllReviews} from "../controllers/reviewController.js"
import { likeReviews} from "../controllers/likeController.js";
import express from "express";
import { isAdmin } from "../middleware/Middleware.js";

const router = express.Router()
//controller or route
//post:create , get:fetch
//route for user
router.post("/admin/create", createAdmin);
router.post("/alumni/create", createAlumni);
router.post("/student/create", createStudent);
router.get("/user/get/create", getAllUsers);

//route for company
router.post("/company/create", isAdmin,createCompany);
router.get("/company/get/create", getCompanies);

//route for review
router.post("/review/create", createReview);
router.get("/review/get/create", getAllReviews);

router.post("/likes/add", likeReviews);

export default router;

