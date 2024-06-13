import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const myContext = createContext();

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/posts')
      .then((response) => setData(response.data.posts));
  }, []);
  return (
    <myContext.Provider value={{ data }}>
      <header style={{ paddingBottom: '35px' }}>
        <Header />
      </header>
      <Outlet />
    </myContext.Provider>
  );
}

export default App;
