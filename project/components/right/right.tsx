import styles from "./right.module.css"

const more_link_list = [
    "关于头条", "加入头条", "媒体报道", "媒体合作", "产品合作", "合作说明", "广告投放", "联系我们",
    "用户协议", "隐私政策", "侵权投诉", "廉洁举报", "企业认证", "肺炎求助", "辟谣专区"
]

const friendly_link_list= [
    "光明网","央广网","国际在线","中国西藏网","参考消息","环球网","中青在线","中青网","中工网","海外网","中国网","未来网","千龙网",
    "新京报","北青网","法制晚报","北京晨报","北京商报","北京娱乐信报","奥一网","金羊网","华商网","新民网","红网","中国江苏网",
    "中国江西网","齐鲁网","南海网","安徽网","河北新闻网","闽南网","海峡网","华声在线","中国蓝TV","北国网","龙虎网","东莞时间网",
    "懂车帝","汽车之家","Onlylady女人志","中国搜索","每日经济新闻","网上车市","网通社汽车","北方网","湖南省旅发委官网","乐居网",
    "人民论坛网","中国财富网"
]

export default function Right() {
    return (
        <div className={styles.right}>
            <div className={styles.search_box}>
                <input
                    className={styles.search_input}
                    type="text"
                    placeholder="搜索站内资讯、视频或用户"
                />
                <button className={styles.search_button}>搜索</button>
            </div>

            <div className={styles.login_box}>
                <p className={styles.login_text}>
                    登录后可以保存您的浏览喜好、评论、收藏并与APP同步，更可以发布微头条
                </p>
                <p className={styles.login_button}>登录</p>

                <div className={styles.login_link}>
                    <img className={styles.login_icon} src="/images/qq.png" alt="QQ"/>
                    <span>QQ</span>
                </div>

                <div className={styles.login_link}>
                    <img className={styles.login_icon} src="/images/weixin.png" alt="Wechat"/>
                    <span>微信</span>
                </div>

            </div>

            <div className={styles.link_box}>
                <h3>更多</h3>
                <ul className={styles.link_list}>
                    {more_link_list.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.link_box}>
                <h3>友情链接</h3>
                <ul className={styles.link_list}>
                    {friendly_link_list.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.link_box}>
                &copy 2021 今日头条<br/>
                扫黄打非网上举报<br/>
                网络谣言曝光台<br/>
                ……
            </div>
        </div>
    )
}