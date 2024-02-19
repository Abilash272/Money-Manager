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

const AddEditCategory = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState('Income');
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
    <View className="flex-1 items-center flex w-full pt-3 px-4 bg-[#1f2022]">
      <View className="w-full py-2 pb-8">
        <TextInput className={`px-2 text-[#ffffff] text-base w-full border-b-[1px] mb-5 border-[#4e4e4e] pb-1 ${selectItem === 'Note' && 'border-[white]'}`}
          value={note}
          onFocus={() => setSelectItem("Note")}
          onChangeText={text => setNote(text)}
        />
        <Button title="Submit" onPress={() => console.log('Submitted!')} />
      </View>
    </View>

  );
};

export default AddEditCategory;
