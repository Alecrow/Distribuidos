const express = require('express');
const axios= require('axios');
const responseTime = require('response-time');
const redis= require('redis');

const client = redis.createClient({
    host: "localhost",
    port:6379,

});

const app = express();

app.use(responseTime());


app.get('/pokemon', async (req,res) =>{


    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10277");
    client.set('pokemones', JSON.stringify(response.data), (err, reply) => {
        
        if (err) console.log(err);

        console.log(reply);

        res.json(response.data);

    });    
});

app.listen(3001);
console.log('server in port 3001');