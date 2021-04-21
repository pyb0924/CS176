import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FootBar from "../components/footBar";
import NaviBar from "../components/naviBar";
import AlbumInfo from "../components/albumInfo";
import MainInfo from "../components/mainInfo";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>My Catty Music</title>
                <link rel='stylesheet'
                      href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
                <link rel='stylesheet'
                      href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/FontAwesome.otf'/>
                <link rel='stylesheet'
                      href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2'/>
                <link rel='stylesheet'
                      href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff'/>
                <link rel='stylesheet'
                      href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot'/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <NaviBar/>
                <div className={styles.content}>
                    <AlbumInfo/>
                    <MainInfo/>
                </div>
            </main>
            <FootBar/>
        </div>
    )
}
//TODO fix footer bottom