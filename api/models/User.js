import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fullName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    adresse: {
        type: String,
        default: ''
    },
    codePostal: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    profileImage: {
        type: String,
        default: ''
    },
    location: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })
export default mongoose.model('User', userSchema)