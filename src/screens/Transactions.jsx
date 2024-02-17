import React, { useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import Daily from '../components/Daily';
import Monthly from '../components/Monthly';

function Transactions() {

  const [selectedOption, setSelectedOption] = useState('Daily');

  return (
    <View className="w-full">
      {/* navbar */}
      <View className="flex-row w-full py-2 px-3">
        <TouchableOpacity>
          <Text className="text-white text-base pr-3">
            /
          </Text>
        </TouchableOpacity>
        <Text className="text-white text-base pr-3">
          {selectedOption === 'Daily'?
            'JAN 2024' : '2024'
          }
        </Text>
        <TouchableOpacity>
          <Text className="text-white text-base pr-3">
            \
          </Text>
        </TouchableOpacity>
      </View>

    {/* Options */}
    <View className="flex-row w-full py-2">
        <TouchableOpacity onPress={() => setSelectedOption('Daily')} 
          className={`w-1/2 flex items-center ${
            selectedOption === 'Daily' ? 'border-b-2 border-[#d66760]' : 'border-b-2 border-[#9b9b9b]'
          }`
        }>
          <Text className="text-white text-base pr-3 pb-1">
            Daily
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedOption('Monthly')} 
          className={`w-1/2 flex items-center ${
            selectedOption === 'Monthly' ? 'border-b-2 border-[#d66760]' : 'border-b-2 border-[#9b9b9b]'
          }`
        }>
          <Text className="text-white text-base pr-3">
            Monthly
          </Text>
        </TouchableOpacity>
      </View>

      {/* main component */}
      <ScrollView>
        {selectedOption === 'Daily'?
          <Daily /> :
          <Monthly />
        }
      </ScrollView>

    </View>
  )
}

export default Transactions