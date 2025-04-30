const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

app.post('/api/notion', async (req, res) => {
    try {
        const response = await axios.post(
            `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${NOTION_TOKEN}`,
                    'Notion-Version': '2022-06-28',
                    'Content-Type': 'application/json',
                },
            }
        );
        res.json(response.data.results);
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: 'Error al obtener datos de Notion' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
