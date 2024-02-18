import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import AddInEx from '../components/AddInEx';

const CustomButton = ({ onPress, title }) => {
  return (
    <View className="w-1/2 px-[5px]">
      <TouchableOpacity className="border-[1px] rounded-md w-full items-center py-2 bg-[#424242] border-[#d6d5d5]" onPress={onPress}>
        <Text className="text-[#d6d5d5]">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const MyScreen = () => {
  const [selectedType, setSelectedType] = useState('Income');

  return (
    <View className="flex w-full pt-3">
      <View className="flex w-full flex-col mb-4">
        <View className="flex flex-row w-full px-2 py-1">
          <CustomButton title="Income" onPress={() => setSelectedType('Income')} />
          <CustomButton title="Expense" onPress={() => setSelectedType('Expense')} />
        </View>
        <View className="flex flex-row w-full px-2 py-1">
          <CustomButton title="Transfer" onPress={() => setSelectedType('Transfer')} />
          <CustomButton title="Investment" onPress={() => setSelectedType('Investment')} />
        </View>
      </View>
      <View className="px-4 pt-3">
        <AddInEx />
      </View>
    </View>

  );
};

export default MyScreen;
