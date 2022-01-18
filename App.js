import * as React from 'react';
import { Text,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signinup from './Signinup';
import Login from './Login';
import Profile from './Profile';
import ForgotPass from './ForgotPass';

function StartScreen({navigation}){
  return(
    <ImageBackground source={require('./images/bgpic3.jpeg')} style={{height: '100%', weight: '50%'}} >
    <Text style={styles.textstyle}>Emergency Alarm for Elderly People</Text>
    <TouchableOpacity style={styles.button} onPress={() =>
        navigation.navigate('sinup')
      }>
    <Text style={styles.titles}>Get Started</Text>
    </TouchableOpacity>
    </ImageBackground>
  );
}

const styles=StyleSheet.create({
textstyle:{
  fontSize:50,
  color:'#FDFEFE',
  fontFamily:'cursive',
  fontWeight:'bold',
  padding:20,
  marginTop:20,
  marginBottom:20
},
titles:{
  color:'#FDFEFE',
  fontSize: 30,
  fontFamily:'cursive',
  fontWeight:'bold',
  color: '#FDFEFE'
},
button:{

  width:'80%',
  height:55,
  backgroundColor:'#BA4A00',
  opacity:0.7,
  padding: 10,
  borderRadius:30,
  alignItems:'center',
  justifyContent:'center',
  marginBottom:10,
  marginLeft:45
},
barstyle:{
  visible:'true'
}
})
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="start" component={StartScreen} />
        <Stack.Screen name="sinup" component={Signinup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="forgot" component={ForgotPass} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
