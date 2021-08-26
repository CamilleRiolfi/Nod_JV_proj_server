const hiddenValue = Math.floor(Math.random()*100);

const HandlerTest = 
{
    test: (req, res) => 
    {
        const {number} = req.params;
      res.send('Exemple Test '+ number+" "+hiddenValue+"  "+justprix(number) );  
    },
};  
  module.exports.HandlerTest = HandlerTest;


  const justprix = (playerNumber) =>
  {
     if( playerNumber != hiddenValue)
     {
        if(playerNumber > hiddenValue)
        { 
            return "le chiffre entré est supérieur au chiffre recherché";
        }
        else if (playerNumber < hiddenValue)
        {
            return "le chiffre entré est inferieur au chiffre recherché";
        }
      }    
    else 
    {
        return "Bravo tu as trouvé le juste prix";
    }
  }

  