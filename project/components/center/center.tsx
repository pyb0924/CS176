import styles from "./center.module.css"
import News from "../news/news";
import {useEffect, useState} from "react";



export default function Center(props:any) {

    return (
        <div className={styles.center}>
            <div className={styles.alert_bar}>您有未读新闻，点击查看</div>
            {props.data.map((item:any, index:number) => (
                <News data={item} key={index}/>
            ))}
        </div>
    )
}