import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

describe('Express Custom Server', () => {
  it('should return 200', async () => {
    const res = await chai.request(app).get('/api');
    expect(res).to.have.status(200);
  });
});
