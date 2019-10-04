import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const { expect } = chai;

describe('-----------CRUD 테스팅-----------', () => {
  it('get test', () => request(Server)
      .get('/info')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body).to.be.an.an('array');
        expect(r.body[0]).to.be.an.an('object');
      }));

  it('post test', () => request(Server)
      .post('/info')
      .send({ input: 'true test' }) // input: 'testings'
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body).to.be.oneOf([true, false]);
      }));

  it('put test', () => request(Server)
      .put('/info')
      .send({ input: 'mochaTest', fix: 'putTest' }) // input: ', fix: '
      .expect('Content-Type', /json/)
      .then(r => {
        // console.log(r.body);
        expect(r.body).to.be.oneOf([true, false]);
      }));

  it('delete test', () => request(Server)
      .delete('/info')
      .send({ input: '' }) // input: ''
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body).to.be.oneOf([true, false]);
      }));
});
