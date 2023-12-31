
const welcomeMessage = (request, response) => {
    response.send('Welcome');
};

const welcomeMessageFunction = function(request, response) {
    response.send('Bienvenue from function');
};

const testEjsView = (req, res) => {
    res.send('welcome from test');
};

module.exports = {welcomeMessage, welcomeMessageFunction, testEjsView};
