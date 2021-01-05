import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DashRoutes from './src/routes/DashRoutes';

export default function App() {
  //APP JÁ UTILIZANDO NAVEGAÇÃO
  return (

    <NavigationContainer theme={
      {
        ...DefaultTheme,
        colors:{
          background:'#FD3'
        }
      }
    }>
      <DashRoutes />
    </NavigationContainer>
  )
}
