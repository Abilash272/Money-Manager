import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { TextInput, Button, View, } from 'react-native'

const AddEditCategory = ({ navigation }) => {
  const [note, setNote] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    loadListFromStorage();
  }, [])

  const loadListFromStorage = async () => {
    try {
      const list = await AsyncStorage.getItem('categories');
      if(list.length > 0){
        setData(JSON.parse(list));
      }
    } catch (error) {
      console.error('Error loading list from AsyncStorage:', error);
    }
  }

  const modifyListinStorage = async () => {
    try {
      if(note !== ""){
        const updatedList = [...data, note];
        setData(updatedList);
        await AsyncStorage.setItem('categories', JSON.stringify(updatedList));
        setNote('');
        navigation.navigate('Categories', {title: "Expenses"});
      }
      console.log();
    } catch (error) {
      console.error('Error appending item to list:', error);
    }
  }
  

  return (
    <View className="flex-1 items-center flex w-full pt-3 px-4 bg-[#1f2022]">
      <View className="w-full py-2 pb-8">
        <TextInput className={`px-2 text-[#ffffff] text-base w-full border-b-[1px] mb-5 border-[#4e4e4e] pb-1`}
          value={note}
          onChangeText={text => setNote(text)}
        />
        <Button title="Submit" onPress={modifyListinStorage} />
      </View>
    </View>

  );
};

export default AddEditCategory;
