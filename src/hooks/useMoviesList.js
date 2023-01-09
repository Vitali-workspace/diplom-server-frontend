import { useState, useEffect, useCallback } from 'react';


function useMoviesList() {

  const getScreenWidth = useCallback(() => window.innerWidth, []);
  const [isWindow, setWindow] = useState(getScreenWidth());


  useEffect(() => {

    function handleResize() {
      setWindow(getScreenWidth());
    };
    window.addEventListener('resize', controlResize, false);

    let timeResizeScreen;

    function controlResize() {
      if (!timeResizeScreen) {
        timeResizeScreen = setTimeout(() => {
          timeResizeScreen = null;
          handleResize();
        }, 2000);
      }
    };

    return () => window.removeEventListener('resize', handleResize);

  }, [getScreenWidth]);

  return isWindow;
};

export default useMoviesList;
