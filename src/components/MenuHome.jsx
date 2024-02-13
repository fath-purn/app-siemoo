import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default MenuHome = ({menuKanan, menuKiri}) => {
  const navigation = useNavigation();

  const handlerNavigate = tujuan => {
    navigation.navigate(tujuan);
  };

  return (
    <View className=" flex-row justify-between w-full my-5">
      <View className="w-[50%] gap-2">
        {menuKiri.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="rounded-lg mb-1 bg-white flex items-center"
            style={[styles.shadow]}
            onPress={() => handlerNavigate(item.navigate)}>
            <View className="w-[90%] my-5 flex-row items-center space-x-2">
              <MaterialCommunityIcons
                name={item.icon}
                size={30}
                color="#40513B"
              />
              <Text className="w-[80%] font-semibold">{item.nama}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View className="w-[50%] gap-2">
        {menuKanan.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="rounded-lg mb-1 bg-white flex items-center"
            style={[styles.shadow]}
            onPress={() => handlerNavigate(item.navigate)}>
            <View className="w-[90%] my-5 flex-row items-center space-x-2">
              <MaterialCommunityIcons
                name={item.icon}
                size={30}
                color="#40513B"
              />
              <Text className="w-[80%] font-semibold">{item.nama}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 5, // Intensitas bayangan
    shadowColor: '#000', // Warna bayangan
    shadowOffset: {width: 0, height: 2}, // Offset bayangan (horizontal, vertical)
    shadowOpacity: 0.2, // Tingkat transparansi bayangan
    shadowRadius: 2, // Lebar atau kabur bayangan
  },
});
