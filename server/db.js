const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, 'gia_data.db'));

function initializeDatabase() {
  const initScript = `
    CREATE TABLE IF NOT EXISTS beneficiaries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      aadhaar_status TEXT NOT NULL,
      amount_allocated INTEGER,
      state TEXT
    );

    CREATE TABLE IF NOT EXISTS ngos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      active_projects INTEGER
    );
  `;
  db.exec(initScript);

  // Seed Data if empty
  const countBeneficiaries = db.prepare("SELECT count(*) as count FROM beneficiaries").get();
  if (countBeneficiaries.count === 0) {
    const insertBeneficiary = db.prepare(`INSERT INTO beneficiaries (name, aadhaar_status, amount_allocated, state) VALUES (?, ?, ?, ?)`);
    insertBeneficiary.run("Amit Kumar", "Verified", 5000, "Uttar Pradesh");
    insertBeneficiary.run("Sunita Devi", "Verified", 5000, "Bihar");
    insertBeneficiary.run("Rahul Sharma", "Pending", 0, "Madhya Pradesh");

    const insertNGO = db.prepare(`INSERT INTO ngos (name, active_projects) VALUES (?, ?)`);
    insertNGO.run("Rural Upliftment Society", 12);
    insertNGO.run("Vidya Foundation", 8);
    insertNGO.run("Jan Kalyan Samiti", 5);
  }
}

initializeDatabase();

module.exports = db;
