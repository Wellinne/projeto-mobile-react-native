import { Alert } from 'react-native';
import {
  Page, Input, Text, ContainerInput, Title, Button,
} from './style';

export default function Login() {
  return (
    <Page>
      <Title>LOGIN</Title>
      <ContainerInput>
        <Text>Email</Text>
        <Input placeholder="Digite seu e-mail" placeholderTextColor="#535365" />
      </ContainerInput>

      <ContainerInput>
        <Text>Senha</Text>
        <Input placeholder="Digite seu e-mail" placeholderTextColor="#535365" />
      </ContainerInput>

      <Button onPress={() => Alert.alert('Bem-vindo!')}>
        <Text alignSelf="center">ENTRAR</Text>
      </Button>
    </Page>
  );
}
