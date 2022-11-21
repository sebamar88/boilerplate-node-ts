import { Router } from "express";
import { getLitimedPosts } from "./post.handler";

const router = Router();

router.get("/:limit", getLitimedPosts);

export default router;
