import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, typography } from '../../utils/globalStyle'

const HomeScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('Monthly')

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section - Teal Background */}
        <View style={styles.headerSection}>
          <View style={styles.headerTop}>
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingText}>Hi, Welcome Back</Text>
              <Text style={styles.timeText}>Good Morning</Text>
            </View>
            <TouchableOpacity style={styles.bellButton}>
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
                  <Text style={styles.progressPercentage}>₦20,000.00</Text>
                </View>
                <View style={[styles.progressUnfilled, { width: '30%' }]}>
                  <Text style={styles.progressTarget}>30%</Text>
                </View>
              </View>
            </View>
            <View style={styles.progressStatus}>
              <Ionicons name="checkmark-circle" size={16} color={colors.void} />
              <Text style={styles.progressStatusText}>30% Of Your Expenses, Looks Good.</Text>
            </View>
          </View>
        </View>

        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryItem}>
            <View style={styles.summaryIconCircle}>
              <Ionicons name="car" size={24} color={colors.caribbeanGreen} />
            </View>
            <Text style={styles.summaryLabel}>Savings On Goals</Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.summaryItem}>
            <View style={styles.summaryRow}>
              <Ionicons name="cash" size={20} color={colors.caribbeanGreen} />
              <View style={styles.summaryDetails}>
                <Text style={styles.summaryLabel}>Revenue Last Week</Text>
                <Text style={styles.summaryAmountPositive}>₦4,000.00</Text>
              </View>
            </View>
            <View style={styles.summaryRow}>
              <Ionicons name="restaurant" size={20} color={colors.vividBlue} />
              <View style={styles.summaryDetails}>
                <Text style={styles.summaryLabel}>Food Last Week</Text>
                <Text style={styles.summaryAmountNegative}>-₦100.00</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Transaction Filter */}
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.filterTab, selectedFilter === 'Daily' && styles.filterTabActive]}
            onPress={() => setSelectedFilter('Daily')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Daily' && styles.filterTextActive]}>
              Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterTab, { marginLeft: 12 }, selectedFilter === 'Weekly' && styles.filterTabActive]}
            onPress={() => setSelectedFilter('Weekly')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Weekly' && styles.filterTextActive]}>
              Weekly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterTab, { marginLeft: 12 }, selectedFilter === 'Monthly' && styles.filterTabActive]}
            onPress={() => setSelectedFilter('Monthly')}
          >
            <Text style={[styles.filterText, selectedFilter === 'Monthly' && styles.filterTextActive]}>
              Monthly
            </Text>
          </TouchableOpacity>
        </View>

        {/* Transaction List */}
        <View style={styles.transactionsContainer}>
          {/* Salary Transaction */}
          <View style={styles.transactionItem}>
            <View style={styles.transactionIconCircle}>
              <Ionicons name="cash" size={20} color={colors.vividBlue} />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>Salary</Text>
              <Text style={styles.transactionMeta}>18:27 - April 30</Text>
              <Text style={styles.transactionCategory}>Monthly</Text>
            </View>
            <Text style={styles.transactionAmountPositive}>₦4,000.00</Text>
          </View>

          {/* Groceries Transaction */}
          <View style={styles.transactionItem}>
            <View style={styles.transactionIconCircle}>
              <Ionicons name="bag" size={20} color={colors.vividBlue} />
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
              <Ionicons name="key" size={20} color={colors.vividBlue} />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>Rent</Text>
              <Text style={styles.transactionMeta}>8:30 - April 15</Text>
              <Text style={styles.transactionCategory}>Rent</Text>
            </View>
            <Text style={styles.transactionAmountNegative}>-₦674.40</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconCircle}>
            <Ionicons name="home" size={24} color={colors.caribbeanGreen} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="analytics-outline" size={24} color={colors.cyprus} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="swap-horizontal-outline" size={24} color={colors.cyprus} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="card-outline" size={24} color={colors.cyprus} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color={colors.cyprus} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.honeydew,
    width: '100%',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  headerSection: {
    backgroundColor: colors.caribbeanGreen,
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 32,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24
  },
  greetingContainer: {
    flex: 1,
  },
  greetingText: {
    ...typography.titleBold,
    fontSize: 28,
    color: colors.void,
  },
  timeText: {
    ...typography.bodyMedium,
    fontSize: 16,
    color: colors.void,
    opacity: 0.8,
  },
  bellButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  financialSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  balanceContainer: {
    flex: 1,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  balanceLabel: {
    ...typography.bodySmall,
    fontSize: 12,
    color: colors.void,
    marginLeft: 4,
    opacity: 0.8,
  },
  balanceAmount: {
    ...typography.titleBold,
    fontSize: 28,
    color: colors.honeydew,
    fontWeight: 'bold',
  },
  divider: {
    width: 1,
    backgroundColor: colors.oceanBlue,
    opacity: 0.2,
    marginHorizontal: 16,
  },
  expenseContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  expenseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  expenseLabel: {
    ...typography.bodySmall,
    fontSize: 12,
    color: colors.void,
    marginLeft: 4,
    opacity: 0.8,
  },
  expenseAmount: {
    ...typography.titleBold,
    fontSize: 28,
    color: colors.oceanBlue,
    fontWeight: 'bold',
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 27,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    overflow: 'hidden',
    flexDirection: 'row',
    position: 'relative',
  },
  progressFill: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 8,
  },
  progressUnfilled: {
    height: '100%',
    backgroundColor: colors.void,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 40,
  },
  progressPercentage: {
    ...typography.bodySmall,
    fontSize: 12,
    color: colors.void,
    fontWeight: '600',
  },
  progressTarget: {
    ...typography.bodySmall,
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600',
    lineHeight: 12,
  },
  progressStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  progressStatusText: {
    ...typography.bodySmall,
    fontSize: 12,
    color: colors.void,
    marginLeft: 6,
    opacity: 0.8,
  },
  summaryCard: {
    backgroundColor: colors.lightGreen,
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 24,
    marginTop: -20,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryItem: {
    flex: 1,
  },
  summaryIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.honeydew,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  summaryLabel: {
    ...typography.bodySmall,
    fontSize: 12,
    color: colors.void,
    opacity: 0.7,
  },
  summaryDivider: {
    width: 1,
    height: 60,
    backgroundColor: colors.caribbeanGreen,
    opacity: 0.2,
    marginHorizontal: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryDetails: {
    marginLeft: 12,
    flex: 1,
  },
  summaryAmountPositive: {
    ...typography.heading4,
    fontSize: 18,
    color: colors.caribbeanGreen,
    fontWeight: 'bold',
    marginTop: 2,
  },
  summaryAmountNegative: {
    ...typography.heading4,
    fontSize: 18,
    color: colors.vividBlue,
    fontWeight: 'bold',
    marginTop: 2,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  filterTab: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: colors.lightGreen,
    alignItems: 'center',
  },
  filterTabActive: {
    backgroundColor: colors.caribbeanGreen,
  },
  filterText: {
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.cyprus,
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  transactionsContainer: {
    paddingHorizontal: 24,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGreen,
  },
  transactionIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.lightBlue,
    opacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    ...typography.bodyLarge,
    fontSize: 16,
    color: colors.void,
    fontWeight: '600',
    marginBottom: 4,
  },
  transactionMeta: {
    ...typography.bodySmall,
    fontSize: 12,
    color: colors.cyprus,
    opacity: 0.6,
    marginBottom: 2,
  },
  transactionCategory: {
    ...typography.bodySmall,
    fontSize: 12,
    color: colors.cyprus,
    opacity: 0.8,
  },
  transactionAmountPositive: {
    ...typography.heading4,
    fontSize: 18,
    color: colors.caribbeanGreen,
    fontWeight: 'bold',
  },
  transactionAmountNegative: {
    ...typography.heading4,
    fontSize: 18,
    color: colors.vividBlue,
    fontWeight: 'bold',
  },
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
    borderRadius: 20,
    backgroundColor: colors.honeydew,
    justifyContent: 'center',
    alignItems: 'center',
  },
})