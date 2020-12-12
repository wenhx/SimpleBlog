import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  let message: string = Date() + " Hello guest!";
  if (req.session.user) {
      message = Date() + " Hello " + req.session.user.displayName;
  }
  res.render('index', { webPage: { title: "Welcome to SimpleBlog!" }, message: message });
});

export default router;