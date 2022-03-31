import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal, Picker } from 'react-native';
import UseCam from './src/components/Camera/index';

export default function App() {

  const [dataForm, setDataForm] = useState([]);
  const [matricula, setMatricula] = useState('');
  const [codigo, setCodigo] = useState('');
  const [situacao, setSituacao] = useState('');
  const [isVisible, setIsVisible] = useState(false);


  function handleSendDataPhoto () {
    
    setDataForm({matricula, codigo, situacao});

    if(matricula === '' || codigo === '' || situacao === '' ){
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
      <Picker value={situacao}
        style={{ height: 200, width: 250 }}
        onValueChange={(situacao, itemIndex) => setSituacao(situacao)}>
            <Picker.Item label="Leitura Implausível" value="Leitura Implausível"  />
            <Picker.Item label="Releitura" value="Releitura" />
            <Picker.Item label="Situação de Risco" value="Situação de Risco" />
            <Picker.Item label="Suspeita de Fraude" value="Suspeita de Fraude" />
            <Picker.Item label="Impedimento de Leitura" value="Impedimento de Leitura" />
      </Picker>
      <Button style={styles.button} title="Cadastrar" onPress={ () => handleSendDataPhoto()} />
      <Modal transparent={true} visible={isVisible}>
        <UseCam 
          CloseModalPhoto={CloseModalPhoto}
          dataForm={dataForm}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    height: 50,
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderWidth: 4,
    borderColor: "#F0F0F0",
    borderRadius: 10
  }
});