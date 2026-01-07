import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BottomNavigation from '../../components/navigation/BottomNavigation'
import { colors } from '../../utils/globalStyle'
import { styles } from './notificationScreen.styles'

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notification</Text>
          <TouchableOpacity style={styles.bellButton}>
            <Ionicons name="notifications-outline" size={20} color={colors.void} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content Area */}
      <View style={styles.scrollableContent}>
        <View style={styles.contentBackground}>
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Today Notifications */}
            <View style={styles.notificationGroup}>
              <View style={styles.groupHeader}>
                <Text style={styles.groupTitle}>Today</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
              </View>
              
              {/* Reminder Notification */}
              <View style={styles.notificationItem}>
                <View style={styles.notificationIconCircle}>
                  <Ionicons name="notifications" size={24} color={colors.caribbeanGreen} />
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>Reminder!</Text>
                  <View style={styles.notificationRow}>
                    <Text style={styles.notificationDescription} numberOfLines={2}>
                      Set up your automatic savings to meet your savings goal...
                    </Text>
                    <Text style={styles.notificationTimestamp}>17:00 - April 24</Text>
                  </View>
                </View>
              </View>

              {/* New Update Notification */}
              <View style={styles.notificationItem}>
                <View style={styles.notificationIconCircle}>
                  <Ionicons name="star" size={24} color={colors.caribbeanGreen} />
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>New Update</Text>
                  <View style={styles.notificationRow}>
                    <Text style={styles.notificationDescription} numberOfLines={2}>
                      Set up your automatic savings to meet your savings goal...
                    </Text>
                    <Text style={styles.notificationTimestamp}>17:00 - April 24</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Yesterday Notifications */}
            <View style={styles.notificationGroup}>
              <View style={styles.groupHeader}>
                <Text style={styles.groupTitle}>Yesterday</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
              </View>
              
              {/* Transactions Notification */}
              <View style={styles.notificationItem}>
                <View style={styles.notificationIconCircle}>
                  <Ionicons name="cash" size={24} color={colors.caribbeanGreen} />
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>Transactions</Text>
                  <View style={styles.notificationRow}>
                    <Text style={styles.notificationDescription} numberOfLines={2}>
                      A new transaction has been registered
                    </Text>
                    <Text style={styles.notificationTimestamp}>17:00 - April 24</Text>
                  </View>
                  <Text style={styles.transactionDetails}>Groceries | Pantry | -₦100.00</Text>
                </View>
              </View>

              {/* Reminder Notification */}
              <View style={styles.notificationItem}>
                <View style={styles.notificationIconCircle}>
                  <Ionicons name="notifications" size={24} color={colors.caribbeanGreen} />
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>Reminder!</Text>
                  <View style={styles.notificationRow}>
                    <Text style={styles.notificationDescription} numberOfLines={2}>
                      Set up your automatic savings to meet your savings goal...
                    </Text>
                    <Text style={styles.notificationTimestamp}>17:00 - April 24</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* This Weekend Notifications */}
            <View style={styles.notificationGroup}>
              <View style={styles.groupHeader}>
                <Text style={styles.groupTitle}>This Weekend</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
              </View>
              
              {/* Expense Record Notification */}
              <View style={styles.notificationItem}>
                <View style={styles.notificationIconCircle}>
                  <Ionicons name="arrow-down-circle" size={24} color={colors.caribbeanGreen} />
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>Expense Record</Text>
                  <View style={styles.notificationRow}>
                    <Text style={styles.notificationDescription} numberOfLines={2}>
                      We recommend that you be more attentive to your finances.
                    </Text>
                    <Text style={styles.notificationTimestamp}>17:00 - April 24</Text>
                  </View>
                </View>
              </View>

              {/* Transactions Notification */}
              <View style={styles.notificationItem}>
                <View style={styles.notificationIconCircle}>
                  <Ionicons name="cash" size={24} color={colors.caribbeanGreen} />
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>Transactions</Text>
                  <View style={styles.notificationRow}>
                    <Text style={styles.notificationDescription} numberOfLines={2}>
                      A new transaction has been registered
                    </Text>
                    <Text style={styles.notificationTimestamp}>17:00 - April 24</Text>
                  </View>
                  <Text style={styles.transactionDetails}>Food | Dinner | -₦70.40</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavigation />
    </View>
  )
}

export default NotificationScreen
