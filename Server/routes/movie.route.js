import express from "express";
import { createMovie, deleteMovie, getByID, listAll, updateMovie } from "../controller/movie.controller.js";

const router = express.Router();

router.get("/",listAll)

router.get("/:id",getByID)

router.post("/",createMovie)

router.put("/:id",updateMovie)

router.delete("/:id",deleteMovie)

export default router;