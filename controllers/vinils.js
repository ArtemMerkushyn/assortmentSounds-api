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