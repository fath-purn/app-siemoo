import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import UjiLabHome from "../components/UjiLabHome";
import TopTitleMenu from "../components/TopTitleMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "react-query";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import SakitBanner from "../components/SakitBanner";
import SakitUpload from "../components/SakitUpload";
import { styles } from "../utils/global.utils";
import { useNavigation } from "@react-navigation/native";

const fetchData = async (value) => {
  const headers = {
    Authorization: `Bearer ${value}`,
  };

  const response = await axios.get("https://siemoo.vercel.app/api/v1/", {
    headers,
  });

  return response.data.data;
};

export default DeteksiSakit = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handlerNavigate = (tujuan) => {
    navigation.navigate(tujuan);
  };

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

  const sakit = {
    id: 1,
    penyakit: "Demam",
    saran: "Senenge rewel berisik, tapi cantik ",
    akurasi: 92,
    created: "12 Juli 2024",
  };

  return (
    <SafeAreaView
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      className="flex-[1] items-center bg-[#EDF1D6] h-screen"
    >
      <View className="w-[95%] mt-10">
        <TopTitleMenu title={"Deteksi Sakit"} />

        <SakitUpload />

        <ScrollView className="h-[80%]">
          <View className="flex items-center justify-center mt-[10%]">
            {/* penyakit */}
            <SakitBanner sakit={sakit} />
            {/* Menu bawah */}
            <View className="flex flex-row justify-between w-[100%]">
              {/* Klinik */}
              <View className="min-w-[45%] max-w-[48%] mr-2">
                <TouchableOpacity
                  className="bg-white rounded-xl w-full aspect-square flex items-center justify-center"
                  style={[styles.shadow]}
                  onPress={() => handlerNavigate("KlinikList-screen")}
                >
                  <MaterialCommunityIcons
                    name={"medical-bag"}
                    size={60}
                    color="#166534"
                  />
                  <Text className="text-2xl font-semibold leading-7 tracking-widest text-[#40513B]">
                    Klinik
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Riwayat */}
              <View className="min-w-[45%] max-w-[48%] ml-2">
                <TouchableOpacity
                  className="bg-white rounded-xl w-full aspect-square flex items-center justify-center"
                  style={[styles.shadow]}
                  onPress={() => handlerNavigate("Riwayat-screen")}
                >
                  <MaterialCommunityIcons
                    name={"clock-outline"}
                    size={60}
                    color="#166534"
                  />
                  <Text className="text-2xl font-semibold leading-7 tracking-widest text-[#40513B]">
                    Riwayat
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex flex-row justify-between w-[100%] mt-4">
              {/* Penyakit */}
              <View className="min-w-[45%] max-w-[48%] mr-2">
                <TouchableOpacity
                  className="bg-white rounded-xl w-full aspect-square flex items-center justify-center"
                  style={[styles.shadow]}
                  onPress={() => handlerNavigate("Artikel-screen")}
                >
                  <MaterialCommunityIcons
                    name={"needle"}
                    size={60}
                    color="#166534"
                  />
                  <Text className="text-2xl font-semibold leading-7 tracking-widest text-[#40513B]">
                    Penyakit
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Riwayat */}
              <View className="min-w-[45%] max-w-[48%] ml-2">
                <TouchableOpacity
                  className="bg-white rounded-xl w-full aspect-square flex items-center justify-center"
                  style={[styles.shadow]}
                  onPress={() => handlerNavigate("sd")}
                >
                  {/* <MaterialCommunityIcons
                    name={"clock-outline"}
                    size={60}
                    color="#166534"
                  />
                  <Text className="text-2xl font-semibold leading-7 tracking-widest text-[#40513B]">Riwayat</Text> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="pb-[100px]"></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
