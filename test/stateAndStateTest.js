
let mongoose = require("mongoose");

let Book1 = require('../server/model/stateAndCity');
let stateAndCitySchema = Book1.getstateAndCityModelSchema();

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
let server = require('../server');
let should = chai.should();
var expect  =chai.expect;

describe('stateAndCity', () => {
    // beforeEach((done) => { //Before each test we empty the database
    //     stateAndCitySchema.remove({}, (err) => { 
    //        done();           
    //     });        
    // });


    describe('ServerChecking', () => {
        it('Server Should Run fine', (done) => {
          chai.request(server)
              .get('/')
              .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body.message).to.equal('Server Working Fine');
                done();
              });
        });
    });

  describe('/GET getAllStates', () => {
      it('it should GET all the states', (done) => {
        chai.request(server)
            .get('/getAllStates')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.should.be.a('array');
              done();
            });
      });
  });

  describe('/POST addNewState ', () => {
    it('it should add a new state', (done) => {
        let stateobj =  {
            state: 'ZL',
            CountyList: [{
              CountyName: 'Cook',
              cityList: [
                {
                  CityName: 'Chicago',
                  Zipcode: [1234, 5678]
                }
              ]
            }
        
            ]
        
          };
      chai.request(server)
          .post('/addNewState')
          .send(stateobj)
          .end((err, res) => {
              //console.log(res.body);
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body.message).to.equal('State successfully added!');
             
            done();
          });
    });
});

describe('/GET  getSingleCity ', () => {
    it('it should return  a state', (done) => {
      
      chai.request(server)
          .get('/getSingleCity'+'?state=ZL')
          .end((err, res) => {
            console.log(res.body);
                res.should.have.status(200);
                res.body.data.should.be.a('object');
                 res.body.data.should.have.property('state');
                expect(res.body.message).to.equal('State successfully returned!');
             
            done();
          });
    });
});
describe('/GET  removeSpecificCity ', () => {
    it('it should add a new state', (done) => {
      
      chai.request(server)
          .get('/removeSpecificCity'+'?state=ZL')
          .end((err, res) => {
               console.log(res.body)
                res.should.have.status(200);
                res.body.data.should.be.a('object');
                expect(res.body.data.n).to.equal(1);
                expect(res.body.message).to.equal('State successfully removed!');
             
            done();
          });
    });
});

});