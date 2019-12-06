

var data=require('./src/data/data.json');

module.exports={
    devServer:{
        before(app){
            app.get('/getdata',(req,res)=>{
                res.send(data)
            })
            // app.get('/getdata').then(res=>{
            //     console.log(data)
            //     res.send(data)
            // })
        }
    }
}