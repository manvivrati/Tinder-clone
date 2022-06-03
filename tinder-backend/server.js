import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js';
import Cors from 'cors';

// App Config
const app = express();                   // instance created 
const port = process.env.PORT || 8001    // default port
const connection_url = 'mongodb+srv://admin:Tinder12adm@cluster0.fxzy4.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middlewares
app.use(express.json());
app.use(Cors());

// DB congif
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO MANVI'));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards', async (req, res) => {
    try {                                    // Trying for getting the cards
        const allCards = await Cards.find(); // Getting the cards
        res.status(200).send(allCards);      // Sending the cards
    } catch (error) {                        // Catching the error
        res.status(500).send(error);         // Sending the error
    }
    // Cards.find((err, data) => {
    //     if (err) {
    //         res.status(500).send(err)
    //     } else {
    //         res.status(200).send(data)
    //     }
    // })
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
