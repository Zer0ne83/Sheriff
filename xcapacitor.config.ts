import { CapacitorConfig } from '@capacitor/cli';
const config:CapacitorConfig=
{
  appId:'dev.zer0ne.sheriff',
  appName:'Sheriff',
  bundledWebRuntime:false,
  loggingBehavior:'production',
  backgroundColor:'#121212',
  webDir:'www',
  android:{
    backgroundColor:'#121212',
    allowMixedContent:true,
    webContentsDebuggingEnabled:true,
    loggingBehavior:'production',
  },
  plugins:{
    LocalNotifications:{
      iconColor:'#FF9800',
      smallIcon:'ic_stat_sheriffnote',
      sound:'sheriffnote.wav'
    },
    SplashScreen:{
      launchShowDuration:0,
      launchAutoHide:true,
      backgroundColor:'#121212',
      androidSplashResourceName:'splash',
      androidScaleType:'CENTER_CROP',
      showSpinner:false,
      splashFullScreen:true,
      splashImmersive:true
    },
    GoogleAuth:{
      scopes:['profile','email'],
      serverClientId:'1004268441237-nbfb123pp6llgk65m25funte3545acrv.apps.googleusercontent.com',
      forceCodeForRefreshToken:true
    },
    cordova: {}
  }
};
export default config;