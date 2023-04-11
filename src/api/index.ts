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
    url: string,
    like: number,
    love: number
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
    },

    loveLive: async (data: ShowsProps, type: 'love' | 'like', themaID: string) => {
        var results = db.collection("playlist").doc(themaID)

        await results.get().then(function(doc) {
            if (doc.exists) {
                var shows = doc.data()?.shows;
                var show = shows.find(function(item: ShowsProps) {
                    return item.id === data.id;
                });

                if(show[type]){
                    show[type] += 1
                } else {
                    show[type] = 1
                }

                results.update({
                    shows: shows
                })        

            }
        })
    }
}