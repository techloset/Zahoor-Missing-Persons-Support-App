import { fetchMissingPersons } from '../store/slices/firestoreSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';
import { useEffect, useState } from 'react';

export default function useHome() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.firestore.data);
  const loading = useAppSelector((state: RootState) => state.firestore.loading);
  const error = useAppSelector((state: RootState) => state.firestore.error);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    dispatch(fetchMissingPersons());
  }, [dispatch]);

  const handleCardPress = (dat: any) => {
    setSelectedData(dat);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const filteredData = data.filter(item => {
    const searchFilter = item.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    return searchFilter;
  });

  return {
    loading,
    error,
    modalVisible,
    selectedData,
    searchValue,
    handleCardPress,
    handleModalClose,
    filteredData,
    setSearchValue,
  };
}
