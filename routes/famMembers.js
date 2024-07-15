const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./addFamMember');

router.get('/', (req, res, next) => {
    const members = adminData.members;
    res.render('main-page', {
        members: members, 
        pageTitle: 'Family members', 
        path: '/',
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;