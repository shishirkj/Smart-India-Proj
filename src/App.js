import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Books from "./features/books/Books";
import Navbar from "./features/components/NavBar";
import Home from "./features/components/Home";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {/* we cant write like {isAuthenticated?<Navbar/>&&<Books/>:<Home/>} */}
{/* 
      {isAuthenticated ? (
        <> <Navbar /><Books /> </>) : (<Home />)} */}

          




    </div>
  );
}

export default App;
