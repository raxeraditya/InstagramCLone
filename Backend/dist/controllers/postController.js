import Post from "../models/PostModels";
const comment = async (req, res) => {
    const { postId } = await req.params;
    const body = await req.body;
    if (!body.author || !author) {
        return res.status(400).json({ message: 'Text and author are required' });
    }
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.comments.push({ text, author });
        await post.save();
        res.status(200).json({ message: 'Comment added', post });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', });
    }
};
