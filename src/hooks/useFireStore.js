import { useEffect, useState } from 'react';
import { firebaseFireStore } from '../config/firebaseConfig';

const useFireStore = (collectionName, findId, limit=20) => {

    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        const query = firebaseFireStore.collection(collectionName);
        const unsub = query
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .onSnapshot((snap) => {
            let documents =[];
            snap.forEach((doc)=>{
                if(!findId){
                    documents.push({...doc.data(), id: doc.id})
                }
                else{
                    if(doc.id === findId){
                        documents.push({...doc.data(), id: doc.id})
                    }
                }
            })
            setDocs(documents);
        })
        return () => unsub();

    },[collectionName, limit,findId]);

    return{ docs };
}

export default useFireStore;