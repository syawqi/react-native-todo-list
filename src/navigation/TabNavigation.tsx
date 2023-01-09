import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {imagePath} from '../assets/assets';
import TabBarIcon from '../components/images/tabBar/TabBarIcon';
import TabBarText from '../components/text/tabBar/TabBarText';
import HistoryPage from '../pages/history/HistoryPage';
import TodoPage from '../pages/todo/TodoPage';

const Tab = createBottomTabNavigator();

export function HomeTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Todo"
        component={TodoPage}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <TabBarIcon source={imagePath.TODO_ACTIVE} />;
            }
            return <TabBarIcon source={imagePath.TODO_INACTIVE} />;
          },
          tabBarLabel: ({focused}) => {
            return <TabBarText label={'To Do'} active={focused} />;
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryPage}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <TabBarIcon source={imagePath.HISTORY_ACTIVE} />;
            }
            return <TabBarIcon source={imagePath.HISTORY_INACTIVE} />;
          },
          tabBarLabel: ({focused}) => {
            return <TabBarText label={'History'} active={focused} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
