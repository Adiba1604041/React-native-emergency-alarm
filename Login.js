import React,{useState, Component}  from 'react';
import { Text,ImageBackground,StyleSheet,TouchableOpacity,View,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {authentication} from './firebase/firebase-config';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

function Login({navigation}){
    const [isSignedIn, setIsSignedIn] = useState(false);
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const signInUser = ()=>{
        signInWithEmailAndPassword(authentication,email,password)
        .then((re)=>{
          setIsSignedIn(true);
          console.log("hello");
          navigation.navigate('start');
    
        })   
        .catch((err)=>{
          console.log(err);
        })
    
      }
    

    return(
        <View>

        <View> 
        <Image style={styles.bg} source={require('./images/bgpic4.jpg')} >

        </Image>
        </View>


        <View style={styles.middleview}>

        <Text style={styles.textstyle}>Welcome Back!</Text>
        
        <View style={styles.input}>
        <Icon name="envelope" size={20} color="#000"/>
        <TextInput style={styles.input1} placeholder='Email' value={email} placeholderTextColor="#17202A" onChangeText={text =>setEmail(text)}/>

        </View>
        <View style={styles.input}> 
        <Icon name="unlock-alt" size={20} color="#000"/>
        <TextInput style={styles.input1} placeholder='Password' value={password} placeholderTextColor="#17202A" secureTextEntry={true} onChangeText={text =>setPassword(text)}/>

        </View>
        <TouchableOpacity  style={styles.buttondesign} onPress={signInUser}>
        <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',color:'#17202A',fontFamily:'cursive'}}>Sign in</Text>
        </TouchableOpacity> 

        <Text style={{color:'#17202A',marginTop:10,fontWeight:'bold',color:'#DC143C'}} 
        onPress={() =>
        navigation.navigate('forgot')}> Forgot Password?</Text>

        <Text style={{color:'#17202A',padding:10}}>Or sign in with</Text>
        <View style={{flexDirection:'row',padding:10}}>
        <Icon.Button name="google" backgroundColor="#DC143C">
        <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
        Google
        </Text>
        </Icon.Button>

        <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
        Facebook
        </Text>
        </Icon.Button>

</View>

            
        
        <Text style={{color:'#17202A',marginTop:10,fontWeight:'bold',color:'#DC143C'}} 
        onPress={() =>
        navigation.navigate('profile')}> Don't have any account? Create one here.</Text>
        

        </View>

        <View style={styles.bottomview}>

        </View>


        </View>

    
        
        
        

    );
    
}

const styles= StyleSheet.create({
    bg:{
        height: 150,
        width: '100%',
        resizeMode: "cover",
        borderBottomRightRadius:100,
        
    },
    textstyle:{
        fontSize:50,
        color:'#17202A',
        fontFamily:'cursive',
        fontWeight:'bold',
        marginTop:20,
        marginBottom:10
      },

    middleview:{
        alignItems:'center',
        height:'65%',
        width:'100%'
    },

    bottomview:{
        height:'20%',
        width:'100%',
        backgroundColor:'#D68910',
        opacity:0.7,
        borderTopLeftRadius:80 ,
    },

    buttondesign:{
    width:'80%',
    height:55,
    backgroundColor:'#D68910',
    opacity:.7,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    color:'#17202A',
    marginTop:10

  
},
input:{
    color:'#17202A',
    width:'80%',
    height:55,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    borderWidth:2,
    borderRadius:30,
    marginTop:10,
    marginBottom:10,
    alignItems:'center',
    borderColor:'#D68910',
    flexDirection:'row',
    paddingLeft:10
},

input1:{
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    padding:10,
    alignItems:'center',
    

    
}


})

export default Login;