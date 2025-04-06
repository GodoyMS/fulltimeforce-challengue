import { registerRootComponent } from 'expo';
  import "./gesture-handler.native"
import App from './App';
import 'react-native-gesture-handler';

registerRootComponent(App);
