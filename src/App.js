import React,{useEffect,useState,useCallback} from 'react';
import styles from "./App.module.css";

const App = () => {
  // console.log("a",window.scrollY)
  const [y, setY] = useState(document.scrollingElement.scrollHeight);

  const handleNavigation = useCallback(
    (e) => {
      
      if (y > window.scrollY) {
        console.log("scrolling up");
      } else if (y < window.scrollY) {
        console.log("scrolling down");
      }
      setY(window.scrollY)
    },
    [y]
  );

  useEffect(() => {
    // setY(window.scrollY);
    document.body.scrollTop =  document.scrollingElement.scrollHeight;
    console.log("scrollheight",document.scrollingElement.scrollHeight);
    console.log('setted',y)
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

 const handleClick = () => {
  document.documentElement.scrollTop = 100;
  }
  return (
    <section className={styles.main_container}>
      <h1>Top</h1>
      <h2>Middle</h2>
      <h3 onClick={handleClick}>End</h3>
    </section>
  )
}

export default App
