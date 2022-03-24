import brcypt from 'bcryptjs'

const users = [
    {
        name:"Utkarsh",
        email:"utkarsh@gmail.com",
        password:brcypt.hashSync('12345', 10),
        isAdmin:true
    },
    {
        name:"Sangaja",
        email:"sangaja@gmail.com",
        password:brcypt.hashSync('12345', 10)
    },
    {
        name:"Sanit",
        email:"sanit@gmail.com",
        password:brcypt.hashSync('12345', 10)
    },
    {
        name:"Sanjuli",
        email:"sanjuli@gmail.com",
        password:brcypt.hashSync('12345', 10)
    }
]

export default users