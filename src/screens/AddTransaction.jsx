import React, { useState } from 'react';
import { View, Text, Button, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Transfer from '../components/Transfer';
import Investment from '../components/Investment';
import Income from '../components/Income';
import Expense from '../components/Expense';

const CustomButton = ({ onPress, title, focus }) => {
  return (
    <View className="w-1/2 px-[5px]">
      <TouchableOpacity className={`border-[1px] rounded-md w-full items-center py-2 bg-[#424242] border-[#d6d5d5] ${focus && "border-[#e04848]"}`} onPress={onPress}>
        <Text className={`text-[#d6d5d5] ${focus && "text-[#e04848]"}`}>{title}</Text>
      </TouchableOpacity>
      <StatusBar backgroundColor="#1f2022" barStyle="light-content" />
    </View>
  );
};

const AddTransaction = ({navigation}) => {
  const [selectedType, setSelectedType] = useState('Income');

  return (
    <View className="flex-1 items-center bg-[#1f2022]">

      <View className="flex w-full pt-3">
        <View className="flex w-full flex-col mb-4">
          <View className="flex flex-row w-full px-2 py-1">
            <CustomButton title="Income" onPress={() => setSelectedType('Income')} focus={selectedType === 'Income'} />
            <CustomButton title="Expense" onPress={() => setSelectedType('Expense')} focus={selectedType === 'Expense'} />
          </View>
          <View className="flex flex-row w-full px-2 py-1">
            <CustomButton title="Transfer" onPress={() => setSelectedType('Transfer')} focus={selectedType === 'Transfer'} />
            <CustomButton title="Investment" onPress={() => setSelectedType('Investment')} focus={selectedType === 'Investment'} />
          </View>
        </View>
        <View className="px-4 pt-3">
          {selectedType === 'Income'?
            <Income navigation={navigation}/> : 
            selectedType === 'Expense'? <Expense navigation={navigation}/> : 
            selectedType === 'Transfer'? <Transfer navigation={navigation} /> : <Investment navigation={navigation} />
          }
        </View>
      </View>

    </View>

  );
};

export default AddTransaction;
