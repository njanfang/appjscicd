const express = require('express');
const app = express();
const port = 1000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    background-color: purple;
                    font-style: italic;
                    font-family: 'Arial', sans-serif;
                    color: white;
                    text-align: center;
                    padding: 50px;
                }
            </style>
            <title>Welcome to eFUN ACADEMY Youtube channel ,Please share & subscribe , Thank you </title>
        </head>
        <body>
            <h1>Welcome to eFUN ACADEMY  Youtube channel ,Please share & subscribe , Thank you very much for  subscribers , keep loving , thankyou <3 </h1>
            <p>Don't forget to subscribe & share with friends</p>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
