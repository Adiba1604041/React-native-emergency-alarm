import * as React from 'react';
import { ImageBackground,StyleSheet,TouchableOpacity, Image,View,SafeAreaView} from 'react-native';
import { Avatar,Title, Caption,Text,TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

function Profile({navigation})
{
    return(
        <SafeAreaView>
        <View style={{width:'90%',  backgroundColor:'#F5B041',borderBottomRightRadius:100}}>
        
        <View style={{flexDirection:'row',padding:20,marginTop:20}}>

        <View style={{marginRight:20}}>
            <Avatar.Image source={require('./images/bgpic3.jpeg')} />
        </View>

        <View>
        <Title>Adiba Ibnat Hossain</Title>
        <Caption>adiba_ibnat41</Caption>
        </View>

        </View>

        <View>
        <View style={{flexDirection:'row',marginBottom:10,marginLeft:25}}>
        <Icon style={{marginRight:10}} name="home" size={20} color="#000"/>
        <Text>Nandankanan,Chittagong</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:10,marginLeft:25}}>
        <Icon style={{marginRight:10}} name="phone" size={20} color="#000"/>
        <Text>+8801978889571</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:10,marginLeft:25}}>
        <Icon style={{marginRight:10}} name="envelope" size={15} color="#000"/>
        <Text>hossainadiba123@gmail.com</Text>
        </View>

        <Text style={{color:'#17202A',marginTop:10,fontSize:15,textDecorationLine:'underline',fontWeight:('bold'),marginLeft:25,marginBottom:20}} 
        onPress={() =>
        navigation.navigate('start')}>Edit Profile</Text>
        </View>
        </View>

        <View style={{marginTop:20,backgroundColor:'#FBFCFC'}}>

        
        <View style={{flexDirection:'row',justifyContent:'space-around',padding:15}}> 

        <View style={styles.mainbox}> 
        <Icon name="heart" size={20} color="#DC143C"/>
        <Text style={styles.textstyle}>Favourites</Text>
        </View>

        <View style={styles.mainbox}> 
        <Icon name="bell" size={20} color="#27AE60"/>
        <Text style={styles.textstyle}>Meal Alarm</Text>
        </View>
        </View>

        
        <View style={{flexDirection:'row',justifyContent:'space-around',padding:15}}> 
        <View style={styles.mainbox}> 
        <Icon name="bell" size={20} color="#D35400"/>
        <Text style={styles.textstyle}>Medicine{'\n'} Alarm</Text>
        </View>

        <View style={styles.mainbox}> 
        <Icon name="user-md" size={25} color="#0000FF"/>
        <Text style={styles.textstyle}>Doctor Appointment Alarm</Text>
        </View>
        </View>
        </View>
        
        </SafeAreaView>

    );
}

const styles= StyleSheet.create({
    mainbox:{
        height:150,
        width:'45%',
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:30,
        elevation:20,
        alignItems:'center',
        padding:10,
        marginTop:10
    },
    textstyle:{
        textAlign:'center',
        fontSize:15,
        color:'#000',
        padding:10,
        fontWeight:'bold'
    }
})

export default Profile;