import styles from "./left.module.css"

const navi_list = [
    "西瓜视频", "热点", "直播", "图片", "科技", "娱乐", "游戏", "体育", "懂车帝", "财经", "数码", "更多"
]
export default function Left() {
    return (
        <div className={styles.left}>
            <img
                id="logo"
                src="images/logo.png"
                alt="今日头条"
            />
            <p className={styles.recommend}>推荐</p>

            {navi_list.map((item,index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}