const express = require('express'); // Express is a framework that is used to build web applications. Basically it used to create server and handle routes and middleware.
const app = express(); // The app is the instance of the express application used to define routes and middleware.
const path = require('path');
const indexFile = path.join(__dirname, 'index.html');
const updateFile = path.join(__dirname, 'updateUser.html');

// Middleware to parse the form data
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.send('Welcome to the server');
});

console.log(__dirname);
console.log(indexFile);

let users = [];

app.get('/form', (req, res)=>{
    res.sendFile(indexFile);
});

app.get('/update-form', (req, res)=>{
    res.sendFile(updateFile);
});

app.post('/submit', (req, res)=>{
    console.log(req.body);
    const {roll} = req.body;
    const isPresent = users.find((i)=> i.roll == roll);
    if(isPresent){
        res.send('User already exists');
        return;
    }
    users.push(req.body);
    res.send('Form submitted successfully');
});

app.get('/users', (req, res)=>{
    res.json(users);
});

app.delete('/users/:name', (req, res)=>{
    console.log("req.params:", req.params);
    const { name } = req.params;
    console.log("name:", name);
    users = users.filter((i)=> i.name !== name);
    res.send(`${name} deleted successfully`);
});

app.post('/users/updateData', (req,res) => {
    const {name, age, roll} = req.body;

    const user = users.find((i) => i.roll == roll);
    if(!user){
        res.send('User not found');
        return;
    }
    user.name = name;
    user.age = age;
    res.send(`${name} updated successfully`);
});

app.get('/users/findUser', (req,res)=>{
    const {roll} = req.query;
    const user = users.find((i) => i.roll == roll);
    if(!user){
        res.send('User not found');
        return;
    }
    res.json(user);
});

app.listen(3002, ()=>{
    console.log('Server started on port 3002');
});