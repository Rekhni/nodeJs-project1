const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const members = [];

router.get('/add-member', (req, res, next) => {
    res.render('add-member', {
        pageTitle: "Add member", 
        path: "/admin/add-member",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
});

router.post('/add-member', (req, res, next) => {
    members.push({name: req.body.name});
    res.redirect('/');
})

exports.routes = router;
exports.members = members;