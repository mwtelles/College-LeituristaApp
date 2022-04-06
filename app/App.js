import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal, Pressable, Image, ImageBackground} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import UseCam from './src/components/Camera/index';
import logo from './assets/logo.png';

export default function App() {

  const [dataForm, setDataForm] = useState([]);
  const [matricula, setMatricula] = useState('');
  const [codigo, setCodigo] = useState('');
  const [situacao, setSituacao] = useState('');
  const [isVisible, setIsVisible] = useState(false);


  function handleSendDataPhoto () {
    
    setDataForm({matricula, codigo, situacao});

    if(matricula === '' || codigo === '' || situacao === null ){
      alert('Preencha todos os campos.')
    }
    else {
      setIsVisible(!isVisible);
    }
  }


  function CloseModalPhoto() {
    setMatricula('');
    setCodigo('');
    setSituacao('');
    setIsVisible(!isVisible);
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> 
      <TextInput 
        style={styles.input}
        maxLength={5}
        keyboardType="number-pad" 
        placeholder="Digite sua matricula"
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput 
        style={styles.input}
        placeholder="Digite o codigo"
        value={codigo} 
        onChangeText={setCodigo}
        maxLength={8}
      />
      <RNPickerSelect
            onValueChange={(situacao) => console.log(situacao)}
            items={[
                { label: 'Leitura Implausível', value: 'Leitura Implausível' },
                { label: 'Releitura', value: 'Releitura' },
                { label: 'Situação de Risco', value: 'Situação de Risco' },
                { label: 'Suspeita de Fraude', value: 'Suspeita de Fraude' },
                { label: 'Impedimento de Leitura', value: 'Impedimento de Leitura' },
            ]}
            style={picker}
        />
      <Pressable style={btn.button} onPress={ () => handleSendDataPhoto()}>
      <Text style={btn.text}>Cadastrar Ocorrência</Text>
      </Pressable>
      <Modal transparent={true} visible={isVisible}>
        <UseCam 
          CloseModalPhoto={CloseModalPhoto}
          dataForm={dataForm}
        />
      </Modal>
    </View>
  );
}

const btn = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#F9F9F9',
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88BDFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: '95%',
    height: 50,
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 10
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
});

const picker = StyleSheet.create({
  inputIOS: {
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      backgroundColor: '#F9F9F9',
      marginTop: 10,
      marginLeft: 10,
      width: '95%',
      borderWidth: 1,
      borderColor: '#F0F0F0',
      borderRadius: 4,
      borderRadius: 10,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
      justifyContent: 'center',
      flexDirection: 'row',
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  }
});