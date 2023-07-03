import styled from 'styled-components/native';

type TextProps = {
  alignSelf?: string;
}

export const Page = styled.View`
  flex: 1;
  background-color: #B7B5E4;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #F4F4F6;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Roboto';
  align-self: center;
  margin-bottom: 20px;
`;

export const ContainerInput = styled.View`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: #535365;
  font-size: 16px;
  border: 1px solid #F4F4F6;
  border-radius: 5px;
  padding: 10px;
`;

export const Text = styled.Text<TextProps>`
  color: #F4F4F6;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  align-self: ${({ alignSelf }) => alignSelf || 'flex-start'};
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  align-self: center;
  background-color: #7C78CE;
  margin-top: 20px;
`;
