import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, typography } from '../../utils/globalStyle'

export default class LunchLogo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/* Financial Graph Icon */}
          <Image 
            source={require('../../../assets/images/logo-dark.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
          {/* FinWise Text */}
          <Text style={styles.logoText}>FinWise</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.caribbeanGreen,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 109,
    height: 150,
  },
  logoText: {
    ...typography.heading1,
    fontSize: 36,
    color: '#FFFFFF',
    letterSpacing: 1,
  },
})