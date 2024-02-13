import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import UjiLabHome from '../components/UjiLabHome';
import TopTitleMenu from '../components/TopTitleMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from 'react-query';
import axios from 'axios';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const fetchData = async value => {
  const headers = {
    Authorization: `Bearer ${value}`,
  };

  const response = await axios.get(
    'https://siemoo.vercel.app/api/v1/',
    {headers},
  );

  return response.data.data;
};

export default DeteksiSakit = () => {
  const insets = useSafeAreaInsets();

//   const {data, isLoading, isError, error} = useQuery(
//     'dataSakit',
//     async () => {
//       const value = await AsyncStorage.getItem('@data/user');
//       const responseData = await fetchData(value);

//       return responseData;
//     },
//   );

//   if (isLoading) {
//     return (
//       <View className="flex items-center justify-center w-screen h-screen bg-[#EDF1D6]">
//         <ActivityIndicator size={80} color="#609966" />
//       </View>
//     );
//   }

//   if (isError) {
//     return (
//       <View className="flex items-center justify-center w-screen h-screen bg-[#EDF1D6]">
//         <Text>Error: {error.message}</Text>
//       </View>
//     );
//   }

  const data = null;

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
        <TopTitleMenu title={'Deteksi Sakit'} />

        {data ? (
          <ScrollView className="h-[80%]">
            {/* Uji Lab */}
            {data.map((data, index) => {
              return <UjiLabHome data={data} index={index} />;
            })}
          </ScrollView>
        ) : (
          <ScrollView className="h-[80%] ">
            <View className="flex items-center justify-center mt-[10%]">
              <View className="border-[5px] border-red-500 rounded-full p-2">
                <MaterialCommunityIcons
                  name={'close-thick'}
                  size={60}
                  color="red"
                />
              </View>
              <Text className="text-lg font-semibold text-[#40513B] text-center mt-5">
                Cooming soon...
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};