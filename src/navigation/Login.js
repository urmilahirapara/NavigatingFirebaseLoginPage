import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [inputTextValue, setInputTextValue] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignup = async () => {
    try {
      const isUsercreate = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const emaildata = isUsercreate.user.email;

      navigation.navigate('HomePage', {isEmail: emaildata});

      //Password is 123456 username is urvihirapara99@gmail.com
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.containr}>
      <StatusBar hidden={false} />
      <View>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Login
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter any email"
          value={inputTextValue}
          onChangeText={value => setEmail(value)}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Enter any password"
          value={inputTextValue}
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleSignup()}>
          <Text style={{color: 'white'}}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            padding: 10,
            borderRadius: 50,
          }}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={{color: 'blue'}}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  containr: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: width - 30,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  cardcontainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    width: width - 20,
    padding: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
});
