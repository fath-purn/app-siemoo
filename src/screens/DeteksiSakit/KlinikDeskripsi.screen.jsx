import React, { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  Linking,
  ActivityIndicator,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopTitleMenu from "../../components/TopTitleMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "react-query";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { styles, extractUrlFromIntent } from "../../utils/global.utils";
import clsx from "clsx";
import AntDesign from "@expo/vector-icons/AntDesign";
import SakitKlinikLengkap from "../../components/SakitKlinikLengkap";
import { useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";

const fetchData = async (value) => {
  const headers = {
    Authorization: `Bearer ${value}`,
  };

  const response = await axios.get(
    "https://siemoo.vercel.app/api/v1/pengujian/me",
    { headers }
  );

  return response.data.data;
};

export default KlinikDeskripsi = () => {
  const insets = useSafeAreaInsets();
  const [webViewKey, setWebViewKey] = useState(0);
  const route = useRoute();
  const { id } = route.params;

  //   const {data, isLoading, isError, error} = useQuery(
  //     'pengujianData',
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

  const data = {
    id: 1,
    nama: "Klinik Pratama Sehat Semangat",
    alamat: "Jl. Dr. Cipto Mangunkusumo No. 17, Kebasen, Jawa Tengah",
    maps: "https://www.google.com/maps/place/Sarwono+carter+mobil/@-7.5825028,109.2533702,20z/data=!4m6!3m5!1s0x2e6543b95a44e109:0x824f2c0e1f813c13!8m2!3d-7.5825127!4d109.2537741!16s%2Fg%2F11j0hwqvsl?entry=ttu",
    foto: "https://reactnative.dev/img/tiny_logo.png",
    telepon: "+62 812-3456-7890",
    kota: {
      id: 1,
      nama: "Banyumas",
    },
    jadwal: {
      seninSabtu: "08.00 - 20.00",
      minggu: "08.00 - 12.00",
    },
  };

  const openRute = (err) => {
    const url = extractUrlFromIntent(err.nativeEvent.url);
    setWebViewKey(webViewKey + 1);
    Linking.openURL(url);
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
        <TopTitleMenu title={data.nama} />

        <ScrollView className="flex-auto h-[80%]">
          <View
            style={[styles.shadow]}
            className="w-full aspect-square rounded-lg"
          >
            <Image
              source={{ uri: data.foto }}
              // style={{ width: 300, height: 300 }}
              className="w-full aspect-square rounded-lg"
              style={[styles.shadow]}
            />
          </View>

          <View className="mt-5">
            <Text className="text-2xl font-semibold leading-7 tracking-wide text-[#40513B] mb-1">
              Alamat
            </Text>
            <View
              className="rounded-lg w-full h-[300px] mb-5 bg-black"
              style={[styles.shadow]}
            >
              <WebView
                key={webViewKey}
                originWhitelist={["*"]}
                source={{
                  uri: data.maps,
                }}
                onError={openRute}
                onHttpError={({ nativeEvent }) => {
                  openRute(nativeEvent);
                }}
              />
            </View>

            <View className="flex-row mt-5">
              <MaterialCommunityIcons
                name={"map-marker-outline"}
                size={35}
                color="#166534"
                onPress={() => handlerNavigate("sd")}
              />
              <Text className="ml-1 text-base font-medium leading-7 tracking-widest text-[#40513B] mb-1">
                {data.alamat}
              </Text>
            </View>
            <View className="flex-row mt-3 items-center">
              <MaterialCommunityIcons
                name={"phone"}
                size={35}
                color="#166534"
                onPress={() => handlerNavigate("sd")}
              />
              <Text className="ml-1 text-base font-medium leading-7 tracking-widest text-[#40513B] mb-1">
                {data.telepon}
              </Text>
            </View>
            <View className="flex-row mt-3">
              <MaterialCommunityIcons
                name={"clock-outline"}
                size={35}
                color="#166534"
                onPress={() => handlerNavigate("sd")}
              />
              <View className="ml-1">
                <Text className="ml-1 text-base font-medium leading-7 tracking-widest text-[#40513B]">
                  Senin - Sabtu {data.jadwal.seninSabtu} WIB
                </Text>
                <Text className="ml-1 text-base font-medium leading-7 tracking-widest text-[#40513B] mb-1">
                  Minggu {data.jadwal.seninSabtu} WIB
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
