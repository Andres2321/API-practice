import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

const users = [
{
    firstName: 'John',
    lastName: 'Doe',
    age: 25
},
{
    firstName: 'Dan',
    lastName: 'Joe',
    age: 28
}]

router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body

    const userId = uuid()

    // Will add the id property to the already existing users object
    const userWithId = { ...user, id: userId}
    users.push(user)
    res.send(`User with the name : ${user.firstName} Added to the database`)
})

export default router