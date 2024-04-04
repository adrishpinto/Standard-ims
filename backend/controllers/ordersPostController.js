import OrdersPost from '../models/orderPostModel.js'

export const saveOrderPost = async (req,res) => {
    const orderPost = new OrdersPost(req.body)
    try {
        const savedOrderPost = await orderPost.save();
        res.status(201).json(savedOrderPost)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
} 

export const getOrdersPost = async (req,res) => {
    try {
        const ordersPost = await OrdersPost.find();
        res.json(ordersPost)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const getOneOrderPost = async (req,res) => {
    try {
        const orderPost = await OrdersPost.find({order_id: req.params['id']});
        res.json(orderPost)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const deleteOrderPost = async (req,res) =>{
    try {
        const deletedOrderPost = await OrdersPost.deleteOne({_id:req.params.id})
        res.status(200).json(deletedOrderPost); 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}