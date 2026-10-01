import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import InitialCheck from "./Components/LoginPage/InitialCheck";
import FirstPage from "./Components/FirstPage/FirstPage";
import SecondPage from "./Components/SecondPage/SecondPage";
import ThirdPage from "./Components/ThirdPage/ThirdPage";
import FourthPage from "./Components/FourthPage/FourthPage";
function App() {

  const [isAuthenticated , setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const storedAuth = localStorage.getItem("auth") //time
    if(storedAuth){
      try{
        const {expiry} = JSON.parse(storedAuth);
        if(Date.now() < expiry){
          setIsAuthenticated(true);
        }else{
          localStorage.removeItem("auth");
        }
      }catch(e){
        localStorage.removeItem("auth");
      }
    }
    setIsLoading(false);
  }, [])

  if (isLoading) {
    return <div className="w-screen h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialCheck setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path="/first" element={isAuthenticated ? <FirstPage/> : <Navigate to="/" replace />}/>
        <Route path="/second" element={isAuthenticated ? <SecondPage/> : <Navigate to="/" replace />}/>
        <Route path="/third" element={isAuthenticated ? <ThirdPage/> : <Navigate to="/" replace />}/>
        <Route path="/fourth" element={isAuthenticated ? <FourthPage/> : <Navigate to="/" replace />}/>
      </Routes>
    </Router>
  )
}

export default App
