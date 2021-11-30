import React,{useState,useEffect} from 'react';
import { StyleSheet ,Text,Image ,Platform,View,Card,TouchableWithoutFeedback, TextInput} from 'react-native';

export function ChoosePatient(){
    const [index,setIndex] = useState(0)
    return(
        <View style={[{flexDirection:'column',alignSelf:'stretch',backgroundColor:'white',borderRadius:12,margin:10}]}>
            <View style={[{marginStart:20,marginTop:20,flexDirection:'row',justifyContent: 'space-between',alignItems: 'center'}]}>
                <View style={[{flexDirection:'row',alignItems: 'center'}]}>
                    <Image source={require('./assets/user.png')}/>
                    <Text style={[{marginLeft:8,fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:(19.6),letterSpacing:0.02,color:'#0F0B28'}]}>Choose Patient</Text>
                </View>
                <Image source={require('./assets/cross.png')} style={[{marginRight:24}]}/>
            </View>
            <View style={[{marginTop:20,alignSelf:'stretch',backgroundColor:'#F0F3F6',height:1}]}/>

            <TouchableWithoutFeedback onPress={()=>{setIndex(0)}}>
            <View style={[{flexDirection:'row',justifyContent: 'space-between',alignSelf:'stretch',marginHorizontal:20,marginTop:20,borderRadius:12,backgroundColor:'#F0F3F6',borderWidth:1,borderColor:(index == 0 ? '#714FFF' : '#F0F3F6'),paddingVertical:24,paddingLeft:20,paddingRight:20}]} onPress={()=>{setIndex(0)}}>
                <View style={[{flexDirection:'row',alignItems:'center'}]}>
                    <Image source={(index == 0 ? require('./assets/selected_checkbox.png') :require('./assets/checkbox.png'))}/>
                    <View style={[{marginLeft:8,flexDirection:'column'}]}>
                    <Text style={[{fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:18,letterSpacing:0.02,color:'#0F0B28'}]}>Aditya Singh</Text>
                    <Text style={[{fontFamily:'Inter-Regular',fontSize:12,lineHeight:18,letterSpacing:0.04,color:'#585969',marginTop:4}]}>Male, 9876543210</Text>
                    </View>
                </View>
                <View style={[{flexDirection:'row',alignItems:'center',}]}>
                <Image source={require('./assets/edit.png')} style={[{height:32,width:32}]}/>
                <Image source={require('./assets/delete.png')} style={[{height:32,width:32,marginLeft:16}]}/>
                </View>
            </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>{setIndex(1)}}>
            <View style={[{flexDirection:'row',justifyContent: 'space-between',alignSelf:'stretch',marginHorizontal:20,marginTop:20,borderRadius:12,backgroundColor:'#F0F3F6',borderWidth:1,borderColor:(index == 1 ? '#714FFF' : '#F0F3F6'),paddingVertical:24,paddingLeft:20,paddingRight:20}]} >
                <View style={[{flexDirection:'row',alignItems:'center'}]}>
                    <Image source={(index == 1 ? require('./assets/selected_checkbox.png') :require('./assets/checkbox.png'))}/>
                    <View style={[{marginLeft:8,flexDirection:'column'}]}>
                    <Text style={[{fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:18,letterSpacing:0.02,color:'#0F0B28'}]}>Aditya Singh</Text>
                    <Text style={[{fontFamily:'Inter-Regular',fontSize:12,lineHeight:18,letterSpacing:0.04,color:'#585969',marginTop:4}]}>Male, 9876543210</Text>
                    </View>
                </View>
                <View style={[{flexDirection:'row',alignItems:'center',}]}>
                <Image source={require('./assets/edit.png')} style={[{height:32,width:32}]}/>
                <Image source={require('./assets/delete.png')} style={[{height:32,width:32,marginLeft:16}]}/>
                </View>
            </View>
            </TouchableWithoutFeedback>
            <View style={[{marginTop:32,marginBottom:48,alignSelf:'stretch',justifyContent: 'center',alignItems: 'center',flexDirection:'row'}]}>
            <Image source={require('./assets/plus.png')} />
            <Text style={[{fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:19.6,letterSpacing:0.02,color:'#0F0B28',marginLeft:8}]}>Add New Patient</Text>
            </View>
        </View>
    )
}



