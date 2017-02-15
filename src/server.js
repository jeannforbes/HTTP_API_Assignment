const http = require('http');
const responseHandler = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  let url = request.url;
  let params = '';

  if (request.url.includes('?')) {
    url = request.url.split('?')[0];
    params = request.url.split('?')[1];
  }

  switch (url) {
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
      responseHandler.getBadRequest(request, response, params);
      break;
    case '/unauthorized':
      responseHandler.getUnauthorized(request, response, params);
      break;
    case '/forbidden':
      responseHandler.getForbidden(request, response);
      break;
    case '/internal':
      responseHandler.getInternal(request, response);
      break;
    case '/notImplemented':
      responseHandler.getNotImplemented(request, response);
      break;
    default:
      responseHandler.getNotFound(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
