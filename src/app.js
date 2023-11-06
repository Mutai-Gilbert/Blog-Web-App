import express from "express";
import { v4 as uuidv4 } from "uuid";
import bodyParser from "body-parser";
import serverless from "serverless-http";

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// load assets

app.use(express.static('public'));


let blogPosts = [];

// Home routes
app.use(router);

router.get('/', (req, res) => {
    res.render('index', { blogPosts });
});

router.get('/create', (req, res) => {
    res.render('create');
});


router.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    const post = blogPosts.find((post) => post.id === postId);
    res.render('post', { post })
});

// Route to handle form submission

router.post('/create', (req, res) => {
    const newPost = {
        id: uuidv4(),
        title: req.body.title,
        content: req.body.content,
    };
    blogPosts.push(newPost);
    res.redirect('/');
});

// Route to display the form for editing a specific post

router.get('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const postToEdit = blogPosts.find((post) => post.id === postId);
    res.render('edit', { post: postToEdit });
});


//Route to post
router.post('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const postEdit = blogPosts.find((post) => post.id === postId);
    postEdit.title = req.body.title;
    postEdit.content = req.body.content;
    res.redirect('/');
});

// Route to delete

router.delete('/post/:id', (req, res) => {
    const postId = req.params.id;
    const postToDelete = blogPosts.filter((post) => post.id !== postId);
    res.redirect('/');
});


app.use('/.netlify/functions/api', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export const  { handler } = serverless(app);