// Import the scripts you need
importScripts('https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.5.2/firebase-messaging-compat.js')

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyDVCPlsL6BQIxcM3OIIRpJ7LL-fOegjMEU",
  authDomain: "testpwa-17f02.firebaseapp.com",
  projectId: "testpwa-17f02",
  storageBucket: "testpwa-17f02.appspot.com",
  messagingSenderId: "939437110766",
  appId: "1:939437110766:web:26bf0fca736efdf65ccaff",
  measurementId: "G-7BBNR23EX3"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});