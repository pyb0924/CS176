import React from 'react';
import styles from './MyAlbum.module.css'
import Image from "next/image";

interface MyAlbumProps{
    coverUrl:string
    headerUrl:string
    userName:string
    title:string
}
function MyAlbum(props:MyAlbumProps) {
    const {coverUrl,headerUrl,userName,title}=props
    return (
        <div className={styles.myAlbum}>
            <div className={styles.myAlbumInfo}>
                <Image className={styles.myAlbumCover} src={coverUrl} width={150} height={150}/>
                <div className={styles.myAlbumText}>
                    <div className={styles.myAlbumTitle}>{title}</div>
                    <div className={styles.myAlbumUser}>{userName}</div>
                </div>

            </div>
            <div className={styles.mySongList}>1324</div>
        </div>

    );
}

export default MyAlbum;