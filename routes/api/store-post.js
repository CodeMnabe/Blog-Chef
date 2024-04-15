import { createPost } from "../../controllers/post.js";

export default async (req, res) => {
  try {
    console.log(req.body.post)
    const post = await createPost(req.body.post);
    res.status(201).json({ post });
  } catch (error) {
    res.status(401).json(error)
  }
}