import { Router } from "express";
const fetch = require("node-fetch");

const router = Router();

router.get("/:limit", async (req, res) => {
    const limit = req.params.limit;
    const userId = req.query.userId;
    const posts = await (
        await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=${limit}${
                userId && `&userId=${userId}`
            }`
        )
    ).json();
    const comments = await (
        await fetch(
            `https://jsonplaceholder.typicode.com/comments?_limit=${limit}`
        )
    ).json();
    const postWithComments = posts.map((post: any) => {
        return {
            ...post,
            comments: comments.filter(
                (comment: any) => comment.postId === post.id
            ),
        };
    });
    res.json(postWithComments);
});

export default router;
