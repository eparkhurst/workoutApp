import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persist from "../../data/configureStore";
import { Provider as PaperProvider } from "react-native-paper";
import NavContainer from "./NavContainer";

const { store, persistor } = persist();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavContainer />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
