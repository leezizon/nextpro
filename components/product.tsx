"use client"

import { useEffect, useState } from 'react';
import styles from "../styles/product.module.css"
import { getDownloadURL, ref } from 'firebase/storage';
import {productDb} from "../app/utils/authOptions";
import {productStorage} from "../app/utils/authOptions";

// import {inBasket} from "../components/basket"

interface Product {

}


export default function Product({ onClick }){
    const [info1, setInfo1] = useState(null);
    const [info2, setInfo2] = useState(null);
    const [willgetinfo, setWillgetinfo] = useState(null);
    const [firstIdx, setFirstIdx] = useState(0);


    useEffect(() => {
        const fetchInitialData = async () => {
          const data = await productDb();
          setWillgetinfo(data);
        };
    
        fetchInitialData();
      }, []);



    const onScroll = (e) => {
        if (e.deltaY > 0) {
            setFirstIdx(firstIdx+3);
        }else{
            setFirstIdx(firstIdx-3);
        }
        console.log('scrolll');
    }

    useEffect(() => {
        if(willgetinfo){
            const fetchImage = async () => {
                  try {
                    const infos1 = willgetinfo.docs.map(async(doc,index)=>{
                        console.log(firstIdx);
                        if(index < 3 + firstIdx && index >= 0 +firstIdx ){
                            const imageRef = ref(productStorage, `item/${doc.data().Pdid}.png`); // 이미지 경로
                            const url = await getDownloadURL(imageRef);
                            return (
                                <div className={styles.product}>
                                    <div>{doc.data().PdNm}</div>
                                    <img src = {url} />
                                    <div className={styles.buttonLine}>
                                        <button onClick={() => onClick({price:doc.data().PdPrice,id:doc.data().Pdid})}>{doc.data().PdPrice}</button>
                                        <button>설명</button>
                                    </div>
                                </div>
                            )
                        }
                    })
        
                    const infos2 = willgetinfo.docs.map(async(doc,index)=>{
                        if(index>= 3 + firstIdx && index < 6 +firstIdx){
                            const imageRef = ref(productStorage, `item/${doc.data().Pdid}.png`); // 이미지 경로
                            const url = await getDownloadURL(imageRef);
        
                            // const getProduct = () => {
                            //     inBasket(doc.data().PdNm);
                            // }
        
                            return (
                                <div className={styles.product}>
                                    <div>{doc.data().PdNm}</div>
                                    <img src = {url} />
                                    <div className={styles.buttonLine}>
                                        <button onClick={() => onClick({price:doc.data().PdPrice,id:doc.data().Pdid})}>{doc.data().PdPrice}</button>
                                        <button>설명</button>
                                    </div>
                                </div>
                            )
                        }
                    })
        
                    setInfo1(infos1);
                    setInfo2(infos2);
                  } catch (error) {
                    console.error('Error fetching image:', error);
                  }
                };
                fetchImage();
        }
    },[firstIdx,willgetinfo]);
    

    return(
        <div className={styles.wrapProductContainer} onWheel={onScroll}>
            <div className={styles.bar}></div>
            <div className={styles.container}>
                {info1}
            </div>
            <div className={styles.bar}></div>
            <div className={styles.container}>
                {info2}
            </div>
            <div className={styles.bar}></div>
        </div>
    );
}