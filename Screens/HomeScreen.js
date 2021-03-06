import React,{useState,useEffect} from 'react';
import { StyleSheet,Button ,Text,Image ,Platform,View,Card,TouchableWithoutFeedback} from 'react-native';
import MedicineDeliveryAppBar,{NavigationBarNoBack,FilterPatient, NavigationBarOnlineChat1} from '../appbar';
import { AddNewAddress } from '../BottomModals';
import { Group13339 } from '../Cards';
import { ListCardOnlineDoctorCart } from '../CliniConsultations';
import {CartProceedMultiple} from '../CTA';
import { PopupAlertAction } from '../Dialog';
export default function HomeScreen({navigation}) {

  const [visibility,visibilityCallback] = useState(true)
  return (
    <View style={[{flexDirection:'column',height:'100%'}]}>
      <AddNewAddress/>
    </View>
  )
}




const styles = StyleSheet.create({
  
  bodyText:{
    fontFamily:"Inter-Medium",
    fontSize:12,
    lineHeight:18,
    color:"#0F0B28",
    marginStart: 9,
    marginEnd: 9
  },
  nestedRow:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F7F9FB',
    paddingLeft:16,
    paddingTop: 8,
    marginTop:8,
    marginStart:20,
    paddingRight: 16,
    paddingBottom: 8,
    borderRadius : 12

  },
  nestedColumn: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  headingText: {
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    alignSelf:'center',
  },

  itemContainer : {
    flexDirection:'row',
    backgroundColor:'white',
    alignItems: 'center',
    marginTop:56,
    marginStart:16,
    justifyContent:'flex-start'

  },
  container: {
    flexDirection:'column',
    backgroundColor: 'white',
    flex:1,
    alignItems: 'flex-start'
  },
  setFontSize: {
    fontSize:20,
    fontWeight: 'bold'
  },
  setFontColorBlack: {
    color: 'black'
  },
  setFontColorWhite: {
    color: 'white'
  },
  column: {
    width: '100%',
    flexDirection:'column'
},
row:{
    width: '100%',
    flexDirection: 'row',
},
titleText: {
    fontFamily:'Inter-Medium',
    fontSize:12,
    fontWeight:"600",
    lineHeight:24,
    color: '#0F0B28',
    marginStart: 9,
    marginEnd: 9
},
imageSize:{
  height: 32,
  width: 32
}

});