import express from 'express';

const app = express();

// config ejs
app.set('view engine', 'ejs');
app.set('views','views');

app.get('/',(req,res) => {
    res.render('index', {
        title: 'welcome',
        message: 'Hello from ejs',
        people: ['john','jane', 'jack']
    });
});

app.listen(8000,() => console.log('Server started'));
