// import React, { useState } from 'react';
import './Home.css';
import Header from '../../Header/Header';
import ExploreMenu from '../../Header/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  );
}

export default Home;
