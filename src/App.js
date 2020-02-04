import React from 'react';
import Navigator from './navigation';
import NavigationService from './NavigationService';

const App = props => {
  return (
    <Navigator
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default App;
