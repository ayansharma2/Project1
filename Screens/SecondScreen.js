import React,{useState,useEffect} from 'react';
import { StyleSheet ,Text,View} from 'react-native';

export default function SecondScreen({navigation}){
    const item = navigation.state.params;
    
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>
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
        margin: 30
      }

})