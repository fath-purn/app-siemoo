import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import GlobalStyle from '../../utils/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Navbar() {
  //handle screen
  const navigation = useNavigation();
  const handleLab = () => {
    navigation.navigate('lab');
  };
  const handleLapak = () => {
    navigation.navigate('lapak');
  };
  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 7,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 10,
        elevation: 5,
      }}>
      <View style={GlobalStyle.containerMenu}>
        <View style={GlobalStyle.menu}>
          <TouchableOpacity style={GlobalStyle.menuItem}>
            <Image
              style={[GlobalStyle.ping]}
              source={require('../../../assets/home.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyle.menuItem} onPress={handleLab}>
            <Image
              style={[GlobalStyle.ping]}
              source={require('../../../assets/uji.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyle.menuItem} onPress={handleLapak}>
            <Image
              style={[GlobalStyle.ping]}
              source={require('../../../assets/lapak.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyle.menuItem}>
            <Image
              style={[GlobalStyle.ping]}
              source={require('../../../assets/health.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Navbar;
