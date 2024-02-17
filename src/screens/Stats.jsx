import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';

function Stats() {
  const [selectedOption, setSelectedOption] = useState('Income');
  const [value, setValue] = useState('Monthly');

  const data = [
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Weekly', value: 'Weekly' },
    { label: 'Annually', value: 'Annually' },
  ];

  return (
    <View className="w-full">
      {/* navbar */}
      <View className="flex-row w-full py-2 px-3 justify-between items-center">
        <View className="flex-row">
          <TouchableOpacity>
            <Text className="text-white text-base pr-3">
              /
            </Text>
          </TouchableOpacity>
          <Text className="text-white text-base pr-3">
            {selectedOption === 'Daily' ?
              'JAN 2024' : '2024'
            }
          </Text>
          <TouchableOpacity>
            <Text className="text-white text-base pr-3">
              \
            </Text>
          </TouchableOpacity>
        </View>
        <View className="border-2 border-white w-2/5 px-2">
          <Dropdown
            onChange={item => setValue(item.value)}
            data={data}
            value={value}
            labelField="label"
            valueField="value"
            iconColor="white"
            selectedTextStyle={styles.selectedTextStyle}
            renderItem={(item) => (
              <TouchableOpacity onPress={() => setValue(item.label)} className="bg-[#303030]">
                <Text className="p-2 text-base text-white border-b-[1px]">{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      {/* Options */}
      <View className="flex-row w-full py-2">
        <TouchableOpacity onPress={() => setSelectedOption('Income')}
          className={`w-1/3 flex items-center ${selectedOption === 'Income' ? 'border-b-2 border-[#d66760]' : 'border-b-2 border-[#9b9b9b]'
            }`
          }>
          <Text className="text-white text-base pr-3 pb-1">
            Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedOption('Expense')}
          className={`w-1/3 flex items-center ${selectedOption === 'Expense' ? 'border-b-2 border-[#d66760]' : 'border-b-2 border-[#9b9b9b]'
            }`
          }>
          <Text className="text-white text-base pr-3">
            Expense
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedOption('Investment')}
          className={`w-1/3 flex items-center ${selectedOption === 'Investment' ? 'border-b-2 border-[#d66760]' : 'border-b-2 border-[#9b9b9b]'
            }`
          }>
          <Text className="text-white text-base pr-3">
            Investment
          </Text>
        </TouchableOpacity>
      </View>

      {/* main body */}


    </View>
  )
}

export default Stats

const styles = StyleSheet.create({
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
})