const http = require('http');
const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {

    // HOME ROUTE
    if (req.method === 'GET' && req.url === '/home') {
        fs.readFile(indexFile, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }

    // FORM SUBMISSION
    else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            console.log(body); // raw form data

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Form submitted successfully');
        });
    }

    // DEFAULT ROUTE
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route Not Found');
    }
});

server.listen(3001, () => {
    console.log('Server started on port 3001');
});
