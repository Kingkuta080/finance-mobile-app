import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BottomNavigation from '../../components/navigation/BottomNavigation'
import { colors } from '../../utils/globalStyle'
import { styles } from './HomeScreen.styles'

const HomeScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('Monthly')

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Green Background - Full Height */}
      <View style={styles.headerSection} />
      
      {/* Header Content - Fixed */}
      <View style={styles.headerContent}>
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
                <Text style={styles.progressPercentage}>30%</Text>
              </View>
              <View style={[styles.progressUnfilled, { width: '70%' }]}>
                <Text style={styles.progressTarget}>₦20,000.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.progressStatus}>
            <Ionicons name="checkbox-outline" size={16} color={colors.void} />
            <Text style={styles.progressStatusText}>30% Of Your Expenses, Looks Good.</Text>
          </View>
        </View>
      </View>

      {/* Scrollable Content Area - Inside Honeydew Background */}
      <View style={styles.scrollableContent}>
        <View style={styles.honeydewBackground}>
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Summary Card */}
            <View style={styles.summaryCard}>
              <View style={styles.summaryItem}>
                <View style={styles.progressContainerWrapper}>
                  {/* Circular Progress Indicator */}
                  <View style={styles.circularProgressOuter}>
                    {/* Progress Fill Arc - ~67% */}
                    <View style={styles.progressArcContainer}>
                      <View style={styles.progressArc1} />
                      <View style={styles.progressArc2} />
                    </View>
                    <View style={styles.circularProgressInner}>
                      <Image source={require('../../../app/../assets/images/car.svg')} style={{ width: 50, height: 50, alignSelf: 'center' }} resizeMode="contain" />
                    </View>
                  </View>
                </View>
                <View style={styles.savingsTextContainer}>
                  <Text style={styles.savingsTextLine1}>Savings</Text>
                  <Text style={styles.savingsTextLine2}>On Goals</Text>
                </View>
              </View>

              <View style={styles.summaryDivider} />

              <View style={styles.summaryItem}>
                <View style={styles.summaryRow}>
                  <Image source={require('../../../app/../assets/images/salary.svg')} style={{ width: 25, height: 25, alignSelf: 'center' }} resizeMode="contain" />
                  <View style={styles.summaryDetails}>
                    <Text style={styles.summaryLabelWhite}>Revenue Last Week</Text>
                    <Text style={styles.summaryAmountWhite}>₦4,000.00</Text>
                  </View>
                </View>
                <View style={styles.summaryRowDivider} />
                <View style={styles.summaryRow}>
                  <Image source={require('../../../app/../assets/images/food.svg')} style={{ width: 25, height: 25, alignSelf: 'center' }} resizeMode="contain" />
                  <View style={styles.summaryDetails}>
                    <Text style={styles.summaryLabelWhite}>Food Last Week</Text>
                    <Text style={styles.summaryAmountBlue}>-₦100.00</Text>
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
                style={[styles.filterTab, selectedFilter === 'Weekly' && styles.filterTabActive]}
                onPress={() => setSelectedFilter('Weekly')}
              >
                <Text style={[styles.filterText, selectedFilter === 'Weekly' && styles.filterTextActive]}>
                  Weekly
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.filterTab, selectedFilter === 'Monthly' && styles.filterTabActive]}
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
                  <Image 
                    source={require('../../../assets/images/salary.svg')} 
                    style={{ width: 20, height: 20 }} 
                    resizeMode="contain" 
                  />
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
                  <Image 
                    source={require('../../../assets/images/salary.svg')} 
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
                    source={require('../../../assets/images/salary.svg')} 
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
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavigation />
    </View>
  )
}

export default HomeScreen
