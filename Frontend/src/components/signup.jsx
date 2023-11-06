import { Button, Form } from "react-bootstrap"
// import { usersignup } from "../service/userapi"
import React ,{ useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Signup(){
    const navigate=useNavigate()
    const [signupData,setSignup]=useState({
        name:'',
        email:'',
        phone:'',
        password:""
    })

    const handlesignup=async()=>{
        try{
            const response=await axios.post('http://localhost:5000/signup',signupData)
            console.log(response.data,'hiii')
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }
    
    return(
        <>
        <div className="container bg-success">
            <Form action="post"> 
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="name" value={signupData.name} name="name" placeholder="enter your name" onChange={(e)=>setSignup({...signupData,name:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email" value={signupData.email} name="email" placeholder="enter your email" onChange={(e)=>setSignup({...signupData,email:e.target.value})} />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>phone</Form.Label>
                    <Form.Control
                    type="phone" value={signupData.phone} name="phone" placeholder="enter your phone" onChange={(e)=>setSignup({...signupData,phone:e.target.value})} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                    type="password" value={signupData.password} name="password" placeholder="enter your password"onChange={(e)=>setSignup({...signupData,password:e.target.value})} />
                </Form.Group>
                <Button className="mt-3" variant="primary" onClick={handlesignup}>Register</Button>
            </Form>
        </div>
        </>
    )
}


export default Signup