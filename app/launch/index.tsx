import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'
import { typography } from '../utils/globalStyles'

const LaunchPage = () => {
  const router = useRouter()
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          {/* Financial Graph Icon */}
          <Image 
            source={require('../../assets/images/logo-light.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
          
          {/* FinWise Text */}
          <Text style={styles.appName}>FinWise</Text>
          
          {/* Tagline */}
          <Text style={styles.tagline}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          {/* Log In Button */}
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => router.push('/(auth)/login')}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Sign Up Button */}
          <TouchableOpacity 
            style={[styles.signUpButton, { marginTop: 16 }]}
            onPress={() => router.push('/(auth)/create-account')}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password Link */}
        <TouchableOpacity 
          style={styles.forgotPasswordContainer}
          onPress={() => router.push('/(auth)/forgot-password')}
        >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LaunchPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.honeydew,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoImage: {
    width: 109,
    height: 120,
    marginBottom: 24,
    tintColor: colors.caribbeanGreen,
  },
  appName: {
    ...typography.titleBold,
    fontSize: 36,
    color: colors.caribbeanGreen,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  tagline: {
    ...typography.bodySmall,
    fontSize: 14,
    color: colors.void,
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 20,
    opacity: 0.7,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    backgroundColor: colors.caribbeanGreen,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: colors.fenceGreen,
    fontWeight: '600',
  },
  signUpButton: {
    width: '100%',
    backgroundColor: colors.lightGreen,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: colors.cyprus,
    fontWeight: '600',
  },
  forgotPasswordContainer: {
    marginTop: 24,
  },
  forgotPassword: {
    ...typography.bodySmall,
    fontSize: 14,
    color: colors.void,
    opacity: 0.8,
  },
})

