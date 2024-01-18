const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
          type:String,
          required:true
    },
    user:[{
        type:mongoose.Types.ObjectId,
        ref:"users",
      }]
}, { timestamps: true })

const taskModel = mongoose.model("tasks", taskSchema);

module.exports = taskModel;