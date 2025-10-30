const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // reference to User model
    required: true,
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  expired: { type: Boolean, default: false },
  streak: {
    type:Number,
    default:0
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
