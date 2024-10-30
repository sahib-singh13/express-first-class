const express= require('express');
const app=express();

const bodyParser=require('body-parser');

app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("server started at port no 3000")
});  

app.get('/',(request,response)=>{
    response.send("hello jee,kaise ho saare");
})  

app.post('/api/cars',(request,response)=>{
    const {name,brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("Cars Submitted Successfully");
})