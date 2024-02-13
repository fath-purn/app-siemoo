import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const ArtikelDaftar = ({data, index}) => {
  const [open, setOpen] = useState(false);

  const toggleDescription = () => {
    setOpen(!open);
  };

  return (
    <View
      className="bg-white rounded-lg mt-3"
      key={data.id}
      style={[styles.shadow]}>
      <Image
        source={{
          uri: data.media[0].link,
        }}
        className="w-full h-[200px] overflow-hidden rounded-t-lg"
      />
      <View className="flex items-center">
        <View className="my-5 w-[90%]">
          <Text className="text-lg font-bold text-[#40513B] mb-2">
            {data.judul}
          </Text>
          <Text className="text-base text-[#40513B]">
            {data.deskripsi.length > 50
              ? open
                ? data.deskripsi
                : data.deskripsi.slice(0, 50) + '...'
              : data.deskripsi}
          </Text>

          {data.deskripsi.length > 50 && (
            <TouchableOpacity onPress={toggleDescription}>
              <Text className="text-[#3498db]">
                {open ? 'Read less' : 'Read more'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default ArtikelDaftar;

const styles = StyleSheet.create({
  shadow: {
    elevation: 2, // Intensitas bayangan
    shadowColor: '#000', // Warna bayangan
    shadowOffset: {width: 0, height: 2}, // Offset bayangan (horizontal, vertical)
    shadowOpacity: 0.2, // Tingkat transparansi bayangan
    shadowRadius: 2, // Lebar atau kabur bayangan
  },
});
