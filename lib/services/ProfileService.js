import Profile from '../models/Profile.js';

export default class ProfileService {
  static async create({ email, accountId }) {
    const profile = await Profile.insert({ email, accountId });

    return profile;
  }
}
