import Categories from '../models/categoryModel.js'

export const saveCategories = async (req,res) => {
    const category = new Categories(req.body)
    try {
        const savedCategory = await category.save();
        res.status(201).json(savedCategory)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
} 

export const getCategories = async (req,res) => {
    try {
        const FoundCategories = await Categories.find();
        res.json(FoundCategories)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const getOneCategories = async (req,res) => {
    try {
        const Category = await Categories.find({category_name: req.params['id']});
        res.json(Category)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const deleteCategory = async (req,res) =>{
    try {
        const deletedCategory = await Categories.deleteOne({_id:req.params.id})
        res.status(200).json(deletedCategory); 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}