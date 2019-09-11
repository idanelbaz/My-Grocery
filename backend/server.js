const express = require('express')
const app = express()

const port = process.env.PORT || 3000;
const http = require('http').createServer(app);

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')



app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cookieParser());

app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));

app.use(session({
    secret: 'puki muki',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    },
}))


const shopItemRoute = require('./api/shopItem.route');
app.use('/api/shopItem', shopItemRoute)
const userRoute = require('./api/user.route');
app.use('/api/user', userRoute)

app.get('/', (req, res) => res.send('Hello Shop!'))

http.listen(port, () => console.log(`Example app listening on port ${port}!`))