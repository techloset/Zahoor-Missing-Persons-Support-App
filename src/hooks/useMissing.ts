import { useNavigation } from '@react-navigation/native';
import { fetchMissingPersons } from '../store/slices/firestoreSlice';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';

export default function useMissing() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.firestore.data);
  const loading = useAppSelector((state: RootState) => state.firestore.loading);
  const error = useAppSelector((state: RootState) => state.firestore.error);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    dispatch(fetchMissingPersons());
  }, [dispatch]);

  const handleListPress = (dat: any) => {
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

    const genderFilter =
      selectedFilter === 'All' || item.gender === selectedFilter.toLowerCase();

    return searchFilter && genderFilter;
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
    handleListPress,
    handleModalClose,
    filterItems,
    filteredData,
    setSearchValue,
    setSelectedFilter,
    navigation,
  };
}
