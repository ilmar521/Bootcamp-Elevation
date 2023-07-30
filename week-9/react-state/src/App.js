import logo from './logo.svg';
import './App.css';
import Hudini from './components/Hudini';
import Landing from './components/Landing';
import Home from './components/Home';
import PageButton from './components/PageButton';
import React, { useState } from 'react'

function App() {

  let [storeData, setSoreData] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: true,
    currentPage: "Home"
  })

  const changeCurrentPage = function (page) {
    let newStoreData = {...storeData}
    newStoreData.currentPage = page
    setSoreData(newStoreData)
  }

  //Ex 1
  // return (
  //   <div>
  //     <Hudini/>
  //   </div>
  // )

  return (
    <div>
      <PageButton page={'Landing'} handler={changeCurrentPage}/>
      <PageButton page={'Home'} handler={changeCurrentPage}/>
      {storeData.currentPage === "Landing" ? (
        <Landing storeData={storeData} />
      ) : (
        <Home storeData={storeData} />
      )}
    </div>
  );
}

export default App;
