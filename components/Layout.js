import React from "react"
import { SafeAreaView } from "react-native";
import { Text } from "react-native";

export function AppLayout(props) {
  return (
    <SafeAreaView>
      { props.children }
    </SafeAreaView>
  )
}
