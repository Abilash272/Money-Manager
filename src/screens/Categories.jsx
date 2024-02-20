import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StatusBar } from 'react-native'

function Category({ title }) {
  return(
    <View className="flex-row w-full justify-between border-b-[1px] border-[#d8d8d8] p-3">
      <View className="flex-row">
        <Text className="text-white text-base pr-4">⛔</Text>
        <Text className="text-white text-base">{title}</Text>
      </View>
      <Text className="text-white text-base">🔧</Text>
    </View>
  )
}

function Categories({ navigation, route }) {

  const [categories, setCategories] = useState(['Fry']);

  useEffect(() => {
    getCategories();
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      getCategories();
    }, [])
  )

  const getCategories = async () => {
    const data = JSON.parse(await AsyncStorage.getItem('categories'));
    console.log(data);
    if(data.length > 0){
      setCategories(data);
    }else{
      setCategories(['Burger', 'Pizza'])
    }
  }
  
  return (
    <View className="flex-1 items-center bg-[#1f2022]">
      <ScrollView>
        {categories.map((category, index) => {
          return(
            <Category key={index} title={category} />
          )
        })}
      </ScrollView>
      <StatusBar backgroundColor="#1f2022" barStyle="light-content" /> 
    </View>
  )
}

export default Categories