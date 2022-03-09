import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

export default function FirebaseMessaging() {
  const firebaseConfig = {
    apiKey: "AIzaSyD-_n3iKZcMor_j1jpOqGyRfqpH16Yu8QU",
    authDomain: "fcm-test-ea1ca.firebaseapp.com",
    projectId: "fcm-test-ea1ca",
    storageBucket: "fcm-test-ea1ca.appspot.com",
    messagingSenderId: "592535260625",
    appId: "1:592535260625:web:b666af36c0a477d8cfa4f0"
  };

  // Initialize Firebase
  useEffect(() => {
    initializeApp(firebaseConfig);
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: 'BLhTePlz2N76Zv0UvyWX9Pw5Hv5z7837gkbDpeI7JsgAhY4rIyjDZMl7P4nkE3upavhYOs-8-9Xtvpfk0i6Rm7g' }).then((currentToken) => {
      if (currentToken) {
        console.log("firebase token : ", currentToken )
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // ...
    });
  })
  return (
    <></>
  )
}

