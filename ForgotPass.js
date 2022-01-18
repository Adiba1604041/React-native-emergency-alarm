import React,{useState, Component}  from 'react';
import { Text,ImageBackground,StyleSheet,TouchableOpacity,View,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {authentication} from './firebase/firebase-config';
import {sendPasswordResetEmail } from "firebase/auth";

function ForgotPass({navigation}){
    const[email,setEmail] = useState('');

    const sendMail = ()=>{
        sendPasswordResetEmail(authentication, email)
            .then(() => {
                navigation.navigate('start');
            })
            .catch((err) => {
                console.log(err);
            });

    
      }
    

    return(
        <View style={styles.bg}>

        <ImageBackground source={require('./images/bgpic4.jpg')} style={{height: '100%', weight: '50%'}} >


        <View style={styles.middleview}>
        <Text style={styles.textstyle}>Reset Password</Text>
        
        
        <View style={styles.input}>
        <Icon name="envelope" size={20} color="#000"/>
        <TextInput style={styles.input1} placeholder='Enter your email' value={email} placeholderTextColor="#17202A" onChangeText={text =>setEmail(text)}/>

        </View>
       
        <TouchableOpacity  style={styles.buttondesign} onPress={sendMail}>
        <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',color:'#17202A',fontFamily:'cursive'}}>Sign up</Text>
        </TouchableOpacity> 


        </View>
        </ImageBackground>

        
        </View>
        
        
        
        

    );
    
}
const styles= StyleSheet.create({
    bg:{
    },
    textstyle:{
        fontSize:45,
        color:'#17202A',
        fontFamily:'cursive',
        fontWeight:'bold',
        marginTop:20,
        marginBottom:10
      },

    middleview:{
        backgroundColor:'#fff',
        alignItems:'center',
        marginTop:200,
        marginLeft:15,
        marginRight:15
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
    marginTop:10,
    marginBottom:30

  
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



export default ForgotPass;