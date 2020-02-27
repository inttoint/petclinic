import fb from 'firebase';

export const appName = 'petclinic';

export const firebaseConfig = {
  apiKey: 'AIzaSyDwYY7nzRBj2NzEGU64BapCZzJgCYev_IM',
  authDomain: `${appName}-dd976.firebaseapp.com`,
  databaseURL: `https://${appName}-dd976.firebaseio.com`,
  projectId: `${appName}-dd976`,
  storageBucket: `${appName}-dd976.appspot.com`,
  messagingSenderId: '1047275716813',
  appId: '1:1047275716813:web:bf04aa44dca596b600e984',
  measurementId: 'G-NEQ36JNQW8'
};

fb.initializeApp(firebaseConfig);
