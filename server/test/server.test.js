const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');
var {ToDo} = require('./../models/todo');

beforeEach((done) => {
  ToDo.remove({}).then(() => done());
});

describe('POST /todos', () =>{
  it('should not update invalid data to database', (done) =>{
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err){
          return done(err);
        }
        ToDo.find().then((todos) =>{
          expect(todos.length).toBe(0);
          done();
        }).catch((err) => done(err));
      });
  });
});
