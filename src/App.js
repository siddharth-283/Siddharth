import { useEffect, useState } from "react";
import Navbar from './scenes/Navbar'
import DotGroup from './scenes/DotGroup' 
import Landing from './scenes/Landing' 
import useMediaQuery from './hooks/useMediaQuery'


function App() {
  
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useState("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectPage={selectedPage}
        setSelectPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectPage={setSelectedPage}
          />
        )}
        <Landing setSelectPage={setSelectedPage}/>
      </div>
    </div>
  );
}

export default App;
