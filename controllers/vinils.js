import Vinil from "../models/Vinil.js";

// create vinil
export const createVinil = async (req, res) => {
    try {
        const newVinil = new Vinil({
            ...req.body,
        });

        await newVinil.save();
        res.json(newVinil);
    } catch (error) {
        res.json({ message: `Щось пішло не так. ${error}` });
    }
}

//get all vinils
export const getAllVinils = async (req, res) => {
    try {
        const vinils = await Vinil.find().sort('-createdAt');
        if(!vinils) {
            return res.json({ message: 'Вінілових платівок немає' });
        }
        res.json(vinils);
    } catch (error) {
        res.json({ message: `Щось пішло не так. ${error}` });
    }
}