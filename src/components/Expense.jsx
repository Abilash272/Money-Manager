import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableWithoutFeedback, Button, TouchableOpacity, View, Keyboard, ScrollView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} className="w-1/2">
      <Text className="text-base py-1 border-[1px] text-center text-[#bbbbbb] border-[#bbbbbb]">{title}</Text>
    </TouchableOpacity>
  )
}

function Expense({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectItem, setSelectItem] = useState("");
  const [account, setAccount] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [buttons, setButtons] = useState(['Education', 'Health', 'Food', 'Travel', 'Fun'])

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(false);
    setDate(currentTime);
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View>
        <View>
          <View className="flex-row justify-between py-2 w-full">
            <TouchableOpacity onPress={() => { setShowDatePicker(true); handlePressOutside(); setSelectItem("DateTime") }} className="flex-row w-1/4 ">
              <Text className="text-[#c0c0c0] text-base">Date</Text>
            </TouchableOpacity>
            <View className={`flex-row w-3/4 justify-between border-b-[1px] border-[#4e4e4e] pb-1 ${(showDatePicker || showTimePicker) && 'border-[white]'}`}>
              <TouchableOpacity onPress={() => { setShowDatePicker(true); handlePressOutside(); setSelectItem("DateTime") }} className="flex-row px-2">
                <Text className="text-[#ffffff] text-base">{date.toLocaleDateString()}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setShowTimePicker(true); handlePressOutside(); setSelectItem("DateTime") }} className="flex-row px-2">
                <Text className="text-[#ffffff] text-base">{date.toLocaleTimeString()}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          )}
          {showTimePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onChangeTime}
            />
          )}
        </View>
        <TouchableOpacity onPress={() => { handlePressOutside(); setSelectItem("Account") }} className="flex-row w-full py-2">
          <Text className="text-[#c0c0c0] text-base w-1/4 pt-1">Account</Text>
          <Text className={`px-2 text-[#ffffff] text-base w-3/4 border-b-[1px] border-[#4e4e4e] pb-1 ${selectItem === 'Account' && 'border-[white]'}`}>{account}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { handlePressOutside(); setSelectItem("Category") }} className="flex-row w-full py-2">
          <Text className="text-[#c0c0c0] text-base w-1/4 pt-1">Category</Text>
          <Text className={`px-2 text-[#ffffff] text-base w-3/4 border-b-[1px] border-[#4e4e4e] pb-1 ${selectItem === 'Category' && 'border-[white]'}`}>{category}</Text>
        </TouchableOpacity>

        <View className="flex-row w-full py-2">
          <Text className="text-[#c0c0c0] text-base w-1/4 pt-1">Amount</Text>
          <TextInput className={`px-2 text-[#ffffff] text-base w-3/4 border-b-[1px] border-[#4e4e4e] pb-1 ${selectItem === 'Amount' && 'border-[white]'}`}
            value={amount}
            onFocus={() => setSelectItem("Amount")}
            onChangeText={text => setAmount(text)}
            keyboardType="numeric"
          />
        </View>

        <View className="flex-row w-full py-2 pb-8">
          <Text className="text-[#c0c0c0] text-base w-1/4 pt-1">Note</Text>
          <TextInput className={`px-2 text-[#ffffff] text-base w-3/4 border-b-[1px] border-[#4e4e4e] pb-1 ${selectItem === 'Note' && 'border-[white]'}`}
            value={note}
            onFocus={() => setSelectItem("Note")}
            onChangeText={text => setNote(text)}
          />
        </View>
        <Button title="Submit" onPress={() => console.log('Submitted!')} />

        <View className='w-full pt-6 '>
          <View className="w-full py-2 bg-[#686868] flex flex-row justify-between px-3">
            <Text className='text-base text-white font-semibold'>Category</Text>
            <TouchableOpacity className='flex'
              onPress={() =>
                navigation.navigate('Categories', { title: 'Expenses', categories: ['🍔 Food', '⛩️ Culture', '❤️ Health', '🗺️ Travel', '🎮 Fun'] })
              }>
              <Text className='text-base text-white font-semibold'>🔧</Text>
            </TouchableOpacity>
          </View>

          <ScrollView className="w-full pt-4">
            {buttons.map((title, index) => (
              index % 2 === 0 && (
                <View key={index} className="flex-row w-full">
                  <CustomButton onPress={() => {
                    if (selectItem === 'Category') {
                      setCategory(title)
                    } else if (selectItem === 'Account') {
                      setAccount(title)
                    }
                  }
                  } title={title} />
                  {index + 1 < buttons.length && (
                    <CustomButton
                      onPress={() => {
                        if (selectItem === 'Category') {
                          setCategory(buttons[index + 1])
                        } else if (selectItem === 'Account') {
                          setAccount(buttons[index + 1])
                        }
                      }
                      } title={buttons[index + 1]} />
                  )}
                </View>
              )
            ))}
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Expense