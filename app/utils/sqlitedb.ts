import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('budget.db');

export const createtableincome = async () => {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS income (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      incometype TEXT, 
      category TEXT,
      amount INTEGER,
      date TEXT,
      description TEXT,
      expencemethod TEXT
    );
        `);
};

export const createtableexpence = async () => {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS expence (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      expencetype TEXT, 
      category TEXT,
      amount INTEGER,
      date TEXT,
      description TEXT,
      expencemethod TEXT
    );
        `);
};

export const addDatatoIncomeTbl = async (expencetype: string, category: string, amount: number, date: string, description: string, expencemethod: string) => {
    await db.runAsync('INSERT INTO income (expencetype,amount,date,description,expencemethod) VALUES (?, ?, ?, ?, ?)', expencetype, amount, date, description, expencemethod);
};

export const showAllDataExpencesTbl = async () => {
    const allRows = await db.getAllAsync('SELECT * FROM income');
    console.log(allRows)
}