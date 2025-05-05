import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('myDatabase.db');


export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists items (id integer primary key not null, name text);'
    );
  });
};


export const addItem = (name) => {
  db.transaction(tx => {
    tx.executeSql('insert into items (name) values (?);', [name]);
  });
};


export const getItems = (callback) => {
  db.transaction(tx => {
    tx.executeSql('select * from items;', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};