import { useNavigation } from '@react-navigation/native';
import { fetchMissingPersons } from '../store/slices/firestoreSlice';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';

export default function useMissingPersonsData() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(
    (state: RootState) => state.firestore.missingPersonsData,
  );
  const loading = useAppSelector((state: RootState) => state.firestore.loading);
  const error = useAppSelector((state: RootState) => state.firestore.error);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    dispatch(fetchMissingPersons());
  }, [dispatch]);

  const handlePress = (dat: any) => {
    setSelectedData(dat);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const filterItems = ['All', 'Male', 'Female', 'Trans'];

  const filteredData = data.filter(item => {
    const searchFilter = item.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    if (selectedFilter === 'All') {
      return searchFilter;
    } else {
      if (selectedFilter === 'Male') {
        return searchFilter && item.gender.toLowerCase() === 'male';
      } else if (selectedFilter === 'Female') {
        return searchFilter && item.gender.toLowerCase() === 'female';
      } else if (selectedFilter === 'Trans') {
        return searchFilter && item.gender.toLowerCase() === 'trans';
      }
    }
  });

  const navigation = useNavigation();
  return {
    data,
    loading,
    error,
    modalVisible,
    selectedData,
    searchValue,
    selectedFilter,
    handlePress,
    handleModalClose,
    filterItems,
    filteredData,
    setSearchValue,
    setSelectedFilter,
    navigation,
  };
}
