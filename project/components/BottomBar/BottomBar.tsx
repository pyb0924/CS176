import React, {useEffect, useRef, useState} from 'react';
import styles from './BottomBar.module.css'
import Image from "next/image";
import {GoEnd, GoStart, ListTop, Play, VolumeNotice} from "@icon-park/react";
import {LinearProgress} from "@material-ui/core";
import transferTime from "../../util";

interface BottomProps {
    'coverUrl': string | null
    'song':any // length,singer,title
    'progress':number
    'changePlaying':any
    'changeVolume':any
    'playing':boolean
}

function BottomBar(props: BottomProps) {
    const {playing,progress,coverUrl, song,changePlaying,changeVolume} = props

    return (
        <div className={styles.bottomBar}>
            <div className={styles.bottomLeft}>
                <img className={styles.songCover} src={coverUrl} alt='Cover'/>
                <div className={styles.songInfo}>
                    <span className={styles.songTitle}>{song.title}</span>
                    <span className={styles.singer}>{song.singer[0].name}</span>
                </div>
            </div>

            <div className={styles.bottomCenter}>
                <div className={styles.playerButton}>
                    <GoStart className={styles.playerIcon} theme="outline" size="24" fill="#f6f6f7"/>
                    <img src={playing? '/pause.svg':'/play.svg'} alt='play' height={36} width={36} onClick={changePlaying}/>
                    <GoEnd className={styles.playerIcon} theme="outline" size="24" fill="#f6f6f7"/>
                </div>
                <LinearProgress color='secondary' variant='determinate' value={progress/song.interval*100}/>

            </div>

            <div className={styles.bottomRight}>
                <span className={styles.progressText}>{transferTime(progress) + '/' + transferTime(song.interval)}</span>
                <img className={styles.rightIcon} src='/volume.svg' alt='volume' onClick={changeVolume}/>
                <ListTop className={styles.rightIcon} theme="outline" size="24" fill="#f6f6f7"/>
            </div>

        </div>
    );
}

export default BottomBar;