const customLogger = (req, res, next) => {
    console.log('\x1b[32m')
    console.log(new Date())
    console.log(req.method + " " + req.originalUrl);
    console.log('Request parameter data :');
    console.log(req.params);
    console.log('Reqest body data :');
    console.log(req.body);
    console.log('Request file data :');
    console.log(req.file);
    console.log('END');
    console.log('\x1b[0m');
    next();
}
module.exports = customLogger;