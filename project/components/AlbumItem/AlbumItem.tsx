import React from 'react';
import Image from "next/image";
import styles from "./AlbumItem.module.css"
import Link from 'next/link'

interface albumProps {
    index: number
    coverUrl: string
    title: string
    size: number
    changeAlbum: any
}

function AlbumItem(props: albumProps) {
    const {index, coverUrl, title, size,changeAlbum} = props

    return (
        <div className={styles.albumItem} onClick={changeAlbum(index)}>
            <Image className={styles.albumCover} src={coverUrl} height={50} width={50}/>
            <div className={styles.albumInfo}>
                <span className={styles.albumTitle}>{title}</span>
                <span className={styles.albumSize}>{size + '首'}</span>
            </div>
        </div>

    );
}

export default AlbumItem;