import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'

export default function AppStatusBar ({...props}) {
	return (
		<View style={{ height: Constants.currentHeight }}>
    	<StatusBar barStyle='light-content' translucent {...props} />
  	</View>
	)
}