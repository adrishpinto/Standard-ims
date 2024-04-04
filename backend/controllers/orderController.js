import Orders from '../models/orderModel.js'

export const saveOrder = async (req,res) => {
    const order = new Orders(req.body)
    try {
        const savedOrder = await order.save();
        res.status(201).json(savedOrder)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
} 

export const getOrders = async (req,res) => {
    try {
        const orders = await Orders.find();
        res.json(orders)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const getOneOrder = async (req,res) => {
    try {
        const order = await Orders.find({order_id: req.params['id']});
        res.json(order)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const deleteOrder = async (req,res) =>{
    try {
        const deletedOrder = await Orders.deleteOne({_id:req.params.id})
        res.status(200).json(deletedOrder); 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}