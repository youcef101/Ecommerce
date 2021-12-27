import express from 'express'
import Order from '../models/Order.js'
import { verifyTokens } from '../utils/authTokens.js';
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from order route!!!')
})


//CREATE
router.post("/add", verifyTokens, async (req, res) => {
    let newOrder = req.body;
    try {
        const order = await Order.create(newOrder)
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:orderId", verifyTokens, async (req, res) => {
    try {
        if (req.user.isAdmin === true) {
            const updatedOrder = await Order.findByIdAndUpdate(
                req.params.orderId,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedOrder);
        } else {
            res.status(400).send('You Are Not Allowed !!!')
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokens, async (req, res) => {
    try {
        if (req.user.isAdmin === true) {
            await Order.findByIdAndDelete(req.params.id);
            res.status(200).json("Order has been deleted...");
        } else {
            res.status(400).send('You Are Not Allowed !!!')
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER ORDERS
router.get("/find/:userId", verifyTokens, async (req, res) => {
    try {
        if (req.user.id === req.params.userId || req.user.isAdmin === true) {
            const orders = await Order.find({ userId: req.params.userId });
            res.status(200).json(orders);
        } else {
            res.status(400).send('You Are Not Allowed !!!')
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL

router.get("/", verifyTokens, async (req, res) => {
    try {
        if (req.user.isAdmin === true) {
            const orders = await Order.find();
            res.status(200).json(orders);
        } else {
            res.status(400).send('You Are Not Allowed !!!')
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET MONTHLY INCOME

router.get("/income", verifyTokens, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        if (req.user.isAdmin === true) {
            const income = await Order.aggregate([
                { $match: { createdAt: { $gte: previousMonth } } },
                {
                    $project: {
                        month: { $month: "$createdAt" },
                        sales: "$amount",
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: "$sales" },
                    },
                },
            ]);
            res.status(200).json(income);
        } else {
            res.status(400).send('You Are Not Allowed !!!')
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

export default router