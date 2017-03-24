/* eslint-env mocha */
/* eslint no-unused-expressions: 0 */

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import fetchMock from 'fetch-mock';
import express from 'express';
import router from '../router';

chai.use(chaiHttp);

describe('Express Custom Server', () => {
  let server;

  beforeEach(() => {
    server = express();
    server.use(router);

    fetchMock.restore();
  });

  it('/news should return json array', (done) => {
    fetchMock.mock('*', { items: ['item 1', 'item 2'] });

    chai.request(server)
        .get('/news')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal(['item 1', 'item 2']);
          done();
        });
  });
});
