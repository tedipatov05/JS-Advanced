function requestValidator(obj) {

   
        let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

        let uriPattern = /^[\w.]+$/g;
        let supportedversions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        let invalidCaracters = ['<', '>', "\\", "&", `'`, `"`];

        if (!validMethods.includes(obj.method)) {
            throw new Error('Invalid request header: Invalid Method');

        }
        if (!obj.hasOwnProperty("uri")) {
            throw new Error("Invalid request header: Invalid URI");
        }
        if (obj.uri !== "*" && !obj.uri.match(uriPattern)) {
            throw new Error("Invalid request header: Invalid URI");

        }
        if (!supportedversions.includes(obj.version)) {
            throw new Error("Invalid request header: Invalid Version");

        }
        if (!obj.hasOwnProperty("message")) {
            throw new Error("Invalid request header: Invalid Message");
        }
        for (let ch of obj.message) {
            if (invalidCaracters.includes(ch)) {
                throw new Error("Invalid request header: Invalid Message");
            }
        }

        return obj;

    

}

requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}
);