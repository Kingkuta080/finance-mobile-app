import { StatusBar } from 'expo-status-bar'
import React, { useRef, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'
import { typography } from '../utils/globalStyles'

const SecurityPin = () => {
  const [pin, setPin] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef<(TextInput | null)[]>([])

  const handlePinChange = (text: string, index: number) => {
    // Only allow digits
    const digit = text.replace(/[^0-9]/g, '')
    
    if (digit.length > 1) {
      return // Only allow single digit
    }

    const newPin = [...pin]
    newPin[index] = digit
    setPin(newPin)

    // Auto-focus next input
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Top Section - Teal Background */}
      <View style={styles.topSection}>
        <Text style={styles.titleText}>Security Pin</Text>
      </View>

      {/* Main Content Card - White */}
      <ScrollView 
        style={styles.card}
        contentContainerStyle={styles.cardContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Enter Security Pin Text */}
        <Text style={styles.enterPinText}>Enter Security Pin</Text>

        {/* Pin Input Circles */}
        <View style={styles.pinContainer}>
          {pin.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                inputRefs.current[index] = ref
              }}
              style={styles.pinInput}
              value={digit}
              onChangeText={(text) => handlePinChange(text, index)}
              onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>

        {/* Accept Button */}
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.acceptButtonText}>Accept</Text>
        </TouchableOpacity>

        {/* Send Again Button */}
        <TouchableOpacity style={styles.sendAgainButton}>
          <Text style={styles.sendAgainButtonText}>Send Again</Text>
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
        <View style={styles.bottomLinkContainer}>
          <Text style={styles.bottomLinkText}>
            Don&apos;t have an account? <Text style={styles.bottomLink}>Sign Up</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default SecurityPin

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
  enterPinText: {
    ...typography.titleBold,
    fontSize: 20,
    color: colors.void,
    marginBottom: 32,
    fontWeight: 'bold',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    gap: 12,
  },
  pinInput: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.cyprus,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    ...typography.heading3,
    fontSize: 24,
    color: colors.void,
    fontWeight: 'bold',
  },
  acceptButton: {
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
  acceptButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  sendAgainButton: {
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
  sendAgainButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: colors.void,
    fontWeight: '600',
  },
  separator: {
    ...typography.caption,
    fontSize: 12,
    color: colors.cyprus,
    textAlign: 'center',
    marginBottom: 16,
    opacity: 0.6,
    marginTop: 76,
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
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.void,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    ...typography.heading3,
    fontSize: 20,
    color: colors.void,
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