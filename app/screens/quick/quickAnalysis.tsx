import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BottomNavigation from '../../components/navigation/BottomNavigation'
import { colors } from '../../utils/globalStyle'
import { styles } from './quickAnalysis.styles'

const QuickAnalysis = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.headerContent}>
          <View style={styles.headerTop}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Quickly Analysis</Text>
            <TouchableOpacity style={styles.bellButton}>
              <Ionicons name="notifications-outline" size={20} color={colors.void} />
            </TouchableOpacity>
          </View>

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
            {/* April Expenses Chart Section */}
            <View style={styles.chartSection}>
              <View style={styles.chartHeader}>
                <Text style={styles.chartTitle}>April Expenses</Text>
                <View style={styles.chartHeaderIcons}>
                  <TouchableOpacity style={styles.chartIconButton}>
                    <Ionicons name="search-outline" size={20} color={colors.void} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.chartIconButton}>
                    <Ionicons name="calendar-outline" size={20} color={colors.void} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Bar Chart */}
              <View style={styles.chartContainer}>
                {/* Y-axis labels */}
                <View style={styles.yAxisLabels}>
                  <Text style={styles.yAxisLabel}>15k</Text>
                  <Text style={styles.yAxisLabel}>10k</Text>
                  <Text style={styles.yAxisLabel}>5k</Text>
                  <Text style={styles.yAxisLabel}>1k</Text>
                </View>

                {/* Chart bars */}
                <View style={styles.barsContainer}>
                  <View style={styles.weekColumn}>
                    <View style={styles.barsWrapper}>
                      <View style={[styles.bar, styles.barGreen, { height: 40 }]} />
                      <View style={[styles.bar, styles.barBlue, { height: 80 }]} />
                    </View>
                    <Text style={styles.weekLabel}>1st Week</Text>
                  </View>

                  <View style={styles.weekColumn}>
                    <View style={styles.barsWrapper}>
                      <View style={[styles.bar, styles.barGreen, { height: 40 }]} />
                      <View style={[styles.bar, styles.barBlue, { height: 120 }]} />
                    </View>
                    <Text style={styles.weekLabel}>2nd Week</Text>
                  </View>

                  <View style={styles.weekColumn}>
                    <View style={styles.barsWrapper}>
                      <View style={[styles.bar, styles.barGreen, { height: 40 }]} />
                      <View style={[styles.bar, styles.barBlue, { height: 160 }]} />
                    </View>
                    <Text style={styles.weekLabel}>3rd Week</Text>
                  </View>

                  <View style={styles.weekColumn}>
                    <View style={styles.barsWrapper}>
                      <View style={[styles.bar, styles.barGreen, { height: 80 }]} />
                      <View style={[styles.bar, styles.barBlue, { height: 100 }]} />
                    </View>
                    <Text style={styles.weekLabel}>4th Week</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Transaction List */}
            <View style={styles.transactionsHeader}>
              <Text style={styles.transactionsTitle}>Transactions</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
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
                    source={require('../../../app/../assets/images/salary.svg')} 
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
                    source={require('../../../app/../assets/images/salary.svg')} 
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

              {/* Entertainment Transaction */}
              <View style={styles.transactionItem}>
                <View style={styles.transactionIconCircle}>
                  <Ionicons name="film-outline" size={20} color={colors.vividBlue} />
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>Entertainment</Text>
                  <Text style={styles.transactionMeta}>20:15 - April 05</Text>
                  <Text style={styles.transactionCategory}>Movies</Text>
                </View>
                <Text style={styles.transactionAmountNegative}>-₦250.00</Text>
              </View>

              {/* Utilities Transaction */}
              <View style={styles.transactionItem}>
                <View style={styles.transactionIconCircle}>
                  <Ionicons name="flash-outline" size={20} color={colors.vividBlue} />
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>Utilities</Text>
                  <Text style={styles.transactionMeta}>14:45 - April 03</Text>
                  <Text style={styles.transactionCategory}>Electricity</Text>
                </View>
                <Text style={styles.transactionAmountNegative}>-₦500.00</Text>
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

export default QuickAnalysis