export function AddNewAddress(){
    const [address, onAddressChange] = React.useState("");
    const [pinCode, onPinCodeChange] = React.useState("");
    const [locality, onLocalityChnage] = React.useState("");
    const [addressFocused, onAddressFocuseChanged] = useState(false)
    const [pinCodeFocused, onPinCodeFocuseChanged] = useState(false)
    const [localityFocused, onLocalityFocusChanged] = useState(false)
    const [index,setIndex] = useState(0)
    return(
        <View style={[{flexDirection:'column',alignSelf:'stretch',backgroundColor:'white',borderRadius:12,margin:10}]}>
            <View style={[{flexDirection:'row',marginLeft:20,marginTop:20,justifyContent: 'space-between',adjustitems:'center'}]}>
                <View style={[{flexDirection:'row'}]}>
                    <Image source={require('./assets/home.png')} style={[{height:20,width:20}]}/>
                    <Text style={[{fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:19.6,letterSpacing:0.02,color:'#0F0B28',marginStart:8}]}>Add New Address</Text>
                </View>
                <Image source={require('./assets/cross.png')} style={[{marginRight:24}]}/>
            </View>
            <View style={[{marginTop:19,backgroundColor:'#F0F3F6',height:1,alignSelf:'stretch'}]}/>
            <Text style={[{fontSize:12,lineHeight:18,fontFamily:'Inter-Medium',color:'#0F0B28',marginLeft:20,marginTop:20}]}> Address </Text>
            <TextInput value={address} onChange={onAddressChange} style={[{ borderColor : (addressFocused ? '#3F8CFF' : '#E3E3E3'),borderWidth:1.5 ,borderRadius:12,alignSelf:'stretch',marginHorizontal:20,marginTop:8,paddingTop:10,paddingBottom:9,paddingHorizontal:16 }]} onFocus={()=>{onAddressFocuseChanged(true)}} onBlur={()=>{onAddressFocuseChanged(false)}} placeholder="ex: C-24, okhla phase 3, new delhi"/>
            <Text style={[{fontSize:12,lineHeight:18,fontFamily:'Inter-Medium',color:'#0F0B28',marginLeft:20,marginTop:24}]}> PinCode </Text>
            <TextInput value={pinCode} onChange={onPinCodeChange} style={[{ borderColor : (pinCodeFocused ? '#3F8CFF' : '#E3E3E3'),borderWidth:1.5 ,borderRadius:12,alignSelf:'stretch',marginHorizontal:20,marginTop:8,paddingTop:10,paddingBottom:9,paddingHorizontal:16 }]} onFocus={()=>{onPinCodeFocuseChanged(true)}} onBlur={()=>{onPinCodeFocuseChanged(false)}} placeholder="141001" keyboardType="numeric"/>
            <Text style={[{fontSize:12,lineHeight:18,fontFamily:'Inter-Medium',color:'#0F0B28',marginLeft:20,marginTop:24}]}> Locality </Text>
            <TextInput value={locality} onChange={onLocalityChnage} style={[{ borderColor : (localityFocused ? '#3F8CFF' : '#E3E3E3'),borderWidth:1.5 ,borderRadius:12,alignSelf:'stretch',marginHorizontal:20,marginTop:8,paddingTop:10,paddingBottom:9,paddingHorizontal:16 }]} onFocus={()=>{onLocalityFocusChanged(true)}} onBlur={()=>{onAddressFocuseChanged(false)}} placeholder="near global market" />
            <Text style={[{fontSize:12,lineHeight:18,fontFamily:'Inter-Medium',color:'#0F0B28',marginLeft:20,marginTop:24}]}> Address Type </Text>
            <View style={[{flexDirection:'row',justifyContent: 'space-between',alignItems: 'center',alignSelf: 'center',marginHorizontal:20,marginTop:8,marginBottom:56}]}>
                <View style={[{flex :1,borderColor:(index == 0 ? '#714FFF' : '#E3E3E3'),borderRadius:12,borderWidth:1,paddingVertical:11 }]}>
                    <Text style={[{textAlign: 'center',fontFamily:'Montserrat-SemiBold',fontSize:14,lineHeight:17,color:'#302E6B'}]} onPress={()=>{setIndex(0)}}>Home</Text>
                    {(index == 0) && <Image source={require('./assets/checked.png')} style={[{position: 'absolute',top:-8,right:-8}]}/>}
                </View>
                <View style={[{flex :1,borderColor:(index == 1 ? '#714FFF' : '#E3E3E3'),marginLeft :16,borderRadius:12,borderWidth:1,paddingVertical:11 }]}>
                    <Text style={[{textAlign: 'center',fontFamily:'Montserrat-SemiBold',fontSize:14,lineHeight:17,color:'#302E6B'}]} onPress={()=>{setIndex(1)}}>Work</Text>
                    {(index == 1) && <Image source={require('./assets/checked.png')} style={[{position: 'absolute',top:-8,right:-8}]}/>}
                </View>
                <View style={[{flex :1,borderColor:(index == 2 ? '#714FFF' : '#E3E3E3'),marginLeft :16,borderRadius:12,borderWidth:1,paddingVertical:11 }]}>
                    <Text style={[{textAlign: 'center',fontFamily:'Montserrat-SemiBold',fontSize:14,lineHeight:17,color:'#302E6B'}]} onPress={()=>{setIndex(2)}}>Other</Text>
                    {(index == 2) && <Image source={require('./assets/checked.png')} style={[{position: 'absolute',top:-8,right:-8}]}/>}
                </View>
            </View>
        </View>
    )
}   