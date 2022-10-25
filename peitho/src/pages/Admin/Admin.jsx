import { useState } from "react";
import Footer from "../../components/shared-components/Footer";
import MobileNavbar from "../../components/shared-components/MobileNavbar";
import Navbar from "../../components/shared-components/Navbar";
import Ticker from "../../components/shared-components/Ticker";
import TransitionIn from "../../components/shared-components/TransitionIn";
import TransitionOut from "../../components/shared-components/TransitionOut";

// import "../../styles/landing.css";
import EnhancedTable from "./AdminTable2";

export default function Admin() {
  const [screenTransition, setScreenTransition] = useState(false);

  // useEffect(() => {
  //   if(localStorage.getItem("flag")){
  //     localStorage.removeItem("flag")
  //    }
  // }, [])

  return (
    <>
      {screenTransition ? <TransitionOut /> : <TransitionIn />}

      <div>
        <Ticker />
        <Navbar
          screenTransition={screenTransition}
          setScreenTransition={setScreenTransition}
        />
        <MobileNavbar
          screenTransition={screenTransition}
          setScreenTransition={setScreenTransition}
        />
        <div className="container">
          <EnhancedTable />
        </div>
        <Footer />
      </div>
    </>
  );
}
