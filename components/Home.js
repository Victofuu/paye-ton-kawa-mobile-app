import React from "react"
import styled from "styled-components/native";
import { Image } from "react-native";

export function Home() {
  return (
    <>
      {/* <Image source={} alt="alt text" /> */}
      <Image source={require("/home/victor/Pictures/Wallpapers/524603.jpg")} alt="si" />
      {/* <DisplayAnImage /> */}
    </>
  )
}

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;