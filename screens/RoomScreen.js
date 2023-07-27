import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function RoomScreen({ setScreen, screens, setRoomId, roomId }) {
  const onCallOrJoin = (screen) => {
    if (roomId.length > 0) {
      setScreen(screen);
    }
  };

  //generate random room id
  useEffect(() => {
    const generateRandomId = () => {
      const characters = "abcdefghijklmnopqrstuvwxyz";
      let result = "";
      for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return setRoomId(result);
    };
    generateRandomId();
  }, []);

  return (
    <View>
      <Text className="text-2xl font-bold text-center">Enter Room ID:</Text>
      <TextInput
        className="bg-white border-sky-600 border-2 mx-5 my-3 p-2 rounded-md"
        value={roomId}
        onChangeText={setRoomId}
      />
      <View className="gap-y-3 mx-5 mt-2">
        <TouchableOpacity
          className="bg-sky-300 p-2  rounded-md"
          onPress={() => onCallOrJoin(screens.CALL)}
        >
          <Text className="color-black text-center text-xl font-bold ">
            Start meeting
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-sky-300 p-2 rounded-md"
          onPress={() => onCallOrJoin(screens.JOIN)}
        >
          <Text className="color-black text-center text-xl font-bold ">
            Join meeting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
