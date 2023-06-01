import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/Context/AuthContext'
import StackNavigation from './src/Navigation/StackNavigator'
const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigation />
      </AppState>
    </NavigationContainer>
  )
}
const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>
}


export default App
