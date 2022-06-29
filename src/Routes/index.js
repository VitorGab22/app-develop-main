import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}

export default Routes;