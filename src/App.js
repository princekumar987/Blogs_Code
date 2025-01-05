import { useContext, useEffect } from "react";
import { Blogs } from "./Components/Blogs";
import { Header } from "./Components/Header";
import { Pagination } from "./Components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css";


export default function App() {

  const {fetchBlogPosts}=useContext(AppContext);

  useEffect(()=>{
     fetchBlogPosts()  ;
  },[])
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">

      <Header/>
      <Blogs/>
      <Pagination/>

    </div>
  );
}
