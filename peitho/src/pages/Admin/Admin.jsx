import { useEffect, useState } from "react";
import MobileNavbar from "../../components/shared-components/MobileNavbar";
import Navbar from "../../components/shared-components/Navbar";
import Ticker from "../../components/shared-components/Ticker";
import "../../styles/landing.css";
import EnhancedTable from "./AdminTable2";

export default function Admin() {
  const [loadScreen, setLoadScreen] = useState(false);

  // useEffect(() => {
  //   if(localStorage.getItem("flag")){
  //     localStorage.removeItem("flag")
  //    } 
  // }, [])

  return (
    <div>
      <Ticker />
      <Navbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
      <MobileNavbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
      <div className="container">
        <EnhancedTable />
      </div>
    </div>
  );
}
