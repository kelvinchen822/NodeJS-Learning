const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/blog_associate_demo")

//POST schema: title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
})

const Post = mongoose.model("Post", postSchema)

//USER schema: email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})
//create the model
const User = mongoose.model("User", userSchema)



//Create a new user
const newUser = new User({
    email: "charlie@brown.edu",
    name: "Charlie Brown"
})
newUser.save((err, user)=>{
    if(err){
        console.log(err)
    } else{
        console.log(user)
    }
}) 

//Creat a new post 
const newPost = new Post({
    title: 'reflections on apples',
    content: "delicious autumn apples"
})

newPost.save((err, post)=>{
    if (err){
        console.log(err)
    } else {
        console.log(post)
    }
}) 
