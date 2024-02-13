import {useContext, useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { AuthContext } from '../../Authorize/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from "react-query";
import axios from "axios";

import ArtikelCarousel from '../components/ArticleCarousel';
import UjiLabHome from '../components/UjiLabHome';
import MenuHome from '../components/MenuHome';

const menuKiri = [
  {
    id: 1,
    nama: 'Beri Pakan',
    icon: 'food-fork-drink',
    navigate: 'Beri-Pakan-screen',
  },
  {
    id: 2,
    nama: 'Sulap Limbah',
    icon: 'magic-staff',
    navigate: 'Sulap-screen',
  },
  {
    id: 3,
    nama: 'Deteksi Sakit',
    icon: 'hospital',
    navigate: 'Sakit-screen',
  },
];

const menuKanan = [
  {
    id: 4,
    nama: 'Lapak Produk',
    icon: 'store',
    navigate: 'Lapak-screen',
  },
  {
    id: 5,
    nama: 'Edukasi',
    icon: 'school-outline',
    navigate: 'Edukasi-screen',
  },
  {
    id: 6,
    nama: 'Olah Pangan Kreatif',
    icon: 'tools',
    navigate: 'Olah-Pangan-screen',
  },
];

const fetchData = async (value) => {
  const headers = {
    Authorization: `Bearer ${value}`,
  };

  const response = await axios.get('https://siemoo.vercel.app/api/v1/user/dashboard', { headers });

  return response.data.data;
};

function Dashboard() {
  const { logoutAuth } = useContext(AuthContext);
  const insets = useSafeAreaInsets();
  
  const { data, isLoading, isError, error } = useQuery('dashboardData', async () => {
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
    <ScrollView className="bg-[#EDF1D6] h-full">
      <SafeAreaView
        style={{
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
        className="flex-[1] items-center bg-[#EDF1D6]">
        <View className="w-[95%] mt-10">
          {/* TOP */}
          <View className="flex items-center">
            <View className="w-[90%]">
              <View className="flex-row items-center justify-between">
                <Image
                  // source={{
                  //   uri: 'https://i.pinimg.com/236x/75/34/0c/75340c46406428ebba460f02b79a36c0.jpg',
                  // }}
                  source={require('../../assets/Logo.png')}
                  style={{width: 40, height: 40}}
                  className="rounded-full bg-cover"
                />
                <View className="flex-row gap-3 items-center">
                <TouchableOpacity className="border-none" onPress={() => logoutAuth()}>
                  <MaterialCommunityIcons
                    name={'exit-to-app'}
                    size={30}
                    color="#40513B"
                  />
                </TouchableOpacity>
                {/* <TouchableOpacity className="border-none" onPress={() => ''}>
                  <MaterialCommunityIcons
                    name={'menu'}
                    size={30}
                    color="black"
                  />
                </TouchableOpacity> */}
              </View>
              </View>
              <Text className="mt-5 text-2xl font-semibold text-[#40513B]">
                Halo Peternak Cerdas!
              </Text>
            </View>
          </View>

          {/* Artikel */}
          {data.artikel && <ArtikelCarousel data={data.artikel} />}

          {/* Uji Lab */}
          {data.pengujian && <UjiLabHome data={data.pengujian} home={true}/>}

          {/* Lapak */}

          {/* Menu */}
          <MenuHome menuKanan={menuKanan} menuKiri={menuKiri} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Dashboard;