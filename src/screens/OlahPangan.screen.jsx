import React from 'react';
import {View, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from 'react-query';
import axios from 'axios';
import ErrorHandler from '../components/ErrorHandler';

import TopTitleMenu from '../components/TopTitleMenu';
import ArtikelDaftar from '../components/ArtikelDaftar';

const fetchData = async value => {
  const headers = {
    Authorization: `Bearer ${value}`,
  };

  const response = await axios.get(
    'https://siemoo.vercel.app/api/v1/artikel/pangan',
    {headers},
  );

  return response.data.data;
};

export default Sulap = () => {
  const insets = useSafeAreaInsets();

  const {data, isLoading, isError, error} = useQuery('dataPangan', async () => {
    const value = await AsyncStorage.getItem('@data/user');
    const responseData = await fetchData(value);

    return responseData;
  });

  if (isLoading) {
    return (
      <View className="flex items-center justify-center w-screen h-screen bg-[#EDF1D6]">
        <ActivityIndicator size={80} color="#609966" />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex items-center justify-center w-screen h-screen bg-[#EDF1D6]">
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      className="flex-[1] items-center bg-[#EDF1D6] h-screen">
      <View className="w-[95%] mt-10">
        <TopTitleMenu title={'Olah Pangan Kreatif'} />

        {data ? (
          <ScrollView className="h-[80%]">
            {/* Uji Lab */}
            {data.map((data, index) => {
              return <ArtikelDaftar data={data} index={index} />;
            })}
          </ScrollView>
        ) : (
          <ErrorHandler />
        )}
      </View>
    </SafeAreaView>
  );
};