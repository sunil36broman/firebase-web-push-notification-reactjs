import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBhPtazrwmEdlG_HgEnfkgsJ5-pP1hmHvw",
    authDomain: "push-49ddc.firebaseapp.com",
    databaseURL: "https://push-49ddc.firebaseio.com",
    projectId: "push-49ddc",
    storageBucket: "push-49ddc.appspot.com",
    messagingSenderId: "878289771070",
    appId: "1:878289771070:web:97ba453625666dabd54f6f"
  });

  // use other service worker
  // navigator.serviceWorker
  //   .register('/my-sw.js')
  //   .then((registration) => {
  //     firebase.messaging().useServiceWorker(registration);
  //   });
}

export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('user token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}
