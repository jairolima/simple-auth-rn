import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Main from './pages/main';
import SignIn from './pages/signIn';

const mainNavigation = createSwitchNavigator({
  SignIn,
  Main,
});

export default createAppContainer(mainNavigation);
