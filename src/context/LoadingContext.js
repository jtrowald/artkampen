//Context for the App

import React, { useState, useEffect } from "react";
import Auth from "@aws-amplify/auth";
import { API, graphqlOperation } from "aws-amplify";
import { useNavigation, useRoute } from "@react-navigation/native";

export const LoadingContext = React.createContext();
export const LoadingConsumer = LoadingContext.Consumer;

export const useLoadingContext = () => React.useContext(LoadingContext);

export const LoadingProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (loading) {
      navigation.navigate("LoadingModal");
    }
  }, [loading]);

  return (
    <LoadingContext.Provider
      value={{
        setLoading,
        loading,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
};

export default useLoadingContext;
