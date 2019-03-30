import express from 'express'
import User from '../models/user'

const router = express.Router()

router.post('/register', (req, res)=>{
    //res.send('REGISTER')
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })

    user.save((err, user)=>{
        if(err){
            res.send(err)
        }else{
            res.send(user)
        }
    })
})

router.post('/login', (req, res)=>{
    //res.send('LOGIN')
    User.findOne({email: req.body.email}, (err, user)=>{
        if(err){
            res.send(err)
        }else{
            if(!user){
                res.status(400).send('User not found')
            }else{
                if(user.password !== req.body.password){
                    res.status(400).send('Invalid password')
                }else{
                    res.status(200).send(user)
                }
            }
        }
    })
})

router.get('/event', (req, res)=>{
    res.send('EVENT')
})

router.get('/event/special', (req, res)=>{
    res.send('SPECIAL')
})

module.exports = router
