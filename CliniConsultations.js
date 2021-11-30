import React,{useState,useEffect} from 'react';
import { StyleSheet,ActivityIndicator  ,Text,Image ,Platform,View,Card,ImageBackground} from 'react-native';

export function ListCardDoctor1(){
    return(
        <View style={[{borderRadius:12,margin:20,backgroundColor:'black',flexDirection:'column'}]}>
            <Text style={[{alignSelf:'flex-start',paddingLeft:12,paddingRight:8,paddingVertical:1,marginLeft:20,borderBottomLeftRadius:8,borderBottomRightRadius:8,backgroundColor:'#1EB865',fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:18,letterSpacing:0.02,color:'white'}]}>Cashless Available</Text>
            <View style={[{position: 'absolute', top: 12, right: 12, justifyContent: 'center', alignItems: 'center'}]}>
                <Image source={require('./assets/arrow_forward.png')} />
            </View>
            <View style={[{flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:20}]}>
                <Image source={require('./assets/image.jpg')} style={[{height:56,width:56,borderRadius:12}]}/>
                <View style={[{flexDirection:'column',marginLeft:12}]}>
                    <Text style={[{fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,color:'#0F0B28'}]}>Dr. Amit Mind</Text>
                    <Text style={[{fontFamily:'Inter-Regular',fontSize:12,lineHeight:18,marginTop:3,letterSpacing:0.04,color:'#767787'}]}>General Physician • 18 years Exp</Text>
                </View>
            </View>
            <View style={[{borderRadius:12,alignSelf:'stretch',paddingVertical:12,paddingLeft:12,paddingRight:16,marginHorizontal:20,marginTop:20,flexDirection:'row',justifyContent:'space-between',backgroundColor:'#F5F4FF'}]}>
                <View style={[{flexDirection:'row'}]}>
                    <Image source={require('./assets/hospital.png')}/>
                    <Text style={[{fontFamily:'Inter-Medium',fontSize:10,lineHeight:15,letterSpacing:0.02,color:'#0F0B28',marginLeft:4}]}>Amatrra Skin &amp; Hair Clinic</Text>
                </View> 
                <Text style={[{fontFamily:'Inter-Medium',fontSize:10,lineHeight:15,letterSpacing:0.02,color:'#0F0B28'}]}>2 km</Text>
            </View>
            <View style={[{backgroundColor:'#F4F6F9',height:1,alignSelf:'stretch',marginHorizontal:20,marginTop:12}]}/>
            <View style={[{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:6,marginHorizontal:20}]}>
                <View style={[{flexDirection:'row',alignItems: 'center'}]}>
                    <Text style={[{fontFamily:'Inter-Medium',fontSize:12,lineHeight:18,color:'#0F0B28'}]}> Paid by</Text>
                    <Image source={require('./assets/visit.png')} style={[{alignSelf:'center',height:12,width:36.65,marginLeft:6}]}/>
                </View>
                <View style={[{flexDirection:'row',alignItems: 'center'}]}>
                    <Text style={[{fontFamily:'Inter-Medium',fontSize:12,lineHeight:18,color:'#0F0B28'}]}>You Pay</Text>    
                    <Text style={[{fontFamily:'Inter-Medium',fontSize:10,lineHeight:12,marginLeft:12,letterSpacing:0.02,color:'#A5A6BB',textDecorationLine: 'line-through'}]}>₹ 700</Text>
                    <Text style={[{marginLeft:8,fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:18,letterSpacing:0.02,color:'#0F0B28'}]}>₹ 0</Text>    
                </View>
            </View>
            <View style={[{height:1,alignSelf:'stretch',backgroundColor:'#F4F6F9',marginTop:6,marginHorizontal:20}]}/>
            <View style={[{flexDirection:'row',backgroundColor:'#6C5DD3',alignSelf:'stretch',borderRadius:12,justifyContent:'center',paddingTop:9,paddingBottom:11,marginHorizontal:20,marginTop:23,marginBottom:20}]}>
                <Text style={[{ fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,color:'white' }]}>Book Appointment</Text>
            </View>
        </View>
    )
}


export function ListCardOnlineDoctorCart(){
    return(
        <View style={[{flexDirection:'row',backgroundColor:'white',borderRadius:12,margin:20,alignSelf:'stretch',justifyContent:'space-between'}]}>
            <View style={[{flexDirection:'row',marginLeft:20,marginTop:20,marginBottom:14}]}>
                <Image source={require('./assets/image.jpg')} style={[{borderRadius:12,height:56,width:56}]}/>
                <View style={[{flexDirection:'column',marginLeft:12}]}>
                    <Text style={[{alignSelf:'flex-start',borderRadius:20,backgroundColor:'#1EB865',fontFamily:'Inter-Medium',fontSize:10,lineHeight:15,letterSpacing:0.02,color:'white',paddingHorizontal:8,paddingVertical:1}]}>Available in 30mins</Text>
                    <Text style={[{fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,color:'#0F0B28',marginTop:4}]}>Dr. Amit Mind</Text>
                    <Text style={[{fontFamily:'Inter-Regular',fontSize:12,lineHeight:18,letterSpacing:0.02,color:'#767787',marginTop:3}]}>General Physician • 18 years Exp</Text>
                </View>
            </View>
            <Image source={require('./assets/arrow_forward.png')} style={[{marginTop:16,marginRight:16}]}/>
        </View>
    )
}