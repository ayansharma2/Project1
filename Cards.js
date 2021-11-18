import React,{useState,useEffect} from 'react';
import { StyleSheet,ActivityIndicator  ,Text,Image ,Platform,View,Card,ImageBackground} from 'react-native';

export function LabOrderPlaced(){
    return (
        <View style={[{flexDirection:'column',alignSelf:'stretch',margin:20,borderRadius:12,backgroundColor:'white'}]}>
            <Text style={[{paddingVertical:3,paddingHorizontal:12,alignSelf:'flex-start',marginLeft:15,backgroundColor:'#F5F4FF',fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:18,letterSpacing:0.02,color:'#002685',borderBottomLeftRadius:8,borderBottomRightRadius:8}]}>Pathology</Text>
            <View style={[{marginLeft:16,marginTop:12,alignItems: 'center',flexDirection:'row'}]}>
                <Image source={require('./assets/check.png')} style={[{height:12,width:12}]}/>
                <Text style={[{marginLeft:4,fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:18,letterSpacing:0.02,color:'#714FFF'}]}>Order Placed</Text>
            </View>
            <Text style={[{marginTop:4,marginLeft:16}]}>
                <Text style={[{fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:20,letterSpacing:0.02,color:'#0F0B28'}]}> CBC, Bilirubin, Liver funtion and </Text>
                <Text style={[{fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:20,letterSpacing:0.02,color:'#3F8CFF'}]}> +4more </Text>
            </Text>
            <View style={[{marginLeft:16,marginTop:8,flexDirection:'row',alignItems: 'center'}]}>
                <Image source={require('./assets/stethoscope.png')}/>
                <Text style={[{fontFamily:'Inter-Medium',fontSize:12,lineHeight:18,color:'#585969',marginLeft:4}]}>Dr. John Doe</Text>
            </View>
            <View style={[{marginLeft:16,marginTop:8,flexDirection:'row',alignitems: 'center'}]}>
                <Image source={require('./assets/profile_blue.png')} style={[{alignSelf:'center',height:12,width:12}]}/>
                <Text style={[{fontFamily:'Inter-Medium',fontSize:12,lineHeight:18,color:'#585969',marginLeft:4}]}>Aditya Singh</Text>
            </View>
            <View style={[{marginBottom:16.5,marginRight:16,marginLeft:16,marginTop:24.5,flexDirection:'row',alignitems: 'center',justifyContent:'space-between',alignSelf:'stretch'}]}>
                <Text style={[{fontFamily:'Inter-Regular',fontSize:10,lineHeight:15,letterSpacing:0.02,color:'#585969'}]}> 09:54am, 26th, Nov </Text>
                <View style={[{flexDirection:'row',alignItems:'center'}]}>
                    <Text style={[{fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,color:'#714FFF'}]}>
                        View Details
                    </Text>
                    <Image source={require('./assets/arrow_right_blue.png')} style={[{marginLeft:8}]}/>
                </View>
            </View>
        </View>
    )
}

export function MedicineTranscribed(){
    return(
        <View style={[{flexDirection:'column',borderRadius:12,margin:20,backgroundColor:'white'}]}>
            <View style={[{flexDirection:'row',justifyContent: 'space-between',adjustItems:'center',marginTop:13,marginLeft:16,marginRight:17}]}>
                <View style={[{flexDirection:'row',alignItems:'center'}]}>
                    <Image source={require('./assets/checked_blue.png')} />
                    <Text style={[{fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:18,letterSpacing:0.02,color:'#3F8CFF',marginLeft:6}]}>Transcribed</Text>
                </View>
                <Image source={require('./assets/arrow_forward.png')}/>
            </View>
            <Text style={[{fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,color:'#0F0B28',marginLeft:16,marginTop:4}]}>Medicines ready for order</Text>
            <View style={[{marginLeft:16,marginTop:5,flexDirection:'row',alignItems: 'center'}]}>
                <Image source={require('./assets/stethoscope.png')}/>
                <Text style={[{fontFamily:'Inter-Medium',fontSize:12,lineHeight:18,color:'#585969',marginLeft:4}]}>Dr. John Doe</Text>
            </View>
            <View style={[{marginLeft:16,marginTop:2,flexDirection:'row',alignitems: 'center'}]}>
                <Image source={require('./assets/profile_blue.png')} style={[{alignSelf:'center',height:12,width:12}]}/>
                <Text style={[{fontFamily:'Inter-Medium',fontSize:12,lineHeight:18,color:'#585969',marginLeft:4}]}>Aditya Singh</Text>
            </View>
            <Text style={[{marginLeft:16,marginTop:24,fontFamily:'Inter-Regular',fontSize:10,lineHeight:15,letterSpacing:0.02,color:'#585969'}]}> 09:54am, 26th, Nov </Text>
            <View style={[{borderRadius:12,alignSelf:'stretch',paddingTop:9,paddingBottom:11,marginHorizontal:16,marginTop:8,marginBottom:16,backgroundColor:'#714FFF',justifyContent: 'center',flexDirection:'row'}]}>
                <Text style={[{fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,color:'white'}]}>View &amp; Confirm</Text>
            </View>
        </View>
    )
}


export function MedicineTranscribing(){
    return(
        <View style={[{flexDirection:'column',alignSelf:'stretch',backgroundColor:'white',borderRadius:12,margin:20}]}>
            <View style={[{flexDirection:'row',justifyContent: 'space-between',alignItems:'center',marginLeft:16,marginTop:14,marginRight:12}]}>
                <Text style={[{fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,color:'#0F0B28'}]}>
                    Prescription Uoloaded
                </Text>
                <Image source={require('./assets/arrow_forward.png')}/>
            </View>
            <View style={[{marginLeft:16,marginTop:5,flexDirection:'row',alignSelf:'stretch'}]}>
                <ActivityIndicator size='small' color="#3F8CFF"/>
                <Text style={[{fontFamily:'Inter-Regular',fontSize:12,lineHeight:18,letterSpacing:0.04,color:'#3F8CFF',marginLeft:8}]}>Transcribing Prescription</Text>
            </View>
            <Text style={[{marginLeft:16,marginTop:4,fontFamily:'Inter-Regular',fontSize:12,lineHeight:18,letterSpacing:0.04,color:'#A5A6BB'}]}>The transcription will take 12hr-24hrs</Text>
            <Text style={[{marginLeft:16,marginTop:24,marginBottom:12,fontFamily:'Inter-Regular',fontSize:10,lineHeight:15,letterSpacing:0.02,color:'#585969'}]}> 09:54am, 26th, Nov </Text>
        </View>
    )
}


export function TabIndicator(){
    const items = ['Home Delivery','Store Pickup']
    return(
        <View style={[{flexDirection: 'row',justifyContent: 'center',alignItem:'center',alignSelf: 'stretch',marginLeft:25}]}>
           {
               items.forEach(element => {
                 <Text style={[{color: 'black',fontSize:25}]}>{element}</Text>
                 console.log(element)  
               })
           }
        </View>
    )
}