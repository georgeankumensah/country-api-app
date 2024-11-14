import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import useThemeStore from "./store/useThemeStore";
import { useEffect } from "react";

function App() {
  const { loadTheme } = useThemeStore();

  useEffect(() => loadTheme(), [loadTheme]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path=":countryCode" element={<CountryDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
