import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {useNavigation} from '@react-navigation/native';

export default ItemArticle = ({ item, data, index }) => {
  const navigation = useNavigation();

  const handlePress = (menu) => {
    switch (menu) {
      case 'edukasi':
        navigation.navigate('Edukasi-screen')
        break;
      case 'sulap_limbah':
        navigation.navigate('Sulap-screen')
        break;
      case 'olah_pangan':
        navigation.navigate('Olah-Pangan-screen')
        break;
      default:
        break;
    }
  }
  

  return (
    <TouchableOpacity
      key={index}
      className={
        index === data - 1
          ? "mx-4 mb-5 flex-1 rounded-xl relative flex items-center w-[270px] h-[200px]"
          : "ml-4 mb-5 flex-1 rounded-xl relative flex items-center w-[270px] h-[200px]"
      }
      style={[styles.shadow]}
      onPress={() => handlePress(item.menu)}
    >
      <Image
        source={{
          uri: item.media[0].link,
        }}
        className="w-[270px] h-[200px] overflow-hidden rounded-xl z-0"
      />
      <View className="z-10 w-[90%] bottom-11 flex items-start">
        <Text className="text-[#EDF1D6] ml-3 text-[16px] font-semibold leading-[17.5px] font-Quicksand_Bold ">
          {item.judul.length > 30
            ? `${item.judul.slice(0, 30)}...`
            : item.judul}
        </Text>
      </View>
      <LinearGradient
        colors={[
          "rgba(157, 192, 139, 0)",
          "rgba(157, 192, 139, 0.65)",
          "#83AF6C",
        ]}
        locations={[0.1, 0.8, 0.9]}
        className="absolute bottom-0 w-[270px] h-[200px] rounded-xl"
      ></LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 5, // Intensitas bayangan
    shadowColor: "#000", // Warna bayangan
    shadowOffset: { width: 0, height: 2 }, // Offset bayangan (horizontal, vertical)
    shadowOpacity: 0.2, // Tingkat transparansi bayangan
    shadowRadius: 2, // Lebar atau kabur bayangan
  },
});