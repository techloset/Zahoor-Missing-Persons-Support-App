import { StyleSheet } from 'react-native';
import { Colors, Units } from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_COLOR,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  selectedFilter: {
    backgroundColor: Colors.WHITE_COLOR,
  },
  selectedFilterText: {
    color: Colors.SECONDARY_COLOR,
  },
  headerContainer: {
    height: 35,
    width: Units.WINDOW_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 9,
  },
  header: {
    height: 28,
    width: 335,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    // marginHorizontal: 26,
    // marginVertical: 30,
  },
  headerText: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 23,
    fontWeight: '600',
  },
  searchContainer: {
    marginBottom: 26,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterText: {
    color: Colors.SECONDARY_COLOR,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    marginRight: 16,
  },
  filterItem: {
    marginRight: 16,
    height: 36,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    padding: 8,
    shadowColor: Colors.FADED_BORDER_COLOR,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.01,
    shadowRadius: 2,
    backgroundColor: Colors.WHITE_COLOR,
  },
  filterItemText: {
    color: Colors.SECONDARY_COLOR,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  listContainer: {
    flex: 1,
    height: 454,
    overflow: 'hidden',
    gap: 16,
  },
});
