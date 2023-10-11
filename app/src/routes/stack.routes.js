import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { List } from '../screens/List';
import { Cadastro } from '../screens/Cadastro';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes(){
  return (
    <Navigator initialRouteName='Cadastro'>
      <Screen
      name='cadastro'
      component={Cadastro}
      options={{
        headerShown: false,
      }}
      />
       <Screen
      name='list'
      component={List}
      options={{
        headerShown: false,
      }}
      />
    </Navigator> 
  )
}