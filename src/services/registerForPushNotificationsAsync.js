import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import { postNotificationToken } from '../api/Client'

export default async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    try {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (status !== 'granted') {
        return;
      }    
        
      try {
        // Get the token that uniquely identifies this device
        let token = await Notifications.getExpoPushTokenAsync();
    
        postNotificationToken(token)
          .then(res => console.log('Token posted.', res))
      } catch (e) {
        console.log(e)
      }
    } catch (e) {
      console.log(e)
    }
  }

  

  
}