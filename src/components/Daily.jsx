import React from 'react'
import { Text, View } from 'react-native'
import Day from './Day'

function Daily() {

  const data = [
    {
      day: 'Mon',
      date: 29,
      transactions: [
        {
          name: 'Salary',
          amount: 30000.00,
          isIncome: true
        }
      ]
    },
    {
      day: 'Tue',
      date: 16,
      transactions: [
        {
          name: 'Social Life',
          amount: -300.00,
        },
        {
          name: 'Other',
          amount: 6000.00,
          isIncome: true
        },
        {
          name: 'Education',
          amount: -6000.00,
          isIncome: false
        }
      ]
    }
  ]

  return (
    <View className="">

      <View className="flex-row w-full pt-[3] pb-2 border-b-2 border-[#8b8b8b]">
        <View className="w-1/3 items-center">
          <Text className="text-white">Income</Text>
          <Text className="text-blue-500 text-base">36,000.00</Text>
        </View>
        <View className="w-1/3 items-center">
          <Text className="text-white">Expenses</Text>
          <Text className="text-red-500 text-base">3,300.00</Text>
        </View>
        <View className="w-1/3 items-center">
          <Text className="text-white">Total</Text>
          <Text className="text-green-500 text-base">32,700.00</Text>
        </View>
      </View>

      {/* Days */}
      {data.map((day, index) => {
        return (
          <Day key={index} data={day}/>
        )
      })}
    </View>
  )
}

export default Daily