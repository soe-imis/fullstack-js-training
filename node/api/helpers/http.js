exports.enableCORS = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Max-Age', '1000');
    res.header('Access-Control-Allow-Headers', 'Cache-Control, Content-Type, Authorization, Content-Length, X-Requested-With');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    if ('OPTIONS' == req.method) {
        res.sendStatus(200);	
    } else {
        next();
    }
};

exports.resResult = (res, result) => {
    res.status(200).json({
        status: "SUCCESS",
        data: result
    });
}

exports.resError = (res, message) => {
    res.status(500).json({
        status: "ERROR",
        error: message
    });
}