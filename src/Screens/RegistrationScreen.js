import React, {  useEffect, useState } from "react";
import { useFonts } from 'expo-font';

import { Dimensions,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
const initialState = {
  login:'',
  email: '',
  password:''
} 
const windowDimensions = Dimensions.get('window').width;


export default function RegistrationScreen() {

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  console.log("RegistrationScreen  isShowKeyboard:", isShowKeyboard)
  const [state, setState] = useState(initialState);
  // fonts______________________________
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Black': require('../fonts/Inter-Black.ttf'),
    'Roboto-regular': require('../fonts/Roboto-Regular.ttf'),
    'Roboto-medium': require('../fonts/Roboto-Medium.ttf'),
  });
 
  
// ________________________
const [dimensions, setDimensions] = useState({
  window: windowDimensions,
});


useEffect(() => {
  const subscription = Dimensions.addEventListener(
    'change',
    (window) => {
      setDimensions(window);
    },
  );
  return () => subscription?.remove();
});
// ____________________________
  const onRegister = () => {
    if (!state.login || !state.email|| !state.password){
      Alert.alert("Fill in all the fields!");
      return;
    }
    
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log('state', state)
    setState(initialState)
  };
  const handlePress = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState)
  };
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
       <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/image/PhotoBG.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.wraper}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <Image style={styles.avatarWrapper} source={require('../../assets/image/Add_photo.png')} />
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Реєстрація</Text>
              </View>
              <SafeAreaView>
                <View
                  style={{
                    ...styles.form,
                    marginBottom: isShowKeyboard ? 130 : 66,
                    
                  }}
                >
                  <TextInput
                    style={[styles.input, { marginBottom: 16 }]}
                    onChangeText={(value)=>setState((prevState)=>({...prevState, login:value}))}
                    value={state.login}
                    placeholder="Логін"
                    keyboardType="default"
                    onFocus={() => setIsShowKeyboard(true)}
                  />
                  <TextInput
                    style={[styles.input, { marginBottom: 16 }]}
                    onChangeText={(value)=>setState((prevState)=>({...prevState, email:value}))}
                    value={state.email}
                    placeholder="Адреса електронної пошти"
                    keyboardType="email-address"
                    onFocus={() => setIsShowKeyboard(true)}
                  />
                  <View>
                     
                  </View>
                  <TextInput
                    style={[styles.input, { marginBottom: 43 }]}
                    placeholder="Пароль"
                    keyboardType="default"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}
                    onChangeText={(value)=>setState((prevState)=>({...prevState, password:value}))}
                    secureTextEntry = {true}
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.btn}
                    onPress={onRegister}
                  >
                    <Text style={styles.btnTitle}>Зареєстуватися</Text>
                  </TouchableOpacity>
              <Text style={styles.linkTitle}>Вже є акаунт? Увійти</Text>
                </View>
              </SafeAreaView>
            </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
          </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  wraper: {
    marginTop: 263,
    backgroundColor: "#FFF",
    //  height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    alignItems: "center",
    marginBottom: 33,
  },
  avatarWrapper: {
    width: 132,
    height: 120,
    marginTop: -60,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom:32,
  },
  headerTitle: {
    fontFamily: 'Roboto-medium',
    fontSize: 30,
    fontWeight: 500,
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    fontFamily: 'Roboto-regular',
    height: 50,
    borderWidth: 1,
    padding: 16,
    borderRadius: 6,
  },
  btn: {
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 16,
  },
  btnTitle: {
    fontFamily: 'Roboto-regular',
    color: "#ffffff",
    fontSize: 16,
  },
  linkTitle:{
    fontFamily: 'Roboto-regular',
    fontSize: 16,
    color: '#1B4371',
    textAlign:'center',
  }
});
