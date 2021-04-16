import styles from "./left.module.css"

const navi_list = [
    {id: "西瓜视频", link: "https://www.ixigua.com/"},
    {id: "热点", link: "https://www.toutiao.com/ch/news_hot/"},
    {id: "直播", link: "https://live.ixigua.com/"},
    {id: "图片", link: "https://www.toutiao.com/ch/news_image/"},
    {id: "科技", link: "https://www.toutiao.com/ch/news_tech/"},
    {id: "娱乐", link: "https://www.toutiao.com/ch/news_entertainment/"},
    {id: "游戏", link: "https://www.toutiao.com/ch/news_game/"},
    {id: "体育", link: "https://www.toutiao.com/ch/news_sports/"},
    {id: "懂车帝", link: "https://www.dongchedi.com/?zt=tt_pc_home_channel"},
    {id: "财经", link: "https://www.toutiao.com/ch/news_finance/"},
    {id: "数码", link: "https://www.toutiao.com/ch/digital/"},
]
export default function Left() {
    return (
        <div className={styles.left}>
            <a href="/"><img
                id="logo"
                src="images/logo.png"
                alt="今日头条"
            /></a>
            <a href="/" className={styles.recommend}>推荐</a>

            {navi_list.map((item, index) => (
                <a className={styles.navigate} href={item.link} key={index}>{item.id}</a>
            ))}
        </div>
    )
}