import React,{useState,useEffect} from 'react';
import { StyleSheet ,Text,Image ,Platform,View,Card,TouchableWithoutFeedback} from 'react-native';

export default function MedicineDeliveryAppBar(){
    return (
        <View style={styles.container} >
        <View style={styles.nestedColumn}>
            <View style={styles.itemContainer}>
            <Image source={require('./assets/back_arrow.png')} style={styles.imageSize}/>
            <Text style={styles.headingText}>Medicine Delivery</Text>
            </View>
            <View style={styles.nestedRow}>
              <Image source={require('./assets/location.png')}/>
              <Text style={styles.titleText}>Okhla Phase 3, New Delhi</Text>
              <Image source={require('./assets/arrow_down.png')}/>
            </View>
        </View>
    </View>
      )
}

export function NavigationBarNoBack(){
    return(
        <Text style={styles.NavigationBarNotBackHeadingText}>Order Summmary</Text>
    )
}

export function NavigationBarHomeDashboard(){
    return(
        <View style={[styles.row,{marginTop:58},{justifyContent: 'space-between',alignItems : 'center'}]}>
            <Image source={require('./assets/visit.png')} style = {{marginLeft : 20}}/>
            <View style={styles.NestedRow}>
                <Image source={require('./assets/wallet.png')}/>
                <View style={[{height : 9,marginLeft : 5.5,marginRight : 6.5,width : 1 , backgroundColor : '#F3F3F3'}]}/>
                <Image source={require('./assets/fitcoin.png')} style = {{marginRight : 4}}/>
                <Text style = {styles.HomeDashboardTitleText}>0</Text>
            </View>
        </View>
    )
}


export function NavigationBarOnlineChat(){
    const [state,setState]  = useState(0)
    return(
      <View style = {[{flexDirection: 'column',marginTop: 62}]}>
      <View style={[{flexDirection:'row',width: '100%',justifyContent:'space-between',alignItems: 'center'}]}>
        <View style={[{flexDirection:'row',alignItems: 'center'}]}>
            <Image source={require('./assets/back_arrow.png')} style={[{marginLeft:16}]}/>
            <Image source={require('./assets/image.png')} style={[{marginLeft:8,borderRadius:12}]}/>
            <View style={[{marginLeft:8,flexDirection:'column'}]}>
              <Text style={[{
                letterSpacing:0.02,
                fontFamily:'Inter-SemiBold',
                fontSize:14,
                lineHeight:20,
                color:'#0F0B28'
              }]}> Dr. Amit Mind </Text>

              <Text style={[{fontFamily:'Inter-Regular',fontSize:12,lineHeight:18,letterSpacing:0.04,
            color:'#767787'}]}> General Physician </Text>

            </View>
        </View>

        <View style = {[{flexDirection: 'row' , alignItems: 'center',marginEnd:24}]}>
          <Image source={require('./assets/Call.png')} style={[{height : 24,width:24}]}/>
          <View style = {[{height : 10.5,width:1,backgroundColor: '#F0F3F6',marginLeft: 16,marginRight:16}]}/>
          <Image source={require('./assets/Video.png')} style={[{height : 24,width:24}]}/>
          </View>        
      </View>
        <View style={[{width:'100%',marginTop:28,flexDirection:'row'}]}>
          <Text style={[{textAlign: 'center',
          flex:1,
          color : (state==0)?'#714FFF':'#767787',
          fontSize:14,
          lineHeight:(state==0)?20:21,
          letterSpacing:(state==1)?0.02:0.0,
          fontFamily:(state==0)?'Inter-SemiBold':'Inter-Medium',
          }]} onPress={()=>setState(0)}> Appointment</Text>

          <Text style={[{textAlign: 'center',
          flex:1,
          color : (state==1)?'#714FFF':'#767787',
          fontSize:14,
          lineHeight:(state==1)?20:21,
          letterSpacing:(state==1)?0.02:0.0,
          fontFamily:(state==1)?'Inter-SemiBold':'Inter-Medium',
          }]} onPress={()=>setState(1)}> Summary</Text>
        </View>
      </View>
    )
}

