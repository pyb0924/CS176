import React, {useEffect, useRef, useState} from 'react';
import Head from "next/head";
import HeadBar from "../components/HeadBar/HeadBar";
import styles from "../styles/My.module.css"
import MySideBar from "../components/MySideBar/MySideBar";
import MyAlbum from "../components/MyAlbum/MyAlbum";
import BottomBar from "../components/BottomBar/BottomBar";

export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/my_album.json')
    let album = await res.json()
    album = album.data.cdlist

    const id = album[0].dissid
    const res2 = await fetch('http://localhost:3200/getSongListDetail?disstid=' + id)
    let data2 = await res2.json()
    data2 = data2.response.cdlist[0]

    const songId = data2.songlist[0].mid
    const res3 = await fetch('http://localhost:3200/getSongInfo?songmid=' + songId)
    let song = await res3.json()
    song = song.response.songinfo.data.track_info

    const resUrl = await fetch('http://localhost:3200/getMusicPlay?songmid=' + songId)
    let url = await resUrl.json()

    return {
        props: {
            album_list: album,
            initAlbum: data2,
            initSong: song,
            initSongUrl: url.data.playUrl[songId].url
        }, // will be passed to the page component as props
    }
}

export default function My(props) {
    const {album_list, initAlbum, initSong, initSongUrl} = props

    const [playing, setPlaying] = useState(false);
    const [albumIndex, setAlbumIndex] = useState(0);
    const [songIndex, setSongIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);

    const [albumInfo, setAlbumInfo] = useState(initAlbum);
    const [songUrl, setSongUrl] = useState(initSongUrl);
    const [song, setSong] = useState(initSong);
    const [volume, setVolume] = useState(0.5);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const id = album_list[albumIndex].dissid
            const res = await fetch('http://localhost:3200/getSongListDetail?disstid=' + id)
            let data = await res.json()
            data = data.response.cdlist[0]
            setAlbumInfo(data)

            const songId = data.songlist[0].mid
            const res3 = await fetch('http://localhost:3200/getSongInfo?songmid=' + songId)
            let song = await res3.json()
            setSong(song.response.songinfo.data.track_info)

            const resUrl = await fetch('http://localhost:3200/getMusicPlay?songmid=' + songId)
            let url = await resUrl.json()

            setSongUrl(url.data.playUrl[songId].url)
        }
        fetchData()
    }, [albumIndex]);

    useEffect(() => {
        const fetchSongInfo = async () => {
            const id = albumInfo.songlist[songIndex].mid
            const res = await fetch('http://localhost:3200/getSongInfo?songmid=' + id)
            let data = await res.json()
            setSong(data.response.songinfo.data.track_info)

            const resUrl = await fetch('http://localhost:3200/getMusicPlay?songmid=' + id)
            let url = await resUrl.json()

            setSongUrl(url.data.playUrl[id].url)
        }
        fetchSongInfo()
    }, [songIndex]);

    useEffect(() => {
        myMedia.current.volume=volume;
    }, [volume]);

    const myMedia = useRef(null);

    const changePlaying = (event) => {
        if (playing) {
            myMedia.current.pause()
        } else {
            myMedia.current.volume = 0.5
            myMedia.current.play()
        }
        setPlaying(!playing)
    }

    const beginPlaying = (index) => {
        return (event) => {
            setAutoPlay(true)
            setPlaying(true)
            setSongIndex(index)
        }
    }

    const changeMute = (event) => {
        if (volume > 0) {
            event.target.src = '/mute.svg'
            setVolume(0);
        } else {
            event.target.src = '/volume.svg'
            setVolume(0.5)
        }
    }

    const handleTimeUpdate = () => {
        console.log(myMedia.current.currentTime)
        setProgress(myMedia.current.currentTime)
    }

    const changeAlbum = (index) => {
        return (event) => {
            setAlbumIndex(index)
            setAutoPlay(false)
        }
    }

    const checkAutoPlay = () => {
        if (autoPlay) {
            myMedia.current.play()
        }
    }

    const playNext = () => {
        const next = songIndex === albumInfo.songlist.length ? 0 : songIndex + 1
        setAutoPlay(true)
        setSongIndex(next)
    }

    const playPrev = () => {
        const prev = songIndex === 0 ? albumInfo.songlist.length - 1 : songIndex - 1
        setAutoPlay(true)
        setSongIndex(prev)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>我的音乐</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/logo.ico"/>
            </Head>

            <HeadBar isDiscover={false}/>

            <div className={styles.main}>
                <MySideBar album_list={album_list} changeAlbum={changeAlbum}/>
                <MyAlbum beginPlaying={beginPlaying} coverUrl={albumInfo.logo} headerUrl={albumInfo.headurl}
                         userName={albumInfo.nickname} title={albumInfo.dissname} description={albumInfo.desc}
                         song_list={albumInfo.songlist}/>
            </div>

            <BottomBar coverUrl={albumInfo.logo} song={song} progress={progress} changePlaying={changePlaying}
                        playing={playing} onNext={playNext} onPrev={playPrev} changeMute={changeMute}/>
            <audio ref={myMedia} src={songUrl} preload='auto' onTimeUpdate={handleTimeUpdate} onEnded={playNext}
                   onCanPlay={checkAutoPlay}/>

        </div>

    );
}