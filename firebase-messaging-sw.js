importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyB6hFIqwCwOuUosWF-YdY5lxT0WBvMAkAY",
  authDomain: "student-auth-app-f6356.firebaseapp.com",
  projectId: "student-auth-app-f6356",
  storageBucket: "student-auth-app-f6356.firebasestorage.app",
  messagingSenderId: "106605387060",
  appId: "1:106605387060:web:198505386f46b725225961"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});