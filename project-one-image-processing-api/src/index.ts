import express from "express"

const imageResizerApp: express.Express = express()
const port: number = 3000

imageResizerApp.get('/', (req, res)=>{
    res.send("Hello World")
})

imageResizerApp.listen(port, ()=>{
    console.log(`Image resizer app is up and running, listening on port ${port}`)
})