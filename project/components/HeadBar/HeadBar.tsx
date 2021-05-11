import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import styles from './HeaderBar.module.css'
import Link from "next/link";

interface headerProps {
    isDiscover: boolean
}


function HeadBar(props: headerProps) {

    const {isDiscover} = props

    return (

        <div className={styles.headerBar}>
            <div className={styles.headerLeft}>
                <Image src="/logo.png" width={90} height={50} alt="logo"/>
                <Link href="/">
                    <a className={styles.headerTitle}>网易云音乐</a>
                </Link>
                <Link href="/">
                    <span className={styles.headerItem}
                          style={{backgroundColor: isDiscover ? '#bb3737' : '#ec4141'}}>发现音乐</span>
                </Link>
                <Link href="/my">
                    <span className={styles.headerItem}
                          style={{backgroundColor: isDiscover ? '#ec4141' : '#bb3737'}}>我的音乐</span>
                </Link>

                <Link href="https://music.163.com/#/download">
                    <a className={styles.headerItem}>下载客户端</a>
                </Link>

            </div>

            <div className={styles.headerRight}>
                <form className={styles.searchForm}>
                    <input type="text" className={styles.searchBox} placeholder="搜索"/>
                    <input type="button" className={styles.searchBtn}/>
                </form>
                <button className={styles.creatorBtn}>创作者中心</button>
            </div>
        </div>


    );
}

export default HeadBar;