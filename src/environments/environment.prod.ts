import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  firebase: {
    projectId: 'sherifffb-90311',
    appId: '1:806779609016:web:214578b33e0fd15820f94d',
    storageBucket: 'sherifffb-90311.appspot.com',
    locationId: 'australia-southeast1',
    apiKey: 'AIzaSyAKjQhMIHzgMJWtYhOU51V0BiSIYmVYqqQ',
    authDomain: 'sherifffb-90311.firebaseapp.com',
    messagingSenderId: '806779609016',
  },
  production: true,
  logging: {
    level: NgxLoggerLevel.DEBUG
  }
};
