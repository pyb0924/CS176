import React from 'react';
import styles from './MySideBar.module.css'
import AlbumItem from "../AlbumItem/AlbumItem";

interface SideBarProps{
    album_list:Array<any>
    changeAlbum:any
}

function MySideBar(props:SideBarProps) {

    const {album_list,changeAlbum} = props
    return (
        <div className={styles.mySideBar}>
            <h2>我的歌单</h2>
            {album_list.map((value, index) => {
                return (
                    <AlbumItem index={index} changeAlbum={changeAlbum} key={index} coverUrl={value.logo} title={value.dissname} size={value.songnum}/>
                )
            })}
        </div>
    );
}

export default MySideBar;