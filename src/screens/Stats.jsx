import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { PieChart } from 'react-native-gifted-charts/src/PieChart';
import StatsCategory from '../components/StatsCategory';
function Stats() {
  const [selectedOption, setSelectedOption] = useState('Income');
  const [value, setValue] = useState('Monthly');

  const transactions = [{
    name: 'Social Life',
    amount: -300.00,
  },
  {
    name: 'Other',
    amount: 6000.00,
  },
  {
    name: 'Education',
    amount: -6000.00,
  }
  ]
  const chartData = [{ value: 50, text: "Food" }, { value: 80, text: "Education" }, { value: 90, text: "Social" }, { value: 70, text: "Rent" }, { value: 12, text: "Travel" },];
  const [selectedChartItem, setSelectedChartItem] = useState(chartData[0]);

  const data = [
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Weekly', value: 'Weekly' },
    { label: 'Annually', value: 'Annually' },
  ];

  const centerLabelComponent = () => {
    return (
      <View className="flex items-center ">
        <Text className="text-white font-bold text-3xl">
          {selectedChartItem.value}
        </Text>
        <Text className="font-normal text-2xl text-[#c2c1c1]">
          {selectedChartItem.text}
        </Text>
      </View>
    )
  }

  return (
    <View className="flex-1 items-center bg-[#1f2022]">
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
        <ScrollView>
          <View className="flex-1 items-center py-6 border-b-2 border-[#9b9b9b] ">
            <PieChart onPress={(item, index) => { setSelectedChartItem(item) }} radius={140} data={chartData} isThreeD={false} fontWeight='bold' centerLabelComponent={centerLabelComponent} showGradient={false} donut={true} textColor='white' showValuesAsLabels={true} labelsPosition='outward' innerRadius={85} innerCircleColor={'#1f2022'} focusOnPress={false} showText={true} />
          </View>

          <View>
            {transactions.map((data, index) => {
              return (
                <StatsCategory key={index} data={data} />
              )
            })}
          </View>
        </ScrollView>

      </View>
      <StatusBar backgroundColor="#1f2022" barStyle="light-content" /> 
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