import styles from "./news.module.css"
import Link from "next/link";

function commentTransfer(comment: number) {
    if (comment < 10000) {
        return comment.toString()
    } else {
        return (comment / 10000) + "万"
    }
}

function timeTransfer(time: number) {
    if (time < 3600) {
        return Math.floor(time / 60) + "分钟前";
    } else if (time < 3600 * 24) {
        return Math.floor(time / 3600) + "小时前";
    } else {
        return Math.floor(time / (3600 * 24)) + "天前"
    }
}


export default function News(props: any) {
    const curTime = new Date().getTime() / 1000;
    const time = curTime - Number(props.data.behot_time);
    const transferredTime = timeTransfer(time);
    const transferredComment = commentTransfer(Number(props.data.comments_count));
    const base_url='https://www.toutiao.com';
    return (
        <div className={styles.main_item}>
            <img
                className={styles.main_img}
                src={props.data.middle_image}
                alt="不重要的新闻图片"
            />

            <Link href={base_url+props.data.source_url}>
                <a className={styles.main_header} >{props.data.title}</a>
            </Link>
            <div className={styles.more_info}>

                {props.data.chinese_tag ? (
                    <a className={styles.area}>{props.data.chinese_tag}</a>
                ) : (<></>)}

                <img
                    className={styles.news_icon}
                    src={props.data.media_avatar_url}
                    alt="icon"
                />

                <span className={styles.main_bottom}>
                    {props.data.source} · {transferredComment}评论 · {transferredTime}
                </span>
            </div>
        </div>)
}