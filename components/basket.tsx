"use client"
import { useEffect, useState } from 'react';
import styles from "../styles/basket.module.css"


export default function Basket( {selectedButton, Click} ){
    // console.log(selectedButton);
    if(typeof selectedButton === 'string'){

    }else{
        selectedButton = '[{}]';
    }

    let productSum = 0;

    const a = JSON.parse(selectedButton).map((button,index)=>{
        productSum=productSum+button.price
        return (
            <div key={index}>
                {button.price}
            </div>
        )
        }
    )

    return (
    <div className={styles.container}>
        <div className={styles.BInProducts}>
            {a}
        </div>
        <div className={styles.buyResult}>
            <div>현재 잔액 : 현재잔액</div>
            <div onClick={()=>Click('asd')} className={styles.resultButton}>{productSum ? productSum : "0"}</div>
        </div>
    </div>
    )
}