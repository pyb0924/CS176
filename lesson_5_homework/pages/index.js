import Head from 'next/head'
import Left from "../components/left";
import Center from "../components/center";
import Right from "../components/right";
import HeaderBar from "../components/headerBar";
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div>
            <Head>
                <title>今日头条</title>
            </Head>
            <HeaderBar/>
            <main className={styles.main}>
                <Left left/>
                <Center center/>
                <Right right/>
            </main>
        </div>
    )
}
