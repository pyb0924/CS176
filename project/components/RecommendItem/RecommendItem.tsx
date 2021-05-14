import React from 'react';
import Image from "next/image";
import styles from './RecommendItem.module.css'
import {Play} from "@icon-park/react";
import Link from 'next/link'

interface recommendItemProps {
    album_id:number
    cover:string
    listen_num:number
    title:string
}
function RecommendItem(props:recommendItemProps) {
    const {album_id,cover,listen_num,title}=props

    return (
        <div className={styles.recommendItem}>
            <Link href={`/album/${album_id}`}>
                <a className={styles.cover} style={{background:`url(${cover})`}}/>
            </Link>

            <div className={styles.listen_num_wrapper}>
                <Play theme="outline" size="13" fill="#f6f6f7"/>
                <span className={styles.listen_num}>{listen_num}</span>
            </div>
            <p className={styles.title}>{title}</p>
        </div>
    );
}

export default RecommendItem;