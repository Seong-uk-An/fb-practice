import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService, authStateChanged } from "../fb";

function App() {
  const currentUser = authService.currentUser;
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authStateChanged(
      authService,
      (user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setInit(true);
      },
      (err) => {
        console.error(err);
      },
      (complete) => {
        console.log(complete);
      }
    );
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; myApp {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
