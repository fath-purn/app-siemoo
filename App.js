import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./Authorize/AuthProvider";


const queryClient = new QueryClient();

import Navigate from "./navigate/Navigate";
 
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthProvider>
            <Navigate />
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;