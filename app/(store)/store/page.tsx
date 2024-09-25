'use client'

import { useState } from 'react';
import Product from "../../../components/product";
import Basket from "../../../components/basket";
import styles from "../../../styles/product.module.css"
import AuthSession from "../../../components/providers/session-provider";
import GetUser from "../../../components/user-info";

export default function Store(){
  const [selectedButton, setSelectedButton] = useState({});
  const [buttons, setButons] = useState([]);

  const handleClick = (button) => {
    buttons.push(button);
    setButons(buttons);
    setSelectedButton(JSON.stringify(buttons));
  };

  const Click = (a:any) => {
    console.log(a);
  };

    return (
      <div className={styles.wrapBigContainer}>
        {/* <AuthSession>
          <GetUser></GetUser>
        </AuthSession> */}
        <Product onClick={handleClick}/>
        <Basket selectedButton={selectedButton} Click={Click}/>
      </div>
    );
}