import React from 'react'
import { Text, View } from 'react-native'

function Month({ data }) {
  return (
    <View className="mt-3 bg-[#363636]">
      {/* Day */}
      <View className="flex-row w-full p-3 items-center border-b-[1px] border-[#838383]">
        <View className="flex-row w-1/3 items-center">
          <Text className="text-white font-semibold text-xl pr-2">Jan</Text>  
        </View>
        <Text className="w-1/3 flex text-right text-base text-blue-500">$ 30,000.00</Text>
        <Text className="w-1/3 flex text-right text-base text-red-500">$ 0.00</Text>
      </View>

      {/* transaction */}
      {data.transactions.map((transaction, index) => {
        return (
          <View key={index} className="px-3 flex-row py-4 justify-between">
            <Text className="text-base text-[#8b8b8b]">01</Text>
            <Text className={`text-base text-blue-500 ${transaction.amount < 0 && 'text-red-500'}`}>
              $ {Math.abs(transaction.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </Text>
          </View>
        )
      })}
    </View>
  )
}

export default Month;