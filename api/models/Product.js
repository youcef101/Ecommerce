import mongoose from 'mongoose'
const productSchema = mongoose.Schema({
    categoryId: { type: String, required: true },
    title: { type: String, unique: true, required: true },
    desc: { type: String, required: true },
    productImage: { type: String, required: true },
    size: { type: Array, required: true },
    color: { type: Array, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    status: { type: Boolean, default: true }
}, { timestamps: true })
export default mongoose.model('Product', productSchema)