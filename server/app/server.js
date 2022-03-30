import express from 'express'
import csv from 'csv-parser'
import fs from 'fs'
import database from './firebase.js';
import { getDoc, setDoc, doc } from "firebase/firestore";
import cors from 'cors'

const app = express();
const results = [];

fs.createReadStream('./app/song_list.csv')
    .pipe(csv({}))
    .on('data', (data) => { results.push(data) })
    .on('end', () => {
        const lowercased = []
        results.map((o, i) => { lowercased[i] = dataToLowercase(o) })
        addSongListToDatabase(lowercased)
    });


app.get('/home', cors(), async (req, res) => {
    try {
        const data = await getSongListFromDatabase()
        res.send(data)
    } catch (e) {
        console.error("Error sending data: ", e);
    }

})

const server = app.listen(4001, () => {
    console.log('listening on 4001')
})

export const addSongListToDatabase = async (data) => {
    try {
        await setDoc(doc(database, "song_list", "data"), {
            song_list: data
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getSongListFromDatabase = async () => {
    try {
        const docRef = await getDoc(doc(database, "song_list", "data"))
        return (docRef.data())
    } catch (e) {
        console.error("Error getting document: ", e);
    }
}

export const dataToLowercase = (data) => {
    try {
        const lowercased = {
            SongName: data.SongName.toLowerCase(),
            Year: data.Year.toLowerCase(),
            Band: data.Band.toLowerCase()
        }
        return lowercased
    } catch (e) {
        console.error("Error LowerCasing document: ", e);
    }
}
