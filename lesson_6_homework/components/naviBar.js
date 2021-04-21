import styles from './naviBar.module.css'

export default function NaviBar(){
    return (
        <div className={styles.naviBar}>
            <i className="fa fa-bars"/>
            <i className="fa fa-home"/>
            <i className="fa fa-search"/>
            <i className="fa fa-volume-up"/>
            <i className="fa fa-user"/>
            <i className="fa fa-spotify"/>
            <i className="fa fa-cog"/>
            <i className="fa fa-soundcloud"/>
        </div>
    )
}
