import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default LapakCard = ({data, index}) => {
  const {no_wa} = data.user;

  // Remove the '+' character if it exists
  const formattedNoWa = no_wa ? no_wa.replace('+', '') : '';

  let templateChatWa = `https://api.whatsapp.com/send?phone=${formattedNoWa}&text=Selamat%20${sapaan()}%2C%20saya%20${'siapa'}%20berniat%20membeli%20produk%20${
    data.nama
  }%20apakah%20masih%20ada%20stok%3F%20`;

  const handlerLapak = () => {
    Linking.openURL(templateChatWa);
  };

  return (
    <View
      className="bg-white rounded-lg mt-3"
      key={data.id}
      style={[styles.shadow]}>
      <Image
        source={{
          uri: data.Media[0].link,
        }}
        className="w-full h-[200px] overflow-hidden rounded-t-lg"
      />
      <View className="flex items-center">
        <View className="my-5 w-[90%] flex-row justify-between">
          <View className="w-[70%]">
            <Text className="text-lg font-bold text-[#40513B] mb-2">
              {data.nama}
            </Text>
            <Text className="text-base text-[#40513B]">
              Kualitas: {data.pengujian.hasil}
            </Text>
            <Text className="text-base text-[#40513B]">
              Harga: Rp {data.harga} / {data.kuantiti}
            </Text>
          </View>
          <View className="flex items-start mt-5">
            <TouchableOpacity
              className="p-3 bg-[#40513B] rounded-full"
              onPress={() => handlerLapak()}>
              <MaterialCommunityIcons
                name={'whatsapp'}
                size={30}
                color="#EDF1D6"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const sapaan = () => {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 0 && currentHour < 10) {
    greeting = 'Pagi';
  } else if (currentHour >= 10 && currentHour < 15) {
    greeting = 'Siang';
  } else if (currentHour >= 15 && currentHour < 18) {
    greeting = 'Sore';
  } else {
    greeting = 'Malam';
  }

  return greeting;
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 2, // Intensitas bayangan
    shadowColor: '#000', // Warna bayangan
    shadowOffset: {width: 0, height: 2}, // Offset bayangan (horizontal, vertical)
    shadowOpacity: 0.2, // Tingkat transparansi bayangan
    shadowRadius: 2, // Lebar atau kabur bayangan
  },
});
