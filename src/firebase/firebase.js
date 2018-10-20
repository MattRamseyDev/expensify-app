import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child_added 
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses)
//   })

// database.ref('expenses').push(({
//   description: '1',
//   note: '',
//   amount: 15,
//   createdAt: 25
// }))




// database.ref('notes/-LOyXcRjx8YHVyX5K1pj').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native. Node.js'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error with data fetching ', e)
//   });

// setTimeout(() => {
//   database.ref('age').set(28)
// }, 5000);
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 10000);
// setTimeout(() => {
//   database.ref('age').set(38)
// }, 15000);

// database.ref('location/state').
//   once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data: ', e);
//   })

// database.ref().set({
//     name: 'Matt Ramsey',
//     age: 23,
//     stressLevel: 5,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//         city: 'Austin',
//         state: 'Texas',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed.', error)
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });


// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('data was removed')
// }).catch((e) => {
//     console.log('did not remove data', e)
// })