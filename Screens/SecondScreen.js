import React,{useState,useEffect} from 'react';
import { StyleSheet,TouchableOpacity ,Text,View,Image,} from 'react-native';
export default function SecondScreen({navigation}){
    const item = navigation.state.params;
    
    return(
        <View style={styles.container}>
            <View style={[{backgroundColor: 'white',padding:20,justifyContent:'flex-start',alignSelf:'stretch',flexDirection:'row',alignItems:'center'}]}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../assets/back_arrow.png')} style={[{height:32,width:32}]}/>
                </TouchableOpacity>  
                <View style={[{left:0,right:0,justifyContent: 'center',alignItems: 'center',position:'absolute'}]}>
                    <Text style={[{fontFamily: 'fantasy',fontSize:20,color:'#0F0B28'}]}>
                        Second Screen
                    </Text>
            </View>
            </View>
            <View style={[{backgroundColor:'purple',margin:20,borderRadius:20,padding:20,justifyContent:'center',width:'50%',alignItems: 'center'}]}>
                <Text style={[{color:'white',fontFamily:'Times New Roman',fontSize:'16'}]}>Button 1</Text>
            </View>
            </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'dodgerblue',
        alignItems: 'center'
      },
      headerText: {
          fontSize: 22,
          fontWeight: 'bold',
          color: 'blue',
          margin: 20
      },
      bodyText: {
        fontSize: 18,
        fontWeight: 'normal',
        margin: 30,
        color:'white'
      }

})