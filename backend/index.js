const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Conexión a Notion
const notion = new Client({ auth: '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' });
const databaseId = '207fb2891ea28069b161e16c9f340e8e';

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                and: [
                    {
                        property: 'Email',
                        rich_text: {
                            equals: email
                        }
                    },
                    {
                        property: 'Contraseña',
                        rich_text: {
                            equals: password
                        }
                    }
                ]
            }
        });

        if (response.results.length > 0) {
            const cliente = response.results[0];
            const nombre = cliente.properties.Nombre.title[0].text.content;
            const iframe = cliente.properties.IframeMetricool.url;
            res.json({ success: true, nombre, iframe });
        } else {
            res.json({ success: false, message: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
});

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
