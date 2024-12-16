import express from 'express';
import cors from 'cors';
const app=express();
const port=process.env.PORT || 3000;
app.use(cors());
// app.get("/",(req,res)=>{
//     // const response="Welcome MR Developer Duggal";
//     // res.send(response);
//     // console.log(response);
//     res.send("Welcome MR Developer Duggal");
// });

app.get("/api/jokes",(req,res)=>{
   const jokes= [
    {
        id:1,
        title:"A joke",
        content:"This is a joke"
    },  
    {
        id:2,
        title:"Another joke",
        content:"This is another joke"
    }
   ]
   res.send(jokes);
})

app.listen(port,()=>{
    console.log(`Serve at http://localhost: ${port}`);
})
