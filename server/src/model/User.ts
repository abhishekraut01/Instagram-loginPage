import mongoose from 'mongoose';
// User Schema
const UserSchema = new mongoose.Schema({
    loginInput: { 
      type: String, 
      required: true, 
    },
    password: { 
      type: String, 
      required: true 
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    }
  });
  
  export const User = mongoose.model('User', UserSchema);