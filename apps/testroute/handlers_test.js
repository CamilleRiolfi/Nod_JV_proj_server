const hiddenValue = Math.floor(Math.random() * 20);

const HandlerTest = {
  test: (req, res) => {
    const { number } = req.params;
    res.send(`${justprix(number)}`);
  },
};
module.exports.HandlerTest = HandlerTest;

const justprix = (playerNumber) => {
  if (playerNumber != hiddenValue) {
    if (playerNumber > hiddenValue) {
      return ' cherche plus petit';
    }
    if (playerNumber < hiddenValue) {
      return ' cherche plus grand';
    }
  } else {
    return 'Bravo tu as trouvé le juste prix';
  }
};
