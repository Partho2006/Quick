import express from 'express';
import { generateArticle, generateBlogTitle, generateImage, removeImageObject, removeImageBackground, resumeReview } from '../controllers/aiController.js';
import { auth } from '../middlewares/auth.js';
import { upload } from '../configs/multer.js';

const aiRouter = express.Router();


aiRouter.post('/generate-article', auth, generateArticle);

aiRouter.post('/generate-blog-title', auth, generateBlogTitle);

aiRouter.post('/generate-image', auth, generateImage);

aiRouter.post('/generate-image-background', upload.single('image'), auth, removeImageBackground);

aiRouter.post('/generate-image-object', upload.single('image'), auth, removeImageObject);

aiRouter.post('/resume-review', upload.single('image'), auth, resumeReview);


export default aiRouter;