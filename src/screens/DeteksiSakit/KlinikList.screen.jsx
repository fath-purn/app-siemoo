import React, { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
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
import { styles } from "../../utils/global.utils";
import clsx from "clsx";
import AntDesign from "@expo/vector-icons/AntDesign";
import SakitKlinikLengkap from "../../components/SakitKlinikLengkap";

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

export default KlinikList = () => {
  const insets = useSafeAreaInsets();
  const [text, setText] = useState("");
  const [role, setRole] = useState("");
  const [isFocus, setIsFocus] = useState(false);

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

  const klinik = [
    {
      id: 1,
      nama: "Klinik Pratama Sehat Semangat",
      alamat: "Jl. Dr. Cipto Mangunkusumo No. 17, Kebasen, Jawa Tengah",
      telepon: "+62 812-3456-7890",
      kota: {
        id: 1,
        nama: "Banyumas",
      }
    },
    {
      id: 2,
      nama: "Klinik Pratama Sehat Semangat",
      alamat: "Jl. Dr. Cipto Mangunkusumo No. 17, Kebasen, Jawa Tengah",
      telepon: "+62 812-3456-7890",
      kota: {
        id: 1,
        nama: "Banyumas",
      }
    },
    {
      id: 3,
      nama: "Klinik Pratama Sehat Semangat",
      alamat: "Jl. Dr. Cipto Mangunkusumo No. 17, Kebasen, Jawa Tengah",
      telepon: "+62 812-3456-7890",
      kota: {
        id: 1,
        nama: "Banyumas",
      }
    },
    {
      id: 4,
      nama: "Klinik Pratama Sehat Semangat",
      alamat: "Jl. Dr. Cipto Mangunkusumo No. 17, Kebasen, Jawa Tengah",
      telepon: "+62 812-3456-7890",
      kota: {
        id: 1,
        nama: "Banyumas",
      }
    },
    {
      id: 2,
      nama: "Klinik Pratama Sehat Semangat",
      alamat: "Jl. Dr. Cipto Mangunkusumo No. 17, Kebasen, Jawa Tengah",
      telepon: "+62 812-3456-7890",
      kota: {
        id: 1,
        nama: "Banyumas",
      }
    },
    {
      id: 2,
      nama: "Klinik Pratama Sehat Semangat",
      alamat: "Jl. Dr. Cipto Mangunkusumo No. 17, Kebasen, Jawa Tengah",
      telepon: "+62 812-3456-7890",
      kota: {
        id: 1,
        nama: "Banyumas",
      }
    },
  ];

  const roleUser = [
    { label: "Pembeli", value: "pembeli" },
    { label: "Peternak", value: "peternak" },
  ];

  const kota = [
    {
        value: 0,
        label: "Tampilkan semua",
    },
    {
        value: 1,
        label: "Banyumas",
    },
    {
        value: 2,
        label: "Banyumas",
    },
    {
        value: 3,
        label: "Banyumas",
    },
    {
        value: 4,
        label: "Banyumas",
    },
  ];

  const renderLabelRole = () => {
    if (role || isFocus) {
      return (
        <Text
          className={clsx(
            "absolute",
            "left-[22px]",
            "top-[-10px]",
            "z-50",
            "px-2",
            "text-sm",
            "bg-[#EDF1D6]",
            "text-[#40513B]",
            {
              "#166534": isFocus,
            }
          )}
        >
          Kota
        </Text>
      );
    }
    return null;
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
        <TopTitleMenu title={"Klinik Hewan"} />

        <ScrollView className="flex-auto h-[80%]">
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Menghapus behavior pada Android
            // keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -130} // Mengatur offset berdasarkan platform
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View className="border border-gray-600 flex-row justify-between rounded-full items-center">
                <TextInput
                  placeholder="Search"
                  onChangeText={(newText) => setText(newText)}
                  defaultValue={text}
                  className="w-[70%] py-4 ml-8"
                  enterKeyHint="search"
                />
                <View className="w-[3px] h-8 bg-gray-400 rounded-xl"></View>
                <TouchableHighlight className="w-[15%] items-center py-4 mr-1">
                  <MaterialCommunityIcons
                    name={"magnify"}
                    size={30}
                    color="#166534"
                    onPress={() => handlerNavigate("sd")}
                    className="rotate-3"
                  />
                </TouchableHighlight>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          <View className="mt-3 mb-5">
            {renderLabelRole()}
            <Dropdown
              className={clsx(
                "h-[50px] border-[#9DC08B] border-[0.5px] rounded-lg px-2",
                {
                  "border-[#166534]": isFocus,
                }
              )}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={kota}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Filter kota" : "..."}
              searchPlaceholder="Search..."
              value={role}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setRole(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={isFocus ? "#166534" : "#40513B"}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>
          {klinik.map((data, index) => {
            return <SakitKlinikLengkap data={data} index={index} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
