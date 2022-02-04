import styled from 'styled-components';

import { Text, View, TouchableOpacity, TextInput } from 'react-native';

export const CardView = styled(View)`
  display: flex;
  background-color: ${(props: { number: number; }) => (props.number % 2 === 0 ? '#FFC4E1' : '#D6E5FA')};
  min-height: 80px;
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
`;

export const Title = styled(Text)`
  font-size: 15px;
  color: black;
`;

export const Body = styled(Text)`
  margin: 5px;
  font-size: 13px;
  color: #323232;
`;

export const ShowComments = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-top-width: 1px;
  border-top-color: #e1e1e1;
`;

export const CommentView = styled(View)`
  display: flex;
  background-color: #efefef;
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
  border-top-width: 1px;
  border-top-color: #e1e1e1;
`;

export const InputView = styled(View)`
  display: flex;
  flex-direction: row;
  padding-bottom: 5px;
`;

export const Input= styled(TextInput)`
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  display: flex;
  flex: 1;
  background-color: #efefef;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`

export const SaveButton = styled(TouchableOpacity)`
  display: flex;
  flex: 1;
  max-width: 30%;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { number: number; }) => (props.number % 2 !== 0 ? '#FFC4E1' : '#D6E5FA')};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`