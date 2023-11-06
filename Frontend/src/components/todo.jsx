import { useState } from "react"
import {  Col, Container, ListGroup, Row ,Card} from "react-bootstrap"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'
function Todo(){

    const [tasks, setTasks]=useState([])
    const [newTask,setNewTasks]=useState([])

    const addTask=async()=>{
      if(newTask.trim() !==''){
        setTasks([...tasks,{text:newTask}])
        const response=await axios.post('http://localhost:5000/todo', { Text: newTask });
        console.log(response.data, 'hiii');
        setNewTasks('')
      }
      
    }
    const updateTask = async (taskId,updatedData) => {
      try {
        const response = await axios.put(`http://localhost:5000/update/${taskId}`, { updatedData });
        console.log(response.data, 'Updated task');
        // Handle success or update local state accordingly
        setTasks(response)
      } catch (error) {
        console.error('Error updating task:', error);
        // Handle error
      }
    };
    
    

    return(
      <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>Todo App</h2>
          <Form>
            <Form.Group controlId="newTask">
              <Form.Control
                type="text"
                placeholder="Add a new task"
            
                value={newTask}
                name='Text'
                onChange={(e) => setNewTasks(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={addTask}>
              Add Task
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12}>
          <ListGroup>
            {tasks.map((task) => (
              <ListGroup.Item key={task.id}>
                <div className="d-flex justify-content-between">
                <Card>
                <Card.Body>{task.text}</Card.Body>
                </Card>
                  <div>
                    <Button
                      variant="info"
                      className="mr-2"
                      onClick={() => {
                        const { id, text } = task;
                        const updatedText = prompt('Update task:', text);
                        if (updatedText !== null) {
                          const updatedData = { text: updatedText };
                        updateTask(id, updatedData)}
                      }}
                    >
                      Update
                    </Button>
                    <Button variant="danger" >
                      Delete
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
    )
}
export default Todo