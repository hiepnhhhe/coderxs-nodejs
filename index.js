require('dotenv').config()

const express = require('express')

/**
 * Middleware
 */
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const authMiddleware = require('./middlewares/auth.middleware')
const sessionMiddleware = require('./middlewares/session.middleware')

/**
 * ODM
 */
const dbURL = require('./properties').MONGO_URL
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true
})

/** 
 * Routes
 */
const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')
const prodRoute = require('./routes/prod.route')
const cartRoute = require('./routes/cart.route')
const apiProductRoute = require('./api/routes/prod.route')

const port = 3000

const app = express()
app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(sessionMiddleware)

app.get('/', (req, res) =>
    res.render('index', {
        name: 'Hie'
    })
)

app.use('/users', authMiddleware.requireAuth, userRoute)
app.use('/auth', authRoute)
app.use('/products', prodRoute)
app.use('/cart', cartRoute)
app.use('/api/products', apiProductRoute)

app.listen(port, () =>
    console.log(`Example app  listening at http://localhost:${port}`)
)
