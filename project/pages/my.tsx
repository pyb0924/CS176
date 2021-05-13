import React from 'react';
import Head from "next/head";
import HeadBar from "../components/HeadBar/HeadBar";
import styles from "../styles/My.module.css"
import MySideBar from "../components/MySideBar/MySideBar";
import MyAlbum from "../components/MyAlbum/MyAlbum";
import BottomBar from "../components/BottomBar/BottomBar";


export default function My(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>我的音乐</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/logo.ico"/>
            </Head>

            <HeadBar isDiscover={false}/>

            <div className={styles.main}>
                <MySideBar className={styles.mySideBar}/>
                {/*<MyAlbum coverUrl='/logo.ico' headerUrl='/logo.ico' userName='userName' title='title'/>*/}
            </div>

            <BottomBar songUrl='http://isure.stream.qqmusic.qq.com/M500003qTVUM3RwEX2.mp3?guid=1344499355&vkey=41568C5FB1CC8DF308E32EB7F91347DBF7AB920A0B8A31329A9F39AB82E7070CE19CA2BBC32A8A7EFC870228DB013388D5321720E01E5826&uin=&fromtag=66' title='songTitle' length={123} coverUrl={'/logo.ico'} singer={'singer'}/>
        </div>

    );
}