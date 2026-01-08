import { StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import { typography } from '../utils/globalStyles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.honeydew,
    width: '100%',
  },
  headerSection: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.caribbeanGreen,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
  },
  headerContent: {
    paddingTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    ...typography.titleBold,
    fontSize: 24,
    color: colors.void,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  bellButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollableContent: {
    flex: 1,
    marginTop: 100,
  },
  contentBackground: {
    flex: 1,
    backgroundColor: colors.honeydew,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  notificationGroup: {
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  groupTitle: {
    ...typography.titleBold,
    fontSize: 18,
    color: colors.void,
    fontWeight: 'bold',
  },
  seeAllText: {
    ...typography.bodyMedium,
    fontSize: 14,
    color: colors.void,
    fontWeight: '500',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.caribbeanGreen,
  },
  notificationIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    ...typography.bodyLarge,
    fontSize: 14,
    color: colors.void,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationDescription: {
    ...typography.bodyMedium,
    fontSize: 12,
    color: colors.cyprus,
    opacity: 0.7,
    marginBottom: 4,
    flex: 1,
    flexWrap: 'wrap',
  },
  notificationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  transactionDetails: {
    ...typography.bodySmall,
    fontSize: 12,
    color: colors.vividBlue,
    opacity: 0.8,
    marginTop: 4,
  },
  notificationTimestamp: {
    ...typography.bodySmall,
    fontSize: 11,
    color: colors.vividBlue,
    opacity: 0.8,
    marginLeft: 8,
    flexShrink: 0,
  },
})

