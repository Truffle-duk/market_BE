const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');

module.exports = function () {
    const app = express();

    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use(methodOverride());

    app.use(cors());

    app.get('/', (req, res) => {
        console.log("루트 페이지로 접속하셨습니다.");
        res.send('Hi mini-market');
    });

    require('../src/marketRoute')(app);

    return app;
};