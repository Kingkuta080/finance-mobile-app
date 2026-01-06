import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors, typography } from '../../utils/globalStyle'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Top Section - Teal Background */}
      <View style={styles.topSection}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>

      {/* Main Content Card - White */}
      <View style={styles.card}>
        {/* Username/Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username Or Email</Text>
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

        {/* Log In Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Fingerprint Access */}
        <TouchableOpacity style={styles.fingerprintContainer}>
          <Text style={styles.fingerprintText}>
            Use <Text style={styles.fingerprintLink}>Fingerprint</Text> To Access
          </Text>
        </TouchableOpacity>

        {/* Separator */}
        <Text style={styles.separator}>or sign up with</Text>

        {/* Social Media Icons */}
        <View style={styles.socialContainer}>
          <Image source={require('../../../assets/images/facebook.svg')} style={styles.socialIcon} />
          <Image source={require('../../../assets/images/google.svg')} style={styles.socialIcon} />
        </View>

        {/* Sign Up Link at Bottom */}
        <View style={styles.bottomLinkContainer}>
          <Text style={styles.bottomLinkText}>
            Don&apos;t have an account? <Text style={styles.bottomLink}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.caribbeanGreen,
    width: '100%',
    height: '100%',
  },
  topSection: {
    flex: 0.3,
    backgroundColor: colors.caribbeanGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    ...typography.titleBold,
    fontSize: 30,
    color: colors.void,
  },
  card: {
    flex: 0.7,
    backgroundColor: colors.honeydew,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
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
  loginButton: {
    backgroundColor: colors.caribbeanGreen,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 12,
    width: 207,
    height: 45,
    alignSelf: 'center',
  },
  loginButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: colors.void,
    fontWeight: '600',
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  forgotPasswordText: {
    ...typography.bodySmall,
    fontSize: 14,
    color: colors.void,
  },
  signUpButton: {
    backgroundColor: colors.lightGreen,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 12,
    width: 207,
    height: 45,
    alignSelf: 'center',
  },
  signUpButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: colors.void,
    fontWeight: '600',
  },
  fingerprintContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  fingerprintText: {
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.void,
  },
  fingerprintLink: {
    color: colors.oceanBlue,
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
  },
  socialText: {
    ...typography.heading3,
    fontSize: 20,
    color: colors.caribbeanGreen,
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