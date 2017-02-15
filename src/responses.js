//No commenting requirements!  Woohoo!

const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const style = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getStyle = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(style);
  response.end();
};

/// Returns a generic "success" response for both JSON and XML
const getSuccess = (request, response) => {
  let message = 'Oops, something went wrong.';
  if (request.headers.accept === 'text/xml') {
    response.writeHead(200, { 'Content-Type': 'text/xml' });
    message = '<response><message>Great job, much success!</message></response>';
  } else { // defaults to JSON
    response.writeHead(200, { 'Content-Type': 'application/json' });
    message = '{"message":"Great job, much success!"';
  }
  response.write(message);
  response.end();
};

// Returns a generic "bad request" response for both JSON and XML
const getBadRequest = (request, response, params) => {
  if (params === 'valid=true') {
    getSuccess(request, response);
    return;
  }

  let message = 'Oops, something went wrong.';
  if (request.headers.accept === 'text/xml') {
    response.writeHead(400, { 'Content-Type': 'text/xml' });
    message = '<response><message>Missing valid query parameter set to true.</message><id>badRequest</id></response>';
  } else { // defaults to JSON
    response.writeHead(400, { 'Content-Type': 'application/json' });
    message = '{"message":"Missing valid query parameter set to true.", "id":"badRequest"}';
  }
  response.write(message);
  response.end();
};
const getUnauthorized = (request, response, params) => {
  if (params === 'loggedIn=yes') {
    getSuccess(request, response);
    return;
  }

  let message = 'Oops, something went wrong.';
  if (request.headers.accept === 'text/xml') {
    response.writeHead(401, { 'Content-Type': 'text/xml' });
    message = '<response><message>Missing loggedIn query parameter set to yes.</message><id>unauthorized</id></response>';
  } else { // defaults to JSON
    response.writeHead(401, { 'Content-Type': 'application/json' });
    message = '{"message":"Missing loggedIn query parameter set to yes.", "id":"unauthorized"}';
  }
  response.write(message);
  response.end();
};
const getForbidden = (request, response) => {
  let message = 'Oops, something went wrong.';
  if (request.headers.accept === 'text/xml') {
    response.writeHead(403, { 'Content-Type': 'text/xml' });
    message = '<response><message>You do not have access to this content.</message><id>forbidden</id></response>';
  } else { // defaults to JSON
    response.writeHead(403, { 'Content-Type': 'application/json' });
    message = '{"message":"You do not have access to this content.", "id":"forbidden"}';
  }
  response.write(message);
  response.end();
};
const getInternal = (request, response) => {
  let message = 'Oops, something went wrong.';
  if (request.headers.accept === 'text/xml') {
    response.writeHead(500, { 'Content-Type': 'text/xml' });
    message = '<response><message>Internal Server Error.</message><id>internalError</id></response>';
  } else { // defaults to JSON
    response.writeHead(500, { 'Content-Type': 'application/json' });
    message = '{"message":"Internal Server Error.", "id":"internalError"}';
  }
  response.write(message);
  response.end();
};
const getNotImplemented = (request, response) => {
  let message = 'Oops, something went wrong.';
  if (request.headers.accept === 'text/xml') {
    response.writeHead(501, { 'Content-Type': 'text/xml' });
    message = "<response><message>A get request hasn't been implemented for this page.</message><id>notImplemented</id></response>";
  } else { // defaults to JSON
    response.writeHead(501, { 'Content-Type': 'application/json' });
    message = '{"message":"A get request hasn\'t been implemented for this page.", "id":"notImplemented"}';
  }
  response.write(message);
  response.end();
};

const getNotFound = (request, response) => {
  let message = 'Oops, something went wrong.';
  if (request.headers.accept === 'text/xml') {
    response.writeHead(404, { 'Content-Type': 'text/xml' });
    message = '<response><message>The page you are looking for was not found.</message><id>notFound</id></response>';
  } else { // defaults to JSON
    response.writeHead(404, { 'Content-Type': 'application/json' });
    message = '{"message":"The page you are looking for was not found..", "id":"notFound"}';
  }
  response.write(message);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getStyle = getStyle;
module.exports.getSuccess = getSuccess;
module.exports.getBadRequest = getBadRequest;
module.exports.getUnauthorized = getUnauthorized;
module.exports.getForbidden = getForbidden;
module.exports.getInternal = getInternal;
module.exports.getNotImplemented = getNotImplemented;
module.exports.getNotFound = getNotFound;
