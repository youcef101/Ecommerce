import mongoose from 'mongoose'
const categorySchema = mongoose.Schema({
    title: { type: String },
    categoryImage: { type: String }

}, { timestamps: true })
export default mongoose.model('Category', categorySchema)