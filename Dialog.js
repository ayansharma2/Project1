import React,{useState,useEffect} from 'react';
import { StyleSheet,Modal ,Text,Image ,Platform,View,Card,TouchableWithoutFeedback} from 'react-native';

export function SuccessPopup({visibility,visibilityCallback}){
    return(
        <View>
            <Modal visibility = {visibility}
            transparent = {true}>
                <View style={[{flex:1,backgroundColor :'rgba(52, 52, 52, 0.8)',alignItems: 'center',justifyContent: 'center'}]}>
                    <View style={[{flexDirection: 'column',backgroundColor:'white',alignSelf :'stretch',alignItems: 'center',margin:20,borderRadius:12}]}>
                    <Image source={require('./assets/check.png')} style={[{marginTop:64}]}/>
                    <Text style={[{textAlign: 'center',fontFamily:'Inter-Bold',fontSize:14,lineHeight:20,color:'#0F0B28',marginTop:22,marginLeft:55,marginRight:55}]}>
                    Thanks for taking your time and giving us the feedback
                    </Text>
                    <Text style={[{textAlign: 'center',fontFamily:'Inter-Regular',fontSize:12,lineHeight:18,color:'#686482',marginTop:7,marginLeft:32,marginRight:32}]}>
                    We will work on your feedback and make sure you get better experience going forward
                    </Text>

                    <View style={[{backgroundColor:'#F0F3F6',height:1,width:'100%',marginTop:39}]}/>

                    <View style={[{backgroundColor:'#714FFF',margin:20,borderRadius:12,padding:12,flexDirection:'row',justifyContent: 'center',alignItems: 'center',alignSelf:'stretch'}]}>
                        <Text style={[{fontFamily:'Inter-SemiBold',fontSize:12,lineHeight:18,letterSpacing:0.02,color:'white'}]}>
                        Go back to home
                        </Text> 
                        <Image source={require('./assets/arrow_right.png')} style={[{marginLeft:4}]}/>
                    </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


export function SuccessPopup_2(){
    const [visibility,visibilityCallback] = useState(true)
    return(
        <View>
            <Modal visible = {visibility}
            transparent = {true}>
                <View style={[{flex:1,backgroundColor :'rgba(52, 52, 52, 0.8)',alignItems: 'center',justifyContent: 'center'}]}>
                    <View style={[{alignSelf:'stretch',margin:20,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',backgroundColor:'white',borderRadius:12}]}>
                        <TouchableWithoutFeedback onPress={()=>{visibilityCallback(false)
                        console.log("Image Clicked")}}>
                        <Image source={require('./assets/cross.png')}  style={[{alignSelf:'flex-end',marginEnd:20,marginTop:20}]}/>
                        </TouchableWithoutFeedback>
                        <Image source={require('./assets/check.png')} style={[{marginTop:32}]}/>
                        <Text style={[{fontFamily:'Inter-Bold',fontSize:14,lineHeight:20,color:'#0F0B28',marginTop:22,marginLeft:55,marginRight:55,textAlign:'center'}]} >
                        Thanks for taking your time and giving us the feedback
                        </Text>
                        <Text style={[{textAlign: 'center',fontFamily:'Inter-Regular',fontSize:12,lineHeight:18,color:'#686482',marginTop:12,marginLeft:55,marginRight:55,marginBottom:86}]}>
                        We will work on your feedback and make sure you get better experience going forward
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


export function PopupAlertAction(){
    const [visibility,visibilityCallback] = useState(true)
    return(
        <View>
            <Modal visible = {visibility}
            transparent = {true}>
                <View style={[{flex:1,backgroundColor :'rgba(52, 52, 52, 0.8)',alignItems: 'center',justifyContent: 'center'}]}>
                    <View style={[{alignSelf:'stretch',margin:20,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',backgroundColor:'white',borderRadius:12}]}>
                        <View style={[{marginLeft:24,marginTop:26,marginRight:24,flexDirection:'row',alignItems:'center',alignSelf :'stretch'}]}>
                            <Image source={require('./assets/info_orange.png')} />
                            <Text style={[{fontFamily:'Inter-SemiBold',fontSize:16,lineHeight:24,color:'#0F0B28',marginLeft:8}]}>Important</Text>
                        </View>
                        <Text style={[{marginLeft:24,marginRight:24,marginTop:12,fontFamily:'Inter-Medium',fontSize:14,lineHeight:21,color:'#585969'}]}>
                        It looks like you have entered a non-corporate ID. If you were advised by your HR to login to the app you would want to use your official email to recieve your benefits. 
                        </Text>
                        <View style={[{backgroundColor:'#F0F3F6',alignSelf:'stretch',height:1,marginTop:36}]}/>
                        <View style={[{flexDirection:'row',alignSelf:'stretch'}]}>
                            <Text style={[{padding:15,flex:1,textAlign:'center',fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,color:'#0F0B28'}]}>
                                Change
                            </Text>
                            <View style={[{width:1,alignSelf:'stretch',backgroundColor:'#F0F3F6'}]}/>
                            <Text style={[{padding:15,flex:1,textAlign:'center',fontFamily:'Inter-SemiBold',fontSize:14,lineHeight:20,letterSpacing:0.02,color:'#0F0B28'}]}>
                                Continue
                            </Text> 
                        </View>
                    </View>
                </View>
            </Modal>
        </View>    
    )

}