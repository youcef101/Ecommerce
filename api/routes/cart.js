import express from 'express'
import Cart from '../models/Cart.js'
import { verifyTokens } from '../utils/authTokens.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from cart route!!!')
})

//add cart
router.post('/add', verifyTokens, async (req, res) => {
    const newCart = req.body;
    try {
        const cart = await Cart.create(newCart);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
})
//edit cart
router.put("/:cartId", verifyTokens, async (req, res) => {
    try {
        if (req.user.id === req.body.userId || req.user.isAdmin === true) {
            const updatedCart = await Cart.findByIdAndUpdate(
                req.params.cartId,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedCart);
        } else {
            res.status(400).send('You Are Not Allowed To Update This Cart !!!')
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
//delete cart
router.delete("/:cartId", async (req, res) => {
    try {
        if (req.user.id === req.body.userId || req.user.isAdmin === true) {
            await Cart.findByIdAndDelete(req.params.cartId);
            res.status(200).json("Cart has been deleted...");
        } else {
            res.status(400).send('You Are Not Allowed To Delete This Cart !!!')
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
//get user cart
router.get("/find/:userId", verifyTokens, async (req, res) => {
    try {
        if (req.user.id === req.params.userId || req.user.isAdmin === true) {
            const cart = await Cart.findOne({ userId: req.params.userId });
            res.status(200).json(cart);
        } else {
            res.status(400).send('You Are Not Allowed To Get User Cart !!!')
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
//get all cart
router.get("/", verifyTokens, async (req, res) => {
    try {
        if (req.user.isAdmin === true) {
            const carts = await Cart.find();
            res.status(200).json(carts);
        } else {
            res.status(400).send('You Are Not Allowed To Get All Cart !!!')
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router