const http = require('http');
const app = require('./app');

// Basic Structure for port accessing
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server has been started on port number : " + port)
})

/***
 *  References:
 *  
 *  [1]	M. Follow, “How to Structure my Application in Express.js ?,” GeeksforGeeks, 04-Dec-2021. [Online]. 
 *      Available: https://www.geeksforgeeks.org/how-to-structure-my-application-in-express-js/. [Accessed: 05-Jul-2023].
 * 
 */