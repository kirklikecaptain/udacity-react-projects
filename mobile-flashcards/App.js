import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { storeConfig } from './src/redux/store'
import { AppNavigation } from './src/components/AppNavigation'
import { View } from 'react-native'
import AppStatusBar from './src/components/AppStatusBar'
import { setNotification } from './src/api/notification'


export default class App extends Component {
	componentDidMount() {
		setNotification()
	}

  render() {
    return (
      <Provider store={storeConfig}>
				<View style={{flex: 1}}>
					<AppStatusBar />
					<AppNavigation />
				</View>
			</Provider>
    )
  }
}
