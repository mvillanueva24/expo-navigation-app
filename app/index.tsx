import { Redirect } from "expo-router";
import React from "react";

const App = () => {
  return <Redirect href="/(stack)/home" />;

  // return (
  //   <SafeAreaView>
  //     <View className="mt-5 mx-2.5">
  //       <Text className="text-4xl font-work-black text-primary">
  //         Hola mundo
  //       </Text>

  //       <Text className="text-3xl font-work-medium text-secondary-100">
  //         Hola mundo
  //       </Text>

  //       <Text className="text-2xl font-work-light text-secondary-200">
  //         Hola mundo
  //       </Text>

  //       <Text className="text-xl text-tertiary">Hola mundo</Text>

  //       <Link href="/products/index.tsx">Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
