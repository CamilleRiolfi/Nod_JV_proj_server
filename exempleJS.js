class Player 
{
    constructor(level)
    {
        this.vitality = level*2.5;
        this.strenght = level*2;
        this.intel = level*0.85;
        this.level = level;
    }
    LoadCarac() 
    {
       return this;
    }
    toJSON(){
        return {
            vitality: this.vitality,
            strenght: this.strenght,
            intel: this.intel,
            level: this.level,
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////

const HandlerTestPersonnage = {
    createCarac: (req, res) => {
      const { number } = req.params;
      res.send(caracPlayer(number));
    },
  };
  
  const caracPlayer = (playerNumber) =>
   {
        const character1 = new Player(playerNumber);
        return character1;     
  };

//////////////////////////////////////////////////////////////////////////////////////

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const http = require('http');
const cors = require('cors');

const PORT = 8080;

const app = express();

const router = express.Router();

router.get('/player/:number', HandlerTestPersonnage.createCarac);

app.use(cors());
app.use(bodyParser.json());
app.use(router);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`api jeu on port ${PORT}!`);
});


