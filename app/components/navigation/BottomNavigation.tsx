import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { colors } from '../../utils/globalStyle'

const BottomNavigation = () => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.navIconCircle}>
          <Ionicons name="home" size={24} color={colors.void} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="analytics" size={24} color={colors.cyprus} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="swap-horizontal-outline" size={24} color={colors.cyprus} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="layers-outline" size={24} color={colors.cyprus} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="person-outline" size={24} color={colors.cyprus} />
      </TouchableOpacity>
    </View>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: colors.lightGreen,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.caribbeanGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