export function FilterPatient(){
  return(
    <View style={[{marginTop:54,marginStart:16,marginEnd:20,marginBottom:16,flexDirection:'row',justifyContent:'space-between',alignItems: 'center'}]}>
        <View style={[{flexDirection:'row',alignItems: 'center'}]}>
          <Image source={require('./assets/back_arrow.png')} style={[{width:32,height:32}]}/>
          <Text style={[{
            fontFamily:'Inter-SemiBold',
            fontSize:16,
            lineHeight:24,
            color: '#0F0B28',
            marginLeft:4
          }]}> Offline Consultation</Text>
        </View>

        <View style={[{flexDirection:'row',alignItems: 'center',
          paddingLeft:12,paddingRight:12,paddingBottom:4,paddingTop:4,backgroundColor:'#F0F3F6',borderRadius:12}]}>
            <Image source={require('./assets/profile.png')}/>
            <Text style={[{
              fontFamily:'Inter-SemiBold',
              fontSize:14,
              lineHeight:20,
              letterSpacing:0.02,
              color:'#000000',
              marginLeft:4
            }]}>Self</Text>
            <Image source={require('./assets/arrow_down.png')} style={[{marginLeft:6.45}]}/>
        </View>  

    </View>
  )
}

const styles = StyleSheet.create({
    HomeDashboardTitleText:{
        fontFamily:'Inter-SemiBold',
        fontSize:16,
        lineHeight:24,
        color:'#0F0B28'
    },
    NestedRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor:'#F3F3F3',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft:11,
        paddingRight:6.22,
        paddingTop:4,
        paddingBottom:4,
        marginRight : 20,
        alignItems:'center',
    },
    NavigationBarNotBackHeadingText:{
             fontFamily: 'Inter-SemiBold',
            fontSize:16,
            lineHeight:24,
            color:'#0F0B28',
            marginLeft:20,
            marginTop:28
    },
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



export function NavigationBarOnlineChat1(){
    const [state,setState]  = useState(0)
    return(
      <View style = {[{flexDirection: 'column',backgroundColor: 'pink',paddingTop: 62}]}>
      <View style={[{flexDirection:'row',width: '100%',justifyContent:'space-between',alignItems: 'center'}]}>
        <View style={[{flexDirection:'row',alignItems: 'center'}]}>
            <Image source={require("./assets/back_arrow.png")} style={[{marginLeft:16,height:32,width:32}]}/>
            <Image source={require('./assets/image.png')} style={[{marginLeft:8,borderRadius:12,height:32,width:32}]}/>
            <View style={[{marginLeft:8,flexDirection:'column'}]}>
              <Text style={[{
                letterSpacing:0.02,
                fontFamily:'Inter-SemiBold',
                fontSize:14,
                lineHeight:20,
                color:'#0F0B28'
              }]}> Dr. Amit Mind </Text>

              <Text style={[{fontFamily:'Inter-Regular',fontSize:12,lineHeight:18,letterSpacing:0.04,
            color:'#767787'}]}> General Physician </Text>

            </View>
        </View>

        <View style = {[{flexDirection: 'row' , alignItems: 'center',marginEnd:24}]}>
          <Image source={require('./assets/Call.png')} style={[{height : 24,width:24}]}/>
          <View style = {[{height : 10.5,width:1,backgroundColor: '#F0F3F6',marginLeft: 16,marginRight:16}]}/>
          <Image source={require('./assets/Video.png')} style={[{height : 24,width:24}]}/>
          </View>        
      </View>
        <View style={[{width:'100%',marginTop:28,flexDirection:'row'}]}>
          <Text style={[{textAlign: 'center',
          flex:1,
          color : (state==0)?'#714FFF':'#767787',
          fontSize:(state==0)?17:14,
          lineHeight:(state==0)?20:21,
          letterSpacing:(state==1)?0.02:0.0,
          fontFamily:(state==0)?'Inter-SemiBold':'Inter-Medium',
          }]} onPress={()=>setState(0)}> Appointment</Text>

          <Text style={[{textAlign: 'center',
          flex:1,
          color : (state==1)?'#714FFF':'#767787',
          fontSize:(state==1)?17:14,
          lineHeight:(state==1)?20:21,
          letterSpacing:(state==1)?0.02:0.0,
          fontFamily:(state==1)?'Inter-SemiBold':'Inter-Medium',
          }]} onPress={()=>setState(1)}> Summary</Text>
        </View>
      </View>
    )
}