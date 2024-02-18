import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stats from '../screens/Stats';
import Transactions from '../screens/Transactions';
import AddTransaction from '../screens/AddTransaction';
import { Image } from 'react-native';

function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Transactions' 
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarInactiveBackgroundColor: "black",
        tabBarActiveBackgroundColor: "black",
        tabBarStyle: {height : 55}
      }}>
      <Tab.Screen name="Transactions" component={Transactions}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? require('../../assets/transactions_active.png') : require('../../assets/transactions_inactive.png')}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen name="Add" component={AddTransaction} />
      <Tab.Screen name="Stats" component={Stats} />
    </Tab.Navigator>
 
  );
 
}

export default Tabs;