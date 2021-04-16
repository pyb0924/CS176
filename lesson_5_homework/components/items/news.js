import styles from "./news.module.css"

export default function News(props){
    return (
        <div className={styles.main_item}>
            <img
                className={styles.main_img}
                src="images/main.png"
                alt="不重要的新闻图片"
            />
            <h2 className={styles.main_header}>不重要的新闻标题{props.data.id}</h2>
            <div>
                <img
                    className={styles.news_icon}
                    src="images/newsicon.png"
                    alt="icon"
                />
                <a className={styles.area}>分区</a>
                <a className={styles.main_bottom}>xx评论</a>
                <a>xx小时前</a>
            </div>
        </div>
    )
}