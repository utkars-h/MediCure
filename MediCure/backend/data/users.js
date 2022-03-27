import brcypt from 'bcryptjs'

const users = [
    {
        name:"Utkarsh",
        email:"utkarsh@iiitg.ac.in",
        password:brcypt.hashSync('12345', 10),
        isAdmin:true
    },
    {
        name:"Sangaja",
        email:"sangaja@iiitg.ac.in",
        password:brcypt.hashSync('12345', 10)
    },
    {
        name:"Sanit",
        email:"sanit@iiitg.ac.in",
        password:brcypt.hashSync('12345', 10)
    },
    {
        name:"Sanjuli",
        email:"sanjuli@iiitg.ac.in",
        password:brcypt.hashSync('12345', 10)
    }
]

export default users