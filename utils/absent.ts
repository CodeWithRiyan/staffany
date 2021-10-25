import firebase from './firebase'

const firestore = firebase.firestore()

export const getAllData = async () => {
    return await firestore.collection('absent').get()
}

export const addData = async (data) => {
    return await firestore.collection('absent').add(data)
}

export const getData = async (uid) =>
    await firestore.collection('absent').doc(uid).get()

export const updateData = async (uid, data) =>
    await firestore.collection('absent').doc(uid).update(data)

export const deleteData = async (uid, id) =>
    await firestore.collection('absent').doc(uid).delete()
