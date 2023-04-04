import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

type ListProps = {
    id: string,
    title: string,
    shows: ShowsProps[]
}[]

type ShowsProps = {
    id: string
    title: string,
    url: string
}

export default {
    getPlayList: async () => {
        var list:ListProps = []

        const results = await db.collection('playlist').get()

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: result.id,
                title: data.title,
                shows: data.shows
            })
        })
        
        return list;
    },

    getVideo: async (id: string) => {
        let show = null
        const results = await db.collection('playlist').get()
        
        results.forEach(result => {
            let data = result.data()

            data.shows.map((item: ShowsProps) => {
                if(item.id === id){
                    show = item
                }
            })
        })

        return show
    }
}