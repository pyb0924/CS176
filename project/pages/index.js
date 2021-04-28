import Head from 'next/head'
import Left from "../components/left/left";
import Center from "../components/center/center";
import Right from "../components/right/right";
import HeaderBar from "../components/headerBar/headerBar";
import styles from "../styles/Home.module.css"

export async function getServerSideProps(context) {
    const res = await fetch("http://localhost:3000/api/getNews");
    const result = await res.json()
    return {
        props:{
            data:result
        }
    }
}

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>今日头条</title>
            </Head>
            <HeaderBar/>
            <main className={styles.main}>
                <Left left/>
                <Center data={props.data} center/>
                <Right right/>
            </main>
        </div>
    )
}
