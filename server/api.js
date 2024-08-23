import express from 'express';

export function serve(port) {
  const app = express();
  
  app.get('/', (req, res) => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
      </html>
    `;
    res.send(htmlContent);
  });
 
  app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
  });  
}

