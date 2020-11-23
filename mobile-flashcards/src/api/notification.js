import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

const NOTIFICATION_KEY = 'notification:mobile-flashcards';

function buildNotification() {
	return {
		title: 'Mobile Flashcards',
		body: 'Yo, time to review your flashcards',
		android: {
			sound: true
		}
	}
}

export function setNotification() {
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then(data => {
			if (!data) {
				Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
					if (status === 'granted') {
						Notifications.cancelAllScheduledNotificationsAsync().then(() => {
							let today = new Date()
							today.setDate(today.getDate())
							today.setHours(23, 0, 0)

							const notification = buildNotification()

							Notifications.scheduleLocalNotificationAsync(notification, {
								time: today,
								repeat: 'day'
							})
						})

						AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
					}
				})
			}
		})
}
