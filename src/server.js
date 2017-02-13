const http = require('http');
const responseHandler = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      responseHandler.getIndex(request, response);
      break;
    case '/style.css':
      responseHandler.getStyle(request, response);
      break;
    case '/success':
      responseHandler.getSuccess(request, response);
      break;
    case '/badRequest':
      break;
    case '/unauthorized':
      break;
    case '/forbidden':
      break;
    case '/internal':
      break;
    case '/notImplemented':
      break;
    default:
      responseHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);