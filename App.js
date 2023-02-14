import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { AppLayout } from './components/Layout';
import { Home } from './components/Home';

const App = () => {
  return (

    <AppLayout>
      <Home />
    </AppLayout>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

export default App;