import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
// import the provider
import { UserProvider } from "../context/User";
import { ThemeProvider } from "../context/theme";
import {ThemeContext} from "../context/theme"

function App() {
  const {theme} = useContext(ThemeContext)
  console.log(theme)
  return (
    <main className={theme}>
      {/* wrap components that need access to context data in the provider*/}
      <UserProvider>
      <ThemeProvider>
        <Header />
        <Profile />
      </ThemeProvider>
      </UserProvider>
    </main>
  );
}

export default App;

