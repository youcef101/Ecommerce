import mongoose from 'mongoose'
const productSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    productImage: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
}, { timestamps: true })
export default mongoose.model('Product', productSchema)