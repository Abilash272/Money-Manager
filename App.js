import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import Transactions from './src/screens/Transactions';
import Stats from './src/screens/Stats';
import AddTransaction from './src/screens/AddTransaction';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Categories from './src/screens/Categories';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEditCategory from './src/screens/AddEditCategory';

const StackNav = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <StackNav.Navigator>
      <StackNav.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
      <StackNav.Screen
        name="Categories"
        component={Categories}
        options={({ navigation, route }) =>  ({
          title: route.params?.title+" Category" ,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("AddEditCategories", {title: route.params.title})}>
              <Text className="text-3xl text-[#ebebeb]">+</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#464646"
          },
          headerTintColor: "#ebebeb"
        })}
      />
      <StackNav.Screen
        name="AddEditCategories"
        component={AddEditCategory}
        options={({ route }) =>  ({
          title: route.params?.title+" Category" ,
          headerStyle: {
            backgroundColor: "#464646"
          },
          headerTintColor: "#ebebeb"
        })}
      />
    </StackNav.Navigator>
  </NavigationContainer>
  // <Categories />
);


export default App;
