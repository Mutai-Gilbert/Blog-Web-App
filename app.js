import express from "express";
import { v4 as uuidv4 } from "uuid";
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


let blogPosts = [];

// Set routes

app.get('/', (req, res) => {
    res.render('index', { blogPosts });
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    const post = blogPosts.find((post) => post.id === postId);
    res.render('post', { post })
});

// Route to handle form submission

app.post('/create', (req, res) => {
    const newPost = {
        id: uuidv4(),
        title: req.body.title,
        content: req.body.content,
    };
    blogPosts.push(newPost);
    res.redirect('/');
});

// Route to display the form for editing a specific post

app.get('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const postToEdit = blogPosts.find((post) => post.id === postId);
    res.render('edit', { post: postToEdit});
});


//Route to post
app.post('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const postEdit = blogPosts.find((post) => post.id === postId);
    postEdit.title = req.body.title;
    postEdit.content = req.body.content;
    res.redirect('/');
});

// Route to delete

app.delete('/post/:id', (req, res) => {
    const postId = req.params.id;
    const postToDelete = blogPosts.filter((post) => post.id !== postId);
    res.redirect('/');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});