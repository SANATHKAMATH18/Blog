const express = require('express');
const path = require('path');
const app = express();
const posts = require('./posts');


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { posts: posts.getPosts() });
});

app.get('/new', (req, res) => {
    res.render('new-post');
});

app.post('/new', (req, res) => {
    posts.addPost(req.body.title, req.body.content);
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    const post = posts.getPost(req.params.id);
    res.render('edit-post', { post });
});

app.post('/edit/:id', (req, res) => {
    posts.updatePost(req.params.id, req.body.title, req.body.content);
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    posts.deletePost(req.params.id);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
