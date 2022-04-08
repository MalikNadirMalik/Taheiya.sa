import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ImageBackground} from 'react-native'
import * as Animatable from 'react-native-animatable'
const Splash = ({navigation}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [animation, setAnimation] = useState('zoomIn')
    const goToHome = () => {
        navigation.replace('Login')
    }
    useEffect(() => {
       
        setTimeout(() => {
            goToHome()
        }, 3000);
    })
    return (
        <View style={styles.mainContainer} >
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
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    imageStyles:{
        alignSelf:'center',
        height: 300,
        width: 300,
        resizeMode:'contain',
       alignItems: 'center'
    },
    linearGradient1: {
        height:'100%',
        width: '100%',
        justifyContent:'center'
    }
})
export default Splash;