import React from 'react';
import styles from './Songlist.module.css'
import transferTime from "../../util";

interface SongListProps {
    'data': Array<any>
    'beginPlaying':any
}

function SongList(props: SongListProps) {
    const {data,beginPlaying} = props
    return (
        <ul className={styles.musicList}>
            {data.map((value, index) => {
                return (
                    <li key={index} className={styles.songItem}>
                        <div className={styles.index}>
                            <span>{index+1}</span>
                            <img src='/play_black.svg' alt='play' onClick={beginPlaying(index)}/>
                        </div>

                        <p>{value.name}</p>
                        <p className="sm-hide">{transferTime(value.interval)}</p>
                        <p className="sm-text-right">{value.singer[0].name}</p>
                        <p className="sm-hide"><span className="catty-cloud">{value.album.name}</span></p>
                    </li>
                )
            })}
        </ul>

    );
}

export default SongList;