import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
    const post = req.body;
    try {
        const createPost = await postService.createPost(post);
        console.log(createPost);
        res.status(201).json({
            success:true,
            data:createPost
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
}

export const postController = {
    createPost
}