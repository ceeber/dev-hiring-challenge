const request = require('supertest');
const conn = require('../src/controller/repositoryController');
const app = require('../src/app.js');

describe('Language research', () => {
  

  it('Test aplication', async () => {

    const res = await request(app).get('/search/1');       
   
     expect(res.statusCode).toBe(200);
  });


  it('Git Request', async () => {

    request(app)
	    .get("/all")
		  .set("Accept", "application/json")
		  .expect("Content-Type", /json/)
		  .expect(200);

  });

	 
 });




