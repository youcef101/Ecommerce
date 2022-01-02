import mongoose from 'mongoose'
const categorySchema = mongoose.Schema({
    title: { type: String, required: true },
    categoryImage: { type: String, required: true }

}, { timestamps: true })
export default mongoose.model('Category', categorySchema)