import styles from "./headerBar.module.css"
export default function HeaderBar(){
    return (
        <header className={styles.header}>
            <a className={styles.download_app}>下载APP</a>
            <a>注册头条号</a>
            <div className={styles.weather}>
                <span>北京 霾 </span>
                <span id="tem_low">8</span>
                <a>&#8451; / </a>
                <span id="tem_high">16</span>
                <a>&#8451;</a>
            </div>

            <div className={styles.header_right}>
                <a>侵权投诉</a>
                <a>头条产品</a>
            </div>
        </header>
    )
}