const axios = require('axios') 

exports.homeRoutes = (req,res)=>{
    //get request to /api/users
    axios.get('http://localhost:5000/api/users').then((response)=>{
        console.log(response.data);
        res.render('index',{users:response.data})
    }).catch(err=>{
        res.send(err)
    })
    
}

exports.addUserRoutes = (req,res)=>{
    res.render('add_user')
}


exports.updateUserRoutes = (req,res)=>{
    axios.get('http://localhost:5000/api/users',{params:{id:req.query.id}})
    .then((userdata)=>{
        res.render('update_user',{user:userdata.data})
    }).catch(err=>{
        res.send(err)
    })
    
}