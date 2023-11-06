const usemodel=require('../models/usemodel')
const todomodel=require('../models/todomodel')

const usersignup = async (req, res) => {
    try {
      let { name, email, phone, password } = req.body;
      const user = await usemodel.findOne({ name });
        console.log(user,'rrrrr')
      if (user) {
        res.json({ success: false, message: 'Username already exists' });
      } else {
        const newuser = new usemodel({ name, email, phone, password });
        await newuser.save();
        res.json({ success: true, message: 'Signup successful' });
      }
    } catch (error) {
      console.error('Error occurred', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
  
  const userLogin=async(req,res)=>{
    try{
        let{email,password}=req.body
        console.log(req.body)

        const user=await usemodel.findOne({email:email})
        console.log(user,'uuu')
        if(user){
            res.json({success: true, message: 'Login successful' })
        }
        else{
            res.json({success: false, message: 'Invalid credentials'})
        }

    }catch(error){
        console.log(error)
    }
  }
  const addTodo = async (req, res) => {
    try {
        const { Text } = req.body;

        if (!Text) {
            return res.status(400).json({ error: 'Text is required' });
        }

        const todo = new todomodel({ Text });
        console.log(todo,'toooodo')
        await todo.save();

        res.json({ success: 'success' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { updatedData } = req.body;

    // Assuming todomodel is a Mongoose model
    const updatedTask = await todomodel.findByIdAndUpdate(id, { $set: updatedData }, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


  module.exports = { usersignup,userLogin,addTodo,updateTask };
  
  
  
