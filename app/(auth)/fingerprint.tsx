import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'
import { typography } from '../utils/globalStyles'
import { useRouter } from 'expo-router'

const FingarPrint = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Top Section - Teal Background */}
      <View style={styles.topSection}>
        <Text style={styles.titleText}>Security Fingerprint</Text>
      </View>

      {/* Main Content Card - White */}
      <ScrollView 
        style={styles.card}
        contentContainerStyle={styles.cardContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Fingerprint Icon */}
        <View style={styles.fingerprintIconContainer}>
          <Image source={require('../../assets/images/thumb.svg')} style={styles.fingerprintIcon} />
        </View>

        {/* Main Instruction Text */}
        <Text style={styles.mainInstruction}>Use Fingerprint To Access</Text>

        {/* Descriptive Text */}
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </Text>

        {/* Use Touch Id Button */}
        <TouchableOpacity 
          style={styles.touchIdButton}
          onPress={() => router.replace('/(tabs)/home')}
        >
          <Text style={styles.touchIdButtonText}>Use Touch Id</Text>
        </TouchableOpacity>

        {/* Alternative Option */}
        <TouchableOpacity 
          style={styles.pinCodeLinkContainer}
          onPress={() => router.push('/(auth)/security-pin')}
        >
          <Text style={styles.pinCodeLink}>¿Or prefer use pin code?</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default FingarPrint

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
    color: '#FFFFFF',
  },
  card: {
    flex: 0.75,
    backgroundColor: colors.honeydew,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cardContent: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
  },
  fingerprintIconContainer: {
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fingerprintIcon: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.caribbeanGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainInstruction: {
    ...typography.titleBold,
    fontSize: 24,
    color: colors.void,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  descriptionText: {
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.void,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 20,
    paddingHorizontal: 20,
    opacity: 0.8,
  },
  touchIdButton: {
    backgroundColor: colors.lightGreen,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 32,
    minWidth: 200,
  },
  touchIdButtonText: {
    ...typography.heading4,
    fontSize: 16,
    color: colors.void,
    fontWeight: '600',
  },
  pinCodeLinkContainer: {
    marginTop: 'auto',
  },
  pinCodeLink: {
    ...typography.bodySmall,
    fontSize: 12,
    color: colors.cyprus,
    textAlign: 'center',
    opacity: 0.7,
  },
})