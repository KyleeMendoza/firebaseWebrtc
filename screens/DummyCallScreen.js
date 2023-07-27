import { View, Text } from "react-native";
import React from "react";

import CallActionBox from "../components/CallActionBox";

const DummyCallScreen = () => {
  const switchCamera = () => {
    console.log("Camera Switched");
  };

  const toggleMute = () => {
    console.log("Mic Muted");
  };

  const toggleCamera = () => {
    console.log("Camera Toggled");
  };
  const endCall = () => {
    console.log("Call ended");
  };

  return (
    <View className="flex-1 bg-red-600">
      <View className="absolute bottom-0 w-full ">
        <CallActionBox
          switchCamera={switchCamera}
          toggleMute={toggleMute}
          toggleCamera={toggleCamera}
          endCall={endCall}
        />
      </View>
    </View>
  );
};

export default DummyCallScreen;
