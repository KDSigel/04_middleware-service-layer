const pool = require('../utils/pool');

module.exports = class Feeling {
  id;
  anger;
  confusion;
  
  constructor(row) {
    this.id = row.id;
    this.anger = row.anger;
    this.confusion = row.confusion;
  }

  static async insert(anger, confusion) {
    const { rows } = await pool.query(
      `INSERT INTO feelings (anger, confusion) VALUES ($1, $2) RETURNING *`,
      [anger, confusion]
    );
    return new Feeling(rows[0]);
  }

};
