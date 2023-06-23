import * as sqlite from 'expo-sqlite';
// import {encode} from 'base-64';
import AsyncStorage from '@react-native-async-storage/async-storage';

const db = sqlite.openDatabase('userdata.db');

export const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, pass TEXT NOT NULL)',
            [],
            () => {console.log("CREATED TABLE SUCCESSFULLY!")}
        )
    })
}

export const insertUser = (user) => {
    console.log("NEW USER");
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO users (name, pass) VALUES (?, ?)',
            [user.name, user.pass],
            (tx, result) => console.log(result),
        )
    })
}

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM users',
                [],
                (tx, result) => {
                    resolve(result.rows);
                },
                (tx, error) => {
                    reject(error);
                }
            )
        })
    })
}


export const updateUsers = (user) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE users SET name=?, pass=? where id=?',
                [user.name, user.pass, user.id],
                () => console.log("Updated")
            )
        })
    }
    )
}

export const deleteUser = (user) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM users WHERE id=?',
                [user.id],
                () => console.log("User Deleted!")
            )
        },reject, resolve)
    })
}


const API_ROOT = "https://v2.jokeapi.dev/joke/Any";
// const USERNAME = "admin";
// const PASS = "12345";

export const apigetData = async () => {
    // const credentials = `${USERNAME}:${PASS}`;
    // const encod_credentials = encode(credentials);
    // console.log(encod_credentials);

    const res = await fetch(API_ROOT/*, {
        headers : {'Authorization':`Basic${encod_credentials}`}
    }*/);

    const data = await res.json();

    console.log(data['joke']);
}


export const smallstorage = async () => {
    await AsyncStorage.setItem("123", "jagpjejvnonoinaegjpajpjHAHAHAHHAHAH");
    await AsyncStorage.setItem("456", "Deleteit");

    let val = await AsyncStorage.getItem("123");
    console.log(val);
    val = await AsyncStorage.getItem("456");
    console.log(val);

    await AsyncStorage.removeItem("456");

    
    val = await AsyncStorage.getItem("456");
    console.log(val);
}