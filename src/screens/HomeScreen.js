import React, { useEffect } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar
} from 'react-native';
import { OpenSansLightText, OpenSansRegularText } from '../components/StyledText'
import registerForPushNotificationsAsync from '../services/registerForPushNotificationsAsync'

export default function HomeScreen() {
  
  useEffect(() => {
    registerForPushNotificationsAsync()
  }, [])
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <View style={{ height: 300 }}>
          <Image 
            source={require('../../assets/images/preview.png')}
            style={{ 
              flex: 1,
              height: undefined,
              width: undefined,
            }}
            resizeMode="cover"
          />

        </View>
        <View style={{ flex: 1 }}>
          <View style={sectionStyles.container}>
            <OpenSansLightText style={sectionStyles.header}>Updates</OpenSansLightText>
            <View style={sectionStyles.body}>
              <OpenSansRegularText style={{ height: 100, lineHeight: 20, textAlign: 'center'}}>No updates.</OpenSansRegularText>
            </View>
          </View>
          <View style={sectionStyles.container}>
            <OpenSansLightText style={sectionStyles.header}>Your Workshops</OpenSansLightText>
            <View style={sectionStyles.body}>
              <OpenSansRegularText style={{ height: 100, lineHeight: 20, textAlign: 'center'}}>No workshops.</OpenSansRegularText>
            </View>
          </View>
        </View>


      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const sectionStyles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    flex: 0,
  },
  header: {
    fontSize: 30,
    paddingBottom: 15,
    textAlign: 'center'
  },
  body: {
    flex: 1
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
