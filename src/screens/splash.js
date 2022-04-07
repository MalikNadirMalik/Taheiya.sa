import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ImageBackground} from 'react-native'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
const Splash = ({navigation}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [animation, setAnimation] = useState('zoomIn')
    const [goTo, setGoTo] = useState(false)
    const goToHome = () => {
        navigation.replace('Login')
    }
    useEffect(() => {
        setTimeout(() => {
            setAnimation('fadeOut')
            setIsLoaded(true)
        }, 5000);
        setTimeout(() => {
            goToHome()
        }, 3000);
    })
    return (
        <View style={styles.mainContainer} >
             {/* <LinearGradient
               start={{ x: 0, y: 0.5 }}
               end={{ x: 1, y: 0.5 }}
               colors={['rgba(49, 123, 215, 1)', '#92D854']}
               style={styles.linearGradient1}
            > */}
            <ImageBackground
            style = {{justifyContent:'center', height:'100%' , width: '100%', resizeMode:'cover'}}
            source={require('../assets/images/splash.png')}>
            {
                    isLoaded ? (<Animatable.Image
                        animation={animation}
                        duration={1500}
                        source={require('../assets/images/taheiyalogo.png')}
                        resizeMode='contain'
                        style={styles.imageStyles}
                    />) :
                        <Animatable.Image
                            animation={animation}
                            duration={1500}
                            source={require('../assets/images/taheiyalogo.png')}
                            resizeMode='contain'
                            style={styles.imageStyles}
                        />
                }
            </ImageBackground>
                
                {/* </LinearGradient> */}
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        // height: '100%',
        // width: '100%'
    },
    imageStyles:{
        alignSelf:'center',
        height: 300,
        width: 300,
        resizeMode:'contain',
       alignItems: 'center'
        //borderRadius: 200
    },
    linearGradient1: {
        height:'100%',
        width: '100%',
        justifyContent:'center'
       // padding: 16
    }
})
export default Splash;