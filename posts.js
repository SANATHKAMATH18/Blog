const posts = [
    { id: 1, title: "Top Deals on ASUS Gaming Laptops & Accessories"
        , content: "1.ASUS ROG Zephyrus G14 No sooner had ASUS ROG Zephyrus G14 landed on the gaming scene than it rose to become one of the hot favorites among gamers, courtesy of its lightweight and robust configuration. The laptop, powered by an AMD Ryzen 9 processor, along with NVIDIA GeForce RTX 3060 graphics, offers fast-paced performance with stunning visual experience." },
    { id: 2, title: 'Ind vs Sl t20', content: 'India clinch a clinical series victory defating srilanka in all 4 t20 games.' },
    { id: 3, title: 'Novak djockovic creates history', content: 'Novak in olymics clinched gold medal by defeating his arch friend and rival a promising talent from spain carlos alcaraz to win his first olymic gold medal at 37 years of age completing tennis according to many.' }
];


function getPosts() {
    return posts;
}

function getPost(id) {
    return posts.find(post => post.id === id);
}

function addPost(title, content) {
    const id = `${Date.now()}`;
    posts.push({ id, title, content });
}

function updatePost(id, title, content) {
    const post = posts.find(post => post.id === id);
    if (post) {
        post.title = title;
        post.content = content;
    }
}

function deletePost(id) {
    posts = posts.filter(post => post.id !== id);
}

module.exports = { getPosts, getPost, addPost, updatePost, deletePost };
