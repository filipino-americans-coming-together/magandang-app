import { AppLoading, Notifications } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './src/navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const _handleNotification = (notification) => {
    console.log(notification)
  };

  useEffect(() => {
    _notificationSubscription = Notifications.addListener(_handleNotification)
  }, [])

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'moam': require('./assets/fonts/MOAM-Bold.otf'),
      'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-BoldItalic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
      'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
      'OpenSans-ExtraBoldItalic': require('./assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
      'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
      'OpenSans-LightItalic': require('./assets/fonts/OpenSans-LightItalic.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Semibold': require('./assets/fonts/OpenSans-Semibold.ttf'),
      'OpenSans-SemiboldItalic': require('./assets/fonts/OpenSans-SemiboldItalic.ttf'),
      'Quandco': require('./assets/fonts/Quandco.otf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
