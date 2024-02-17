import React from 'react'
import { View, Text } from 'react-native'
 
function StatsCategory({data}) {
  return (
    <View className="flex w-full flex-row justify-between p-4 border-b-[1px] border-[#464646]">
      <Text className="text-white text-base">{data.name}</Text>
      <Text className="text-white text-base">$ {data.amount}</Text>
    </View>
  )
}

export default StatsCategory