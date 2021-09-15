var Userdb = require('../model/model')

//create and save new user

exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:'Do not Find'})
        return;
    }

    //create new user 
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in the database
    user.save(user).then(data=>{
        // res.send(data)
        res.redirect('/add-user')
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'Some Err occur'
        })
    })
}

//retrve and return all and single users 

exports.find=(req,res)=>{
    if(req.query.id){
        const id = req.query.id
        Userdb.findById(id).then(data=>{
            if(!data){
                res.status(404).send('Can not Find user')
            }
            res.send(data)
        }).catch(err=>{
            res.status(500).send({message:'do not find'})
        })
    }else{
        Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || 'Can not Find user'})
        })
    }
}



//update a new identify by user id

exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message:'Data to update shouldnt be empty'})
    }
    const id =req.params.id
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(data=>{
        if(!data){
            res.status(404).send({message:'can not update'})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({message:'falied'})
    })
}

//delete user with user id 

exports.delete=(req ,res)=>{
    const id = req.params.id
    Userdb.findByIdAndDelete(id).then(data=>{
        if(!data){
            res.status(404).send({message:'can not delete'})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({message:'falied'})
    })
}