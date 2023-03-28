const { Router } = require("express");
const express = require('express');
const { tesseract } = require("node-tesseract-ocr")
const axios = require('axios');

const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/', async (req, res) => {
    try {
        // Get the captcha image URL from the query parameters
        const { url } = req.body;
        const config = {
            lang: "eng",
            oem: 1,
            psm: 3,
        }

        tesseract.recognize(url, config)
            .then((text) => {
                res.send(`Captcha text: ${text}`);
            })
            .catch((error) => {
                console.log(error.message)
            })

    } catch (error) {
        console.error(error);
        res.status(500).send('Error solving captcha');
    }
});

module.exports = router;
