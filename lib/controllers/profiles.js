import { Router } from 'express';
import Profile from '../models/Profile.js';
import ProfileService from '../services/ProfileService.js';

export default Router() 
  .post('/', async (req, res, next) => {
    try {
      const profile = await ProfileService.create(req.body);
      res.send(profile);

    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const profiles = await Profile.findByAll();
      res.send(profiles);

    } catch (err) {
      next(err);
    }
  });


