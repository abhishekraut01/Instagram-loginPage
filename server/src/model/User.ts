import mongoose from 'mongoose';
// User Schema
const UserSchema = new mongoose.Schema({
    username: { 
      type: String, 
      required: true, 
      unique: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    phoneNumber: { 
      type: String, 
      unique: true 
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