import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BottomNavigation from '../components/navigation/BottomNavigation'
import { colors } from '../utils/colors'
import { styles } from './account-balance.styles'

const AccountBalance = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.headerContent}>
          <View style={styles.headerTop}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Account Balance</Text>
            <TouchableOpacity 
              style={styles.bellButton}
              onPress={() => router.push('/(tabs)/notification')}
            >
              <Ionicons name="notifications-outline" size={20} color={colors.void} />
            </TouchableOpacity>
          </View>

          {/* Financial Summary */}
          <View style={styles.financialSummary}>
            <View style={styles.balanceContainer}>
              <View style={styles.balanceRow}>
                <Ionicons name="arrow-up-right-box-outline" size={16} color={colors.void} />
                <Text style={styles.balanceLabel}>Total Balance</Text>
              </View>
              <Text style={styles.balanceAmount}>₦7,783.00</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.expenseContainer}>
              <View style={styles.expenseRow}>
                <Ionicons name="arrow-down-right-box-outline" size={16} color={colors.void} />
                <Text style={styles.expenseLabel}>Total Expense</Text>
              </View>
              <Text style={styles.expenseAmount}>-₦1,187.40</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}>
                <View style={styles.progressFill}>
                  <Text style={styles.progressPercentage}>30%</Text>
                </View>
                <View style={[styles.progressUnfilled, { width: '70%' }]}>
                  <Text style={styles.progressTarget}>₦20,000.00</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Income and Expense Cards */}
          <View style={styles.cardsContainer}>
            <View style={styles.incomeCard}>
              <View style={styles.cardIcon}>
                <Ionicons name="arrow-up-right-box-outline" size={32} color={colors.caribbeanGreen} />
              </View>
              <Text style={styles.cardLabel}>Income</Text>
              <Text style={styles.cardAmount}>₦4,000.00</Text>
            </View>

            <View style={styles.expenseCard}>
              <View style={styles.cardIcon}>
                <Ionicons name="arrow-down-right-box-outline" size={32} color={colors.caribbeanGreen} />
              </View>
              <Text style={styles.cardLabel}>Expense</Text>
              <Text style={styles.cardAmountExpense}>₦1,187.40</Text>
            </View>
          </View>

          {/* Status Message */}
          <View style={styles.progressStatus}>
            <Ionicons name="checkmark-circle" size={16} color={colors.void} />
            <Text style={styles.progressStatusText}>30% Of Your Expenses, Looks Good.</Text>
          </View>
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
            {/* Transactions Header */}
            <View style={styles.transactionsHeader}>
              <Text style={styles.transactionsTitle}>Transactions</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>

            {/* Transaction List */}
            <View style={styles.transactionsContainer}>
              {/* Salary Transaction */}
              <View style={styles.transactionItem}>
                <View style={styles.transactionIconCircle}>
                  <Image 
                    source={require('../../assets/images/salary.svg')} 
                    style={{ width: 20, height: 20 }} 
                    resizeMode="contain" 
                  />
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>Salary</Text>
                  <Text style={styles.transactionMeta}>18:27 - April 30</Text>
                  <Text style={styles.transactionCategory}>Monthly</Text>
                </View>
                <Text style={styles.transactionAmountBlue}>₦4,000.00</Text>
              </View>

              {/* Groceries Transaction */}
              <View style={styles.transactionItem}>
                <View style={styles.transactionIconCircle}>
                  <Image 
                    source={require('../../assets/images/salary.svg')} 
                    style={{ width: 20, height: 20 }} 
                    resizeMode="contain" 
                  />
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>Groceries</Text>
                  <Text style={styles.transactionMeta}>17:00 - April 24</Text>
                  <Text style={styles.transactionCategory}>Pantry</Text>
                </View>
                <Text style={styles.transactionAmountNegative}>-₦100.00</Text>
              </View>

              {/* Rent Transaction */}
              <View style={styles.transactionItem}>
                <View style={styles.transactionIconCircle}>
                  <Image 
                    source={require('../../assets/images/salary.svg')} 
                    style={{ width: 20, height: 20 }} 
                    resizeMode="contain" 
                  />
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>Rent</Text>
                  <Text style={styles.transactionMeta}>8:30 - April 15</Text>
                  <Text style={styles.transactionCategory}>Rent</Text>
                </View>
                <Text style={styles.transactionAmountNegative}>-₦674.40</Text>
              </View>

              {/* Transport Transaction */}
              <View style={styles.transactionItem}>
                <View style={styles.transactionIconCircle}>
                  <Ionicons name="bus" size={20} color={colors.vividBlue} />
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>Transport</Text>
                  <Text style={styles.transactionMeta}>9:30 - April 08</Text>
                  <Text style={styles.transactionCategory}>Fuel</Text>
                </View>
                <Text style={styles.transactionAmountNegative}>-₦4.13</Text>
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

export default AccountBalance
