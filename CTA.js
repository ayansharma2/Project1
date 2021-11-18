import { LinearGradient } from 'expo-linear-gradient';
import React,{useState,useEffect} from 'react';
import { StyleSheet ,Text,Image ,Platform,View,Card,ImageBackground} from 'react-native';


export function CTA_Footer(){
    return(
        <Text style={[{alignSelf:'stretch',marginLeft: 20,marginRight : 20,backgroundColor:'#6C5DD3',
        borderRadius:12,
        fontFamily:'Inter-Bold',
        fontSize:14,
        lineHeight:21,
        color: 'white',
        textAlign: 'center',
        paddingTop:14,
        paddingBottom:14
    }]}>Confirm</Text>
    )
}


export function Payment_CTA(){
    return(
        <LinearGradient
        colors={['#E5E5E5','white']}
        style={[{paddingTop:40,paddingBottom:30,paddingLeft:20,paddingRight:20,justifyContent:'center',alignItems: 'center'}]}
        >
            <View style={[{flexDirection: 'row',justifyContent:'space-between',alignItems: 'center',
                    backgroundColor: '#6C5DD3',borderRadius:12,paddingLeft:20,paddingRight:24,
                        paddingTop:14,paddingBottom:14,alignSelf:'stretch'
                }]}>
                    <Text style={[{ fontFamily:'Inter-Bold',
                        fontSize:14,
                        lineHeight:21,
                        color: 'white',}]}>₹300</Text>
                    <Text style={[{ fontFamily:'Inter-Bold',
                        fontSize:14,
                        lineHeight:21,
                        color: 'white',}]}>Pay &amp; Confirm</Text>    
                </View>
        </LinearGradient>
    )
}

export function CTASearchLab(){
    return(<View style={[{flexDirection: 'column',width:'100%',paddingTop:14,paddingBottom:32,
        paddingLeft:20,paddingRight:20,justifyContent: 'center',alignItems: 'center'}]}>
            <View style={[{flexDirection:'row',width:'100%',alignItems: 'center',justifyContent: 'center'}]}>
                <Image source={require('./assets/info.png')}/>
                <Text style={[{marginLeft:4}]}> 
                    <Text style={[{fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:18,color:'#0F0B28'}]}>You are eligible for Tax Credits Cashback of</Text>
                    <Text style={[{fontFamily:'Montserrat-SemiBold',fontSize:12,lineHeight:18,color:'#3F8CFF'}]}> ₹10,788*</Text>
                </Text>
            </View>
            <View style={[{marginTop:12,backgroundColor:'#714FFF',borderRadius:12,
                paddingLeft:10,padding:20,flexDirection:'row',justifyContent: 'space-between',alignSelf:'stretch'}]}>
                    <View style={[{flexDirection:'row',alignItems:'center'}]}>
                        <Text style={[{fontFamily:'Inter-Bold',fontSize:16,lineHeight:19,
                    color:'white'}]}>₹ 10,788</Text>
                        <Text style={[{fontFamily:'Inter-SemiBold',fontSize:10,lineHeight:12,
                        color:'white',marginLeft:4}]}>+ GST</Text>
                    </View>

                    <View style={[{flexDirection:'row',alignItems:'center'}]}>
                        <Text style={[{fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,
                            color:'white'}]}> Pay &amp; Confirm </Text>
                        <Image source={require('./assets/arrow_right.png')} style={[{marginLeft:8}]}/>
                    </View>
                </View>
        </View>)
}

export function CartProceedMultiple(){
    return(
        <View style={[{flexDirection:'column',alignItems:'center'}]}>
            <View style={[{flexDirection:'row',width:'100%',alignItems: 'center',justifyContent: 'center'}]}>
                <Image source={require('./assets/info.png')}/>
                <Text style={[{marginLeft:4}]}> 
                    <Text style={[{fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:18,color:'#0F0B28'}]}>You are eligible for Tax Credits Cashback of</Text>
                    <Text style={[{fontFamily:'Montserrat-SemiBold',fontSize:12,lineHeight:18,color:'#3F8CFF'}]}> ₹10,788*</Text>
                </Text>
            </View>
            
            <View style={[{height:1,backgroundColor:'#F0F3F6',marginLeft:24,marginTop:11,marginRight:24,alignSelf:'stretch'}]}/>

            <View style={[{alignItems:'flex-start',alignSelf:'stretch',flexDirection: 'row',justifyContent:'space-between',marginLeft:24,marginTop:12,marginRight:24,marginBottom:36}]}>
                <View style={[{flexDirection:'column'}]}>
                <View style={[{flexDirection:'row',alignItems:'center'}]}>
                        <Text style={[{fontFamily:'Inter-Bold',fontSize:16,lineHeight:19,
                    color:'#0F0B28'}]}>₹ 10,788</Text>
                        <Text style={[{fontFamily:'Inter-SemiBold',fontSize:10,lineHeight:12,
                        color:'#0F0B28',marginLeft:4}]}>+ GST</Text>
                    </View>
                <Text style={[{fontFamily:'Inter-Medium',fontSize:10,lineHeight:15,letterSpacing:0.02,
                    color:'#767787',marginTop:4}]}>2 Items</Text>
                </View>

                <View style={[{backgroundColor:'#714FFF',borderRadius:12,paddingLeft:24,paddingTop:13,paddingRight:19,paddingBottom:14 ,flexDirection:'row',
                    justifyContent: 'center',alignItems: 'center'}]}>
                        <Text style={[{fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,color:'white'}]}>Pay &amp; Confirm</Text>
                        <Image source={require('./assets/arrow_right.png')} style={[{marginLeft:8}]}/>
                    </View>

            </View>
        </View>
    )
}