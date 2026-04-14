import express from 'express';
import { postService } from './post.service';
import { postController } from './post.controller';

const router = express.Router();

router.post('/create', postController.createPost);
router.get('/all', postController.getAllPosts);
const postRoutes = router;
export default postRoutes;