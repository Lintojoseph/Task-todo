import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Login(){
    const navigate=useNavigate()
    const [loginData,setlogindata]=useState({
        email:'',
        password:''
    })

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:5000/', loginData);
          console.log(response.data);
          navigate('/todo')
        } catch (error) {
          console.error(error);
        }
      };
    return(
        <>
        <div className="container bg-info">
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email" name="email" value={loginData.email} placeholder="enter your email" onChange={(e)=>setlogindata({...loginData,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                    type="password" name="password" value={loginData.password} placeholder="enter your password" onChange={(e)=>setlogindata({...loginData,[e.target.name]:e.target.value})} />
                </Form.Group>
                <Button className="mt-3" variant="primary" onClick={handleLogin}>Login</Button>
            </Form>
            <p className="mt-3">
                Not a member?<Link to='/signup'>Login here</Link>
            </p>

        </div>
        </>
    )
}

export default Login