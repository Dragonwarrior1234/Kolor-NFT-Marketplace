import React, { Suspense } from "react";
import { CookiesProvider } from "react-cookie";
import Pages from "./pages";
import './App.css';

function App() {
  return (
    <CookiesProvider>
      <Suspense>
        <Pages />
      </Suspense>
    </CookiesProvider>
  );
}

export default App;
