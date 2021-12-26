import mongoose from 'mongoose'
const productSchema = mongoose.Schema({
    categoryId: { type: String, required: true },
    title: { type: String, unique: true, required: true },
    desc: { type: String, required: true },
    productImage: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number },
}, { timestamps: true })
export default mongoose.model('Product', productSchema)