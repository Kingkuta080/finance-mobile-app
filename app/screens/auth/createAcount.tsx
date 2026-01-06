import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors, typography } from '../../utils/globalStyle'

const CreateAcount = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Top Section - Teal Background */}
      <View style={styles.topSection}>
        <Text style={styles.titleText}>Create Account</Text>
      </View>

      {/* Main Content Card - White */}
      <ScrollView 
        style={styles.card}
        contentContainerStyle={styles.cardContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Full Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="example@example.com"
            placeholderTextColor={colors.cyprus}
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <Text style={styles.emailLabel}>Email</Text>
          </Text>
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

        {/* Mobile Number Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+ 123 456 789"
            placeholderTextColor={colors.cyprus}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
        </View>

        {/* Date Of Birth Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date Of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="DD / MM / YYYY"
            placeholderTextColor={colors.cyprus}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••••"
              placeholderTextColor={colors.cyprus}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={colors.cyprus}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••••"
              placeholderTextColor={colors.cyprus}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={colors.cyprus}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Legal Disclaimer */}
        <Text style={styles.legalText}>
          By continuing, you agree to <Text style={styles.legalLink}>Terms of Use and Privacy Policy</Text>
        </Text>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Log In Link at Bottom */}
        <View style={styles.bottomLinkContainer}>
          <Text style={styles.bottomLinkText}>
            Already have an account? <Text style={styles.bottomLink}>Log In</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default CreateAcount

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
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.void,
    marginBottom: 8,
    fontWeight: '500',
  },
  emailLabel: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.vividBlue,
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGreen,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.void,
  },
  eyeIcon: {
    padding: 4,
  },
  legalText: {
    ...typography.bodySmall,
    fontSize: 12,
    color: colors.void,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
    lineHeight: 18,
  },
  legalLink: {
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: colors.caribbeanGreen,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 20,
    width: 207,
    height: 45,
    alignSelf: 'center',
  },
  signUpButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
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