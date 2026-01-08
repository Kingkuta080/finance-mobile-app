import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/colors'
import { typography } from '../utils/globalStyles'

const ChangeSucess = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current
  const opacityAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // Animate scale and opacity on mount
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start()
  }, [scaleAnim, opacityAnim])

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Success Icon */}
      <Animated.View 
        style={[
          styles.iconContainer,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        <View style={styles.circle}>
          <Ionicons name="checkmark" size={60} color="#FFFFFF" />
        </View>
      </Animated.View>

      {/* Success Message */}
      <View style={styles.messageContainer}>
        <Text style={styles.messageLine1}>Password Has Been</Text>
        <Text style={styles.messageLine2}>Changed Successfully</Text>
      </View>
      
      {/* Auto redirect after 2 seconds or add a button */}
    </View>
  )
}

export default ChangeSucess

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.caribbeanGreen,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageLine1: {
    ...typography.titleBold,
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 4,
  },
  messageLine2: {
    ...typography.titleBold,
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
  },
})