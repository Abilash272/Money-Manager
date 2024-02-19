import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stats from '../screens/Stats';
import Transactions from '../screens/Transactions';
import AddTransaction from '../screens/AddTransaction';
import { Image, View, Text } from 'react-native';

function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Transactions' 
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarInactiveBackgroundColor: "black",
        tabBarActiveBackgroundColor: "black",
        tabBarStyle: {height : 60,  padding: 0, },
        tabBarLabel: ''
      }}>
      <Tab.Screen name="Transactions" component={Transactions}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className="items-center h-full pt-2">
              <Image
                source={focused ? require('../../assets/transactions_active.png') : require('../../assets/transactions_inactive.png')}
                className="h-[25] aspect-square"
              />
              <Text className={`text-white pt-[2px] text-xs ${focused && 'text-red-700'}`}>Activity</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Add" component={AddTransaction} 
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className="items-center h-full pt-2 justify-center">
              <Image
                source={focused ? require('../../assets/add_active.png') : require('../../assets/add_inactive.png')}
                className="h-[40] aspect-square"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Stats" component={Stats} 
         options={{
          tabBarIcon: ({ focused, color }) => (
            <View className="items-center h-full pt-2">
              <Image
                source={focused ? require('../../assets/stats_active.png') : require('../../assets/stats_inactive.png')}
                className="h-[25] aspect-square"
              />
              <Text className={`text-white pt-[2px] text-xs ${focused && 'text-red-700'}`}>Stats</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
 
  );
 
}

export default Tabs;