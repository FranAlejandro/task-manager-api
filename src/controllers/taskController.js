const db = require  ('../config/db');

const getTasks = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM tasks');
            [ rows, fields ]
            res.json(rows);
 }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener tareas' });
    }
};

module.exports = {
    getTasks,
};