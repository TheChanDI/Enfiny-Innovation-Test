import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const FirstTabScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" translucent />

      <ImageBackground
        source={require('../assets/bg1.jpg')}
        style={styles.containerImgStyle}
      >
        <View style={{ alignSelf: 'center' }}>
          <Text style={[styles.headerTextStyle, { color: 'white' }]}>Your</Text>
          <Text style={styles.headerTextStyle}>Pastry</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Enter email id"
            placeholderTextColor="white"
            style={styles.textInputStyle}
          />
          <TextInput
            secureTextEntry
            placeholder="Enter your password"
            placeholderTextColor="white"
            style={styles.textInputStyle}
          />

          <Text style={styles.forgotPwStyle}>Forgot Password</Text>
        </View>
        {/* <TouchableOpacity activeOpacity={0.7} style={styles.btnStyle}>
          <Text style={{ color: 'white', fontSize: 20 }}>SIGN IN</Text>
        </TouchableOpacity> */}
        <TouchableOpacity activeOpacity={0.7}>
          <LinearGradient
            colors={['#00C2AA', '#01BAAC', '#02B0AE']}
            style={styles.btnStyle}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>SIGN IN</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImgStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly'
  },
  headerTextStyle: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 45,
    textAlign: 'center',
    color: '#01BAAC',
    letterSpacing: 1
  },
  textInputContainer: {
    marginHorizontal: '7%',
    height: 170,
    justifyContent: 'space-around'
  },
  textInputStyle: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    color: 'white'
  },
  forgotPwStyle: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    marginTop: '2%'
  },
  btnStyle: {
    alignSelf: 'center',
    backgroundColor: '#01BAAC',
    paddingVertical: 8,
    paddingHorizontal: 80,
    borderRadius: 20
  }
});

export default FirstTabScreen;
