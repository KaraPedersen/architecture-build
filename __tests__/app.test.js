import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Profile from '../lib/models/Profile.js'; 

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('creates a profile via POST', async() => {
    const res = await request(app)
      .post('/api/v1/profiles')
      .send({
        email: 'test@test.com',
        accountId: 'kara.testnet',
      });

    expect(res.body).toEqual({
      id: '1',
      email: 'test@test.com',
      accountId: 'kara.testnet',
    });
  });

  test('finds all profiles via GET', async() => {
    const aidan = await Profile.insert({
      email: 'aidan',
      accountId: 'aidan.testnet',
    });

    const azlynn = await Profile.insert({
      email: 'azlynn',
      accountId: 'azlynn.testnet',
    });

    const hanson = await Profile.insert({
      email: 'hanson',
      accountId: 'hanson.testnet',
    });

    const res = await request(app)
      .get('/api/v1/profiles');

    expect(res.body).toEqual([aidan, azlynn, hanson]);

  });  

  test('finds a profile via Get id', async() => {
    const profile = await Profile.insert({
      email: 'pamela',
      accountId: 'pamela.testnet',
    });

    const res = await request(app)
      .get(`/api/v1/profiles/${profile.id}`);

    expect(res.body).toEqual(profile);
  });

  test('updates a profile via PUT', async () => {
    const profile = await Profile.insert({
      email: 'louie',
      accountId: 'louie.testnet',
    });
    const res = await request(app)
      .put(`/api/v1/profiles/${profile.od}`)
      .send({ profile });

    expect(res.body);
  });

  test('deletes a profile via DELETE', async () => {
    const profile = await Profile.insert({
      email: 'shane',
      accountId: 'shane.testnet',
    });
    return request(app)
      .delete(`/api/v1/profiles/${profile.id}`)
      .send({ profile })
      .then(res => expect(res.body).toEqual(profile));
  });

});
