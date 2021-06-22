import pool from '../utils/pool.js';

export default class Profile {
  id;
  email;
  accountId;

  constructor(row) {
    this.id = row.id;
    this.email = row.email;
    this.accountId = row.account_id;
  }

  
}
