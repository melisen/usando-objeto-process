const dotenv = require('dotenv')
const path = require('path')

const CUALENV = process.env.CUALENV || 'claves';

dotenv.config({path:
    CUALENV == 'claves' && path.resolve(__dirname, 'claves.env')
})


const HOST = process.env.HOST;
const DIRSTATIC = process.env.DIRSTATIC;
const DATABASEURL = process.env.DATABASEURL;

module.exports = {HOST, DIRSTATIC, DATABASEURL}


