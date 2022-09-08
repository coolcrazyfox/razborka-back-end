const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const deviceRouter = require('./routes/device.routes')

const  {Client} = require('pg')
const client =  new Client(
    {
        user:'postgres',
        password:'man21061985xxx',
        host:'localhost',
        port:5432,
        database:'first'

    }
)
//connect to the  database
connect();
async function connect(){
    try{
        await client.connect()
        console.log(`Connected`)
    }catch (e) {
        console.error(`connection failed ${e}`)
    }

}


const PORT = process.env.PORT || 8080

const app = express()


app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With');
    next();
});
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use('/api', userRouter)
// app.use('/api', postRouter)
// app.use('/api', deviceRouter)

//respond with "my text" when a GET request is  made to the homepage

app.get('/device', async (req, res)=>{
    try{
        const results =await client.query('select * from device')
        res.json(results.rows)

    }catch (e) {
        console.log('There was an error')
        res.send('There was an error')

    }
    res.json([])

    // res.send('my text + NODEJS!!')
})




app.use(express.static('static'))// for static any files

// app.get('/',(req, res)=>{
//     res.send('my text + NODEJS!!')
// })

// or

// app.get('/', (req, res)=>{
//     console.log(req.query) //http:/localhost:8080/?test=123&query=myText&third=text

//     res.status(200).json('server working')
// })

//post

// app.post('/', (req, res)=>{
//     console.log(req.body) // in postman create http:/localhost:8080
//
//     res.status(200).json('server working')
// })
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
