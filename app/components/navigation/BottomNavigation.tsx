import { Ionicons } from '@expo/vector-icons'
import { useRouter, useSegments, usePathname, Href } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { colors } from '../../utils/colors'

const BottomNavigation = () => {
  const router = useRouter()
  const segments = useSegments()
  const pathname = usePathname()
  
  // Check if a route is active based on segments and pathname
  const isActive = (routeName: string) => {
    // Extract the route name without the group prefix
    // e.g., '/(tabs)/home' -> 'home', '/(tabs)/quick-analysis' -> 'quick-analysis'
    const routePath = routeName.replace('/(tabs)/', '')
    
    // Check pathname first (most reliable)
    if (pathname) {
      // Remove leading/trailing slashes and normalize
      const normalizedPath = pathname.toLowerCase().replace(/^\/+|\/+$/g, '')
      const normalizedRoute = routePath.toLowerCase().replace(/^\/+|\/+$/g, '')
      
      // Check various pathname formats that Expo Router might use
      if (
        normalizedPath === normalizedRoute || 
        normalizedPath === `(tabs)/${normalizedRoute}` ||
        normalizedPath.endsWith(`/${normalizedRoute}`) ||
        normalizedPath.endsWith(normalizedRoute) ||
        normalizedPath.includes(`/${normalizedRoute}/`) ||
        normalizedPath.includes(`/${normalizedRoute}`)
      ) {
        return true
      }
    }
    
    // Fallback to segments check
    // Segments format: ['(tabs)', 'home'] for route '/(tabs)/home'
    const lastSegment = segments[segments.length - 1]?.toLowerCase()
    const routeSegment = routePath.toLowerCase()
    
    // Check if the last segment matches the route
    if (lastSegment === routeSegment) {
      return true
    }
    
    // Check if any segment contains the route name
    return segments.some(seg => seg.toLowerCase() === routeSegment || seg.toLowerCase().includes(routeSegment))
  }
  
  const tabs = [
    { 
      route: '/(tabs)/home', 
      icon: 'home',
      label: 'Home'
    },
    { 
      route: '/(tabs)/quick-analysis', 
      icon: 'analytics',
      label: 'Quick Analysis'
    },
    { 
      route: '/(tabs)/transaction', 
      icon: 'swap-horizontal-outline',
      label: 'Transaction'
    },
    { 
      route: '/(tabs)/account-balance', 
      icon: 'layers-outline',
      label: 'Account Balance'
    },
    { 
      route: '/(tabs)/notification', 
      icon: 'person-outline',
      label: 'Notification'
    },
  ]
  
  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => {
        const active = isActive(tab.route)
        return (
          <TouchableOpacity 
            key={tab.route}
            style={styles.navItem}
            onPress={() => router.push(tab.route as Href)}
          >
            {active ? (
              <View style={styles.navIconCircle}>
                <Ionicons name={tab.icon as any} size={24} color={colors.void} />
              </View>
            ) : (
              <Ionicons name={tab.icon as any} size={24} color={colors.cyprus} />
            )}
          </TouchableOpacity>
        )
      })}
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

