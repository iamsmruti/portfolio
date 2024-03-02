import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";
import Loading from "./pages/Loading";
import LifeCheckList from "./pages/LifeCheckList";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/wishlist" element={<LifeCheckList />} />
          </Routes>
        </Layout>
      )}
    </BrowserRouter>
  );
};

export default App;
