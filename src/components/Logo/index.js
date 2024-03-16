/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, View } from 'react-native';
const Logo = () => {
    const LogoAnim = useRef(new Animated.Value(0)).current;
    const FadeIn = () => {
        Animated.timing(LogoAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };
    const fadeOut = () => {
    Animated.timing(LogoAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
   };
    useEffect(() => {
        FadeIn();
        setTimeout(()=>{
            fadeOut();
        }, 4000)
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.logoContainer}>
                <Animated.View
                    style={[
                        styles.fadingContainer,
                        {
                            opacity: LogoAnim,
                        },
                    ]}>
                    <Image style={styles.logo} source={require('../../assets/FitNessLogo.png')} />
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        backgroundColor: 'black',
        height: '100%',
    },
    fadingContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    logo:{
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
});
export default Logo;
