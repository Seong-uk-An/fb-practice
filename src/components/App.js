import { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "../fb";

function App() {
  const user = authService.currentUser;
  const [isLoggedIn, setIsLoggedIn] = useState(user);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; myApp {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
