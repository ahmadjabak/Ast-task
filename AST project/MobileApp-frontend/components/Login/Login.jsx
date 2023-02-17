import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import axios from "axios"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const onLogin = ()=>{
    let formData = new FormData();
    formData.append("email",email)
   formData.append("password",password)
   axios
   .post(`http://192.168.1.14:8000/api/login`, formData, {
    
     headers: { "Content-Type": "multipart/form-data" },
   })
   .then((res) => {
    console.log(res.data)
   if(res.data.token){
    navigation.navigate("home")
   }
  }

   )
   .catch((err) => {
    Alert.alert("Incorrect user name and password");
   });
    }
  
  return (
    <View style={styles.container}>
        <Text style={styles.image}>
       Welcome To Our App
     </Text>
     <View style={styles.icon}>
     <Icon name="lock" size={40} color='white'></Icon>
      <StatusBar style="auto" />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#fff"
          autoCapitalize='none'
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#fff"
          autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      
      <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon:{
    marginBottom: 40,
    borderWidth: 1,
    borderRadius:50,
    backgroundColor:"#1976d2",
    borderColor:"#1976d2"
  },
  image: {
   fontSize:20,
 
    borderRadius:50,
    marginBottom: 40,

    borderTopWidth: 0,
  },
  inputView: {
    backgroundColor: "#1976d2",
  
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    color:"#fff",
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    
    backgroundColor: "#1976d2",
  },
  loginText:{
    color:"#fff",
  }
});