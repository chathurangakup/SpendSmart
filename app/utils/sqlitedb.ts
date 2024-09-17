import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('inex.db');

export const createtable = async () => {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS incomeexpence (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      expencetype TEXT, 
      amount INTEGER,
      date TEXT,
      description TEXT,
      expencemethod TEXT
    );
        `);
};


export const addData = async () => {
    await db.runAsync('INSERT INTO todos (name, date) VALUES (?, ?)', 'world', '2024.10.20');
};

export const showAllData = async () => {
    const allRows = await db.getAllAsync('SELECT * FROM todos');
}