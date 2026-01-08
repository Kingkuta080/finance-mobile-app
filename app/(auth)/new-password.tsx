import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'
import { typography } from '../utils/globalStyles'
import { useRouter } from 'expo-router'

const NewPassword = () => {
  const router = useRouter()
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Top Section - Teal Background */}
      <View style={styles.topSection}>
        <Text style={styles.titleText}>New Password</Text>
      </View>

      {/* Main Content Card - White */}
      <ScrollView 
        style={styles.card}
        contentContainerStyle={styles.cardContent}
        showsVerticalScrollIndicator={false}
      >
        {/* New Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••••"
              placeholderTextColor={colors.cyprus}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!showNewPassword}
            />
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showNewPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={colors.cyprus}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm New Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm New Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••••"
              placeholderTextColor={colors.cyprus}
              value={confirmNewPassword}
              onChangeText={setConfirmNewPassword}
              secureTextEntry={!showConfirmNewPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showConfirmNewPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={colors.cyprus}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Change Password Button */}
        <TouchableOpacity 
          style={styles.changePasswordButton}
          onPress={() => router.push('/(auth)/success')}
        >
          <Text style={styles.changePasswordButtonText}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default NewPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.caribbeanGreen,
    width: '100%',
    height: '100%',
  },
  topSection: {
    flex: 0.33,
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
    flex: 0.67,
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
    marginBottom: 24,
  },
  label: {
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.void,
    marginBottom: 8,
    fontWeight: '500',
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
  changePasswordButton: {
    backgroundColor: colors.caribbeanGreen,
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    width: 373,
    height: 45,
    alignSelf: 'center',
  },
  changePasswordButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: colors.void,
    fontWeight: '600',
  },
})