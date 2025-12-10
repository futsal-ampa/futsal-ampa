importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// PEGA AQUÍ TUS MISMAS CREDENCIALES DEL INDEX.HTML
const firebaseConfig = {
  apiKey: "AIzaSyAaL3Rs5SI4lVRYHMFYDPrFgXdtfuSNYJg",
  authDomain: "ampa-c551f.firebaseapp.com",
  projectId: "ampa-c551f",
  storageBucket: "ampa-c551f.firebasestorage.app",
  messagingSenderId: "762603084994",
  appId: "1:762603084994:web:0dbc8d1c838fbe34a36f5b",
  measurementId: "G-GGNSDCHWWC"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Manejador de notificaciones en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Notificación recibida:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // Asegúrate de tener este icono o usa uno genérico
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});