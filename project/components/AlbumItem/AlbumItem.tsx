import React from 'react';
import Image from "next/image";
import styles from "./AlbumItem.module.css"

interface albumProps{
    coverUrl:string
    title:string
    size:number
}
function AlbumItem(props:albumProps) {
    const {coverUrl,title,size}=props

    return (
        <div className={styles.albumItem}>
            <Image className={styles.albumCover} src={coverUrl} height={50} width={50}/>
            <div className={styles.albumInfo}>
                <span className={styles.albumTitle}>{title}</span>
                <span className={styles.albumSize}>{size+'首'}</span>
            </div>
        </div>
    );
}

export default AlbumItem;