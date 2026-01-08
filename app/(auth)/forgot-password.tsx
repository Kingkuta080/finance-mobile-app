import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'
import { typography } from '../utils/globalStyles'

const ForgottenPassword = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Top Section - Teal Background */}
      <View style={styles.topSection}>
        <Text style={styles.titleText}>Forgot Password</Text>
      </View>

      {/* Main Content Card - White */}
      <ScrollView 
        style={styles.card}
        contentContainerStyle={styles.cardContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Heading */}
        <Text style={styles.heading}>Reset Password?</Text>

        {/* Descriptive Text */}
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="example@example.com"
            placeholderTextColor={colors.cyprus}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Next Step Button */}
        <TouchableOpacity 
          style={styles.nextStepButton}
          onPress={() => router.push('/(auth)/new-password')}
        >
          <Text style={styles.nextStepButtonText}>Next Step</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => router.push('/(auth)/create-account')}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Separator */}
        <Text style={styles.separator}>or sign up with</Text>

        {/* Social Media Icons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialIcon}>
            <Text style={styles.socialText}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialIcon, { marginLeft: 16 }]}>
            <Text style={styles.socialText}>G</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link at Bottom */}
        <TouchableOpacity 
          style={styles.bottomLinkContainer}
          onPress={() => router.push('/(auth)/create-account')}
        >
          <Text style={styles.bottomLinkText}>
            Don&apos;t have an account? <Text style={styles.bottomLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ForgottenPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.caribbeanGreen,
    width: '100%',
    height: '100%',
  },
  topSection: {
    flex: 0.25,
    backgroundColor: colors.caribbeanGreen,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  titleText: {
    ...typography.titleBold,
    fontSize: 32,
    color: colors.void,
  },
  card: {
    flex: 0.75,
    backgroundColor: colors.honeydew,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cardContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 20,
  },
  heading: {
    ...typography.heading1,
    fontSize: 24,
    color: colors.void,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  descriptionText: {
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.void,
    marginBottom: 24,
    lineHeight: 20,
    opacity: 0.8,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.void,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.lightGreen,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.void,
  },
  nextStepButton: {
    backgroundColor: colors.caribbeanGreen,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 16,
    width: 207,
    height: 45,
    alignSelf: 'center',
  },
  nextStepButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: colors.lightGreen,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 16,
    width: 207,
    height: 45,
    alignSelf: 'center',
  },
  signUpButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: colors.cyprus,
    fontWeight: '600',
  },
  separator: {
    ...typography.caption,
    fontSize: 12,
    color: colors.cyprus,
    textAlign: 'center',
    marginBottom: 16,
    opacity: 0.6,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  socialIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.void,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    ...typography.heading3,
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bottomLinkContainer: {
    alignItems: 'center',
  },
  bottomLinkText: {
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.void,
  },
  bottomLink: {
    color: colors.vividBlue,
    fontWeight: '600',
  },
})