import express from 'express'
import User from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config/database'

const router = express.Router()

function verifyToken(req, res, next) {
    // return req.headers.authorization;
    // return res.status(401).send(req.headers.authorization)
    if(!req.headers.authorization){
        return res.status(401).send('Unothorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    // return res.status(401).send(token)
    if( token === 'null' ){
        return res.status(401).send('Unothorized request')
    }
    let payload = jwt.verify(token, config.secret)
    if(!payload){
        return res.status(401).send('Unothorized request')
    }
    req.userID = payload.subject
    next()
    
}

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
            let payload = {subject: user._id}
            let token = jwt.sign(payload, config.secret)
            res.send({token})
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
                    let payload = {subject: user._id}
                    let token = jwt.sign(payload, config.secret)
                    res.send({token})
                }
            }
        }
    })
})

router.get('/event', (req, res)=>{
    let event = [
        {
            title: "Event title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            banner: "assets/images/event.jpg"
        },
        {
            title: "Event title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            banner: "assets/images/event.jpg"
        },
        {
            title: "Event title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            banner: "assets/images/event.jpg"
        },
        {
            title: "Event title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            banner: "assets/images/event.jpg"
        }
        
    ]
    res.send(event)
})

router.get('/event/special', verifyToken, (req, res)=>{
    let specialEvent = [
        {
            title: "Event title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            banner: "assets/images/Event_Management.jpg"
        },
        {
            title: "Event title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            banner: "assets/images/Event_Management.jpg"
        },
        {
            title: "Event title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            banner: "assets/images/Event_Management.jpg"
        }
        
    ]
    res.send(specialEvent)
})

module.exports = router
