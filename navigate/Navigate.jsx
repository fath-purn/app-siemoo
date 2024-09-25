import React, {useEffect, useState, useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useIsFocused} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

// auth
import { AuthContext } from '../Authorize/AuthProvider';

// screen
import Login from '../src/screens/Login.screen';
import Register from '../src/screens/Register.screen';
import Dashboard from '../src/screens/Dashboard.screen';
import Lab from '../src/screens/Lab.screen';
import Lapak from '../src/screens/Lapak.screen';
import EdukasiScreen from '../src/screens/Edukasi.screen';
import SulapScreen from '../src/screens/Sulap.screen';
import OlahPanganScreen from '../src/screens/OlahPangan.screen';
import BeriPakanScreen from '../src/screens/BeriPakan.screen';
import DeteksiSaKitScreen from '../src/screens/Sakit.screen';
import GetStartedOneScreen from '../src/screens/getStarted/GetStartedOne.screen';
import GetStartedTwoScreen from '../src/screens/getStarted/GetStartedTwo.screen';
import GetStartedThreeScreen from '../src/screens/getStarted/GetStartedThree.screen';
import GetStartedFourScreen from '../src/screens/getStarted/GetStartedFour.screen';

import AmbilGambarScreen from '../src/screens/DeteksiSakit/AmbilGambar.screen';
import HasilDeteksiSakitScreen from '../src/screens/DeteksiSakit/HasilDeteksiSakit.screen';
import KlinikListScreen from '../src/screens/DeteksiSakit/KlinikList.screen';
import KlinikDeskripsiScreen from '../src/screens/DeteksiSakit/KlinikDeskripsi.screen';
import RiwayatScreen from '../src/screens/DeteksiSakit/Riwayat.screen';
import ArtikelScreen from '../src/screens/DeteksiSakit/Artikel.screen';

export default Navigate = () => {
  const {userToken, isLoading} = useContext(AuthContext);
  const isFocused = useIsFocused();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  // akan digunakan setelah menggunakan authcontext dan terkoneksi dengan API
  function Root() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard-screen" component={Dashboard} />
        <Stack.Screen
          name="Lab-screen"
          component={Lab}
        />
        <Stack.Screen
          name="Lapak-screen"
          component={Lapak}
        />
        <Stack.Screen
          name="Edukasi-screen"
          component={EdukasiScreen}
        />
        <Stack.Screen
          name="Sulap-screen"
          component={SulapScreen}
        />
        <Stack.Screen
          name="Olah-Pangan-screen"
          component={OlahPanganScreen}
        />
        <Stack.Screen
          name="Beri-Pakan-screen"
          component={BeriPakanScreen}
        />
        <Stack.Screen
          name="Sakit-screen"
          component={DeteksiSaKitScreen}
        />
        <Stack.Screen
          name="AmbilGambar-screen"
          component={AmbilGambarScreen}
        />
        <Stack.Screen
          name="HasilDeteksiSakit-screen"
          component={HasilDeteksiSakitScreen}
        />
        <Stack.Screen
          name="KlinikList-screen"
          component={KlinikListScreen}
        />
        <Stack.Screen
          name="KlinikDeskripsi-screen"
          component={KlinikDeskripsiScreen}
        />
        <Stack.Screen
          name="Riwayat-screen"
          component={RiwayatScreen}
        />
        <Stack.Screen
          name="Artikel-screen"
          component={ArtikelScreen}
        />
      </Stack.Navigator>
    );
  }

  // StatusBar.setHidden(true);

  return (
    <>
      {/* akan digunakan setelah menggunakan authcontext dan terkoneksi dengan API */}
      {userToken && isFocused ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="auth">
        {/* <Stack.Screen
          name="GetStartedOneScreen-screen"
          component={GetStartedOneScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStartedTwoScreen-screen"
          component={GetStartedTwoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStartedThreeScreen-screen"
          component={GetStartedThreeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStartedFourScreen-screen"
          component={GetStartedFourScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Login-screen"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register-screen"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      )}
    </>
  );
};
