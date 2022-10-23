const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.base_url);

const getDataPerPage = (page, per_page) => api.get('')
 .query({page : page, per_page : per_page})

const getData = () => api.get('')
module.exports = {
   getDataPerPage,
   getData,
}