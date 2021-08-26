  const hiddenNumber = 654;
 
  const justprix = (playerNumber) =>
  {
     if( playerNumber != hiddenNumber)
     {
        if(playerNumber > hiddenNumber)
        {
            console.log("le chiffre entré est supérieur au chiffre recherché");
        }
        else if (playerNumber < hiddenNumber)
        {
            console.log("le chiffre entré est inferieur au chiffre recherché");
        }
      }    
    else 
    {
        console.log("Bravo tu as trouvé le juste prix");
    }
  }
  justprix(process.argv[2]);

//   process.argv.forEach((val, index) => 
//   {
//     const tempValue = val;
//     justprix(tempValue);
//   })



 require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const http = require('http');
const cors = require('cors');
const {HandlerTest} = require('./apps/testroute/handlers_test');
console.log(HandlerTest);
const PORT = 8080;

const app = express();

const router = express.Router();

router.get('/testroute/test/:number', HandlerTest.test); 


app.use(cors());
app.use(bodyParser.json());
app.use(router);

const server = http.createServer(app); 

server.listen(PORT, () =>
{
  console.log(`api jeu on port ${PORT}!`);
});
