var chai = require('chai');
const expect = chai.expect;

const page = require('../page/get_pagination.js');
const file = require('../data/beer.json');

chai.use(require('chai-json-schema'));

const testCase = {
 "positive" : {
    "getList" : "As a User, I want to be able to get beer list",
    "validateSchema" : "As a user, I want to validate json schema"
 },
}

describe(`Beer List`, () => {
 const halaman = 2
 const per_page = [20,5,1];

 it(`@get ${testCase.positive.getList}`, async() => {
    for(counter = 0; counter < per_page.length; counter++){
        const response = await page.getDataPerPage(halaman, per_page[counter]);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.lengthOf(per_page[counter]);
    }
 }),

 it(`@get ${testCase.positive.validateSchema}`, async() => {
  const data = 25
  const response = await page.getData();
//   console.log(response.body);
  expect(response.body).to.have.lengthOf(data);
  expect(response.status).to.equal(200);
  expect(response.body).to.be.jsonSchema(file);
    for(n = 0; n < data;n++){
        console.log(n, response.body[n].name);
    }
 })
})