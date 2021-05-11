import React from 'react';
import styles from './MySideBar.module.css'
import AlbumItem from "../AlbumItem/AlbumItem";

function MySideBar(props) {
    return (
        <div className={styles.mySideBar}>
            <AlbumItem coverUrl={'/logo.ico'} title='歌单' size={5}/>
            <AlbumItem coverUrl={'/logo.ico'} title='歌单' size={5}/>
            <AlbumItem coverUrl={'/logo.ico'} title='歌单' size={5}/>
        </div>
    );
}

export default MySideBar;