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


const getSuccess = (request, response) => {
	console.log(request.headers.accept);
	if( request.headers[1] = "xml" ){
		response.writeHead(200, {'Content-Type' : 'text/xml' });
		var xmlResponse = "<response><message>Great job, much success!</message></response>";
		response.write(xmlResponse);
	} else{ //defaults to JSON
		response.writeHead(200, {'Content-Type': 'application/json'});
		var jsonResponse = JSON.parse('{"message":"Great job, much success!"}');
		response.write(jsonResponse);
	}
	response.end();
};

module.exports.getIndex = getIndex;
module.exports.getStyle = getStyle;
module.exports.getSuccess = getSuccess;
//module.exports.getBadRequest = getBadRequest;
//module.exports.getUnauthorized = getUnauthorized;
//module.exports.getForbidden = getForbidden;
//module.exports.getInternal = getInternal;
//module.exports.getNotImplemented = getNotImplemented;