import express from "express"
import cors from "cors"
import { Mongo } from "./database/mongo.js" 
import { config } from 'dotenv'
import authRouter from "./auth/auth.js"
import usersRouter from "./routes/usersRoutes.js"
import platesRouter from "./routes/platesRoutes.js"

config()

async function main() {
    const hostname = 'localhost'
    const port = 3000

    const app = express()

    const mongoConnection = await Mongo.connect({ mongoConnetionString: process.env.MONGO_CS, mongoDbName: process.env.MONGO_DB_NAME})
    console.log(mongoConnection)

    app.use(express.json())
    app.use(cors())

    app.get('/', (req, res) => {
        res.send({
            sucess: true,
            statusCode: 200,
            body: 'Welcome to My Gastronomy'
        })
    })

    app.use('/auth', authRouter)
    app.use('/users', usersRouter)
    app.use('/plates', platesRouter)
    
    app.listen(port, () => {
        console.log(`Server running on : http://${hostname}:${port}`)
    })
}

main()