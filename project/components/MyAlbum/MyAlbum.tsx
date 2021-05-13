import React from 'react';
import styles from './MyAlbum.module.css'
import Image from "next/image";
import SongList from '../SongIist/SongIist'

interface MyAlbumProps {
    coverUrl: string
    headerUrl: string
    userName: string
    title: string
    description:string
    song_list:Array<any>
    beginPlaying:any
}

function MyAlbum(props: MyAlbumProps) {
    const {coverUrl, headerUrl, userName, title,song_list,description,beginPlaying} = props
    return (
        <div className={styles.myAlbum}>
            <div className={styles.myAlbumInfo}>
                <Image className={styles.myAlbumCover} src={coverUrl} width={150} height={150}/>
                <div className={styles.myAlbumText}>
                    <div className={styles.myAlbumTitle}>{title}</div>
                    <div className={styles.myAlbumUser}>
                        <img className={styles.userHeader} src={headerUrl} alt='user'/>
                        <p className={styles.userName}>{userName}</p>
                    </div>
                    <p className={styles.desc}>{description}</p>
                </div>

            </div>
            <div className={styles.listTitleContainer}>
                <span className={styles.listTitle}>歌曲列表</span>
                <span className={styles.songNum}>{song_list.length}首歌</span>
            </div>
            <div>
                <div className={styles.header}>
                    <p>歌曲标题</p>
                    <p>时长</p>
                    <p>歌手</p>
                    <p>专辑</p>
                </div>
                <SongList data={song_list} beginPlaying={beginPlaying}/>
            </div>
        </div>

    );
}

export default MyAlbum;