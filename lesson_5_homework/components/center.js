import styles from "./center.module.css"
import News from "./items/news";
import {useEffect, useState} from "react";

export default function Center() {

    const [state, setState] = useState({
        data:[]
    });

    useEffect(() => {
        fetch("/api/getNews").then(async (res) => {
            const data = await res.json();
            setState({
                data
            });
        });
    }, []);

    return (
        <div className={styles.center}>
            <div className={styles.alert_bar}>您有未读新闻，点击查看</div>
            {state.data.map((item,index) => (
                <News data={item} key={index}/>
            ))}
        </div>
    )
}