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
        type: String
    },
    city: {
        type: String
    },
    adresse: {
        type: String
    },
    codePostal: {
        type: String
    },
    phone: {
        type: String
    },
    profileImage: {
        type: String
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