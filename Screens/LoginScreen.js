import React, { useState } from 'react';
import { Image, ImageBackground,StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

function LoginScreen() {
    const [name, setEmail] =useState('');
    const [password, setPassword] =useState('');
   
    return (
       <ImageBackground style={styles.bimg} 
       source={require("../assets/bimg.jpg")}>
           <Image style={styles.logo} 
           source={require('../assets/logo.png')}></Image>
           <View style={styles.logincontain}>
               <Text style={styles.text}>Login</Text>
               <Text style={styles.ltext}>Please sign in to continue</Text>

  
<View>
    <View  style={styles.tiv}>
    <TextInput
    style={styles.TextInput}
    placeholder="   Enter your Email"
    placeholderTextColor="grey"
    onChangeText={(email) => setEmail(password)}
  />


  <TextInput
    style={styles.TextInput}
    placeholder="   Enter your Password"
    placeholderTextColor="grey"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
    </View>

<TouchableOpacity style={styles.loginBtn}>
  <Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>

<TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
</View>
<View style={styles.fotter}> 
    <Text style={{ color: 'grey',paddingBottom:10, }}>
        Dont't have an account ?          
        <TouchableOpacity>
        <Text style={{ color: '#066163',fontWeight:'bold' }}>SIGN UP</Text>
      </TouchableOpacity>
    </Text>
</View>

   </View>
           
   </ImageBackground>
       
    );
}
const styles = StyleSheet.create({
    bimg:{
        flex:1,
        

    },
    logo:{
        width:200,
        height:200,
        borderRadius:30,
        resizeMode:"contain",
        alignSelf:"center",
        
    },
    loginText:{
     color:'white',
     fontSize:16,
     fontWeight: 'bold',
    },
    text:{
        paddingLeft:20,
        fontSize: 30, 
        fontWeight: 'bold'
        
    },
    ltext:{
        paddingLeft:20,
        fontWeight:'bold',
        color: 'grey',
        
    },
      tiv:{
          paddingTop:50,
        alignItems: 'flex-start',
        paddingLeft:20,
        alignContent:"center",
        textAlign:"center",
      },
      TextInput: {
        
        backgroundColor: "#F2F2F2",
        
        borderRadius:12,
        width:"80%",
        height:40,
        marginBottom: 20,
       
      },
      loginBtn:
 {
     alignSelf:"center",
   width:"40%",
   borderRadius:10,
   height:35,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#066163",
   
 },
 forgot_button: {
     alignSelf:"center",
    height: 30,
    marginBottom: 30,
    marginTop:30,
    color: '#B20600',
  },
  fotter:{

    alignSelf:'center',
    paddingTop:100,
    
    
  },
    
})
export default LoginScreen;