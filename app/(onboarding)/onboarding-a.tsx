import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'
import { typography } from '../utils/globalStyles'

export default function OnboardingA() {
  const router = useRouter()
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Top Section - Teal Background */}
      <View style={styles.topSection}>
        <Text style={styles.welcomeText}>
          Welcome To{'\n'}
          Expense Manager
        </Text>
      </View>

      {/* Bottom Section - Light Green Background */}
      <View style={styles.bottomSection}>
        {/* Illustration Area */}
        <View style={styles.illustrationContainer}>
          {/* Circular Background */}
          <View style={styles.circleBackground}>
            {/* Hand Illustration - Absolute positioned above circle */}
            <Image 
              source={require('../../assets/images/onboarda.svg')} 
              style={styles.handIllustration}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => router.push('/onboarding-b')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.caribbeanGreen,
    width: '100%',
    height: '100%',
  },
  topSection: {
    flex: 0.4,
    backgroundColor: colors.caribbeanGreen,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  welcomeText: {
    ...typography.titleBold,
    fontSize: 32,
    color: colors.void,
    textAlign: 'center',
    lineHeight: 44,
  },
  bottomSection: {
    flex: 0.6,
    backgroundColor: colors.honeydew,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  circleBackground: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
  },
  handIllustration: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: -40,
    alignSelf: 'center',
  },
  nextButton: {
    marginTop: 20,
    marginBottom: 16,
  },
  nextButtonText: {
    ...typography.heading3,
    fontSize: 18,
    color: colors.void,
    fontWeight: '600',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: colors.caribbeanGreen,
  },
  inactiveDot: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.caribbeanGreen,
    marginLeft: 8,
  },
})

