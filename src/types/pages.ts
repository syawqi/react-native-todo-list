import {
  BottomTabNavigationProp,
  RouteProp,
} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationParamList} from './navigation';

/**
 * @description Start Todo Page Types
 */

export type TodoPageNavigationProp = BottomTabNavigationProp<
  NavigationParamList,
  'Todo'
>;

/**
 * @description End Todo Page Types
 * @description Start History Page Types
 */

export type HistoryPageNavigationProp = BottomTabNavigationProp<
  NavigationParamList,
  'History'
>;
/**
 * @description End History Page Types
 * @description Start Form Page Types
 */
export type FormPageNavigationProp = NativeStackNavigationProp<
  NavigationParamList,
  'Form'
>;

export type FormPageRouteProp = RouteProp<NavigationParamList, 'Form'>;
