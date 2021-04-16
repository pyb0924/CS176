import styles from "./news.module.css"


function commentTransfer(comment){
    if(comment<10000){
        return comment.toString()
    }else {
        return parseInt(comment/10000)+"万"
    }
}

function timeTransfer (time){
    if(time<3600){
        return parseInt(time/60)+"分钟前";
    }else if(time<3600*24){
        return parseInt(time/3600)+"小时前";
    }else {
        return parseInt(time/(3600*24))+"天前"
    }
}

export default function News(props) {
    const curTime=Date.parse(new Date())/1000;
    const time=curTime-Number(props.data.behot_time);
    const transferredTime=timeTransfer(time);
    const transferredComment=commentTransfer(Number(props.data.comments_count));

    return (
        <div className={styles.main_item}>
            <img
                className={styles.main_img}
                src={props.data.middle_image}
                alt="不重要的新闻图片"
            />

            <h3 className={styles.main_header}>{props.data.title}</h3>
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