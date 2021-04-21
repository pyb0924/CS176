import styles from './albumInfo.module.css'
export default function AlbumInfo(){
    return (
        <div className={styles.albumInfo}>
            <img className={styles.albumImage} src="https://i.imgur.com/xDSTaej.jpg"/>
            <div className={styles.albumText}>
                <div className={styles.mainInfo}>
                    <p className={styles.title}>CattyBoard Top 100 Single Charts(11.06.36)</p>
                    <p className={styles.artist}>Unknown Artist</p>
                    <p className={styles.artist}> 2016 . Charts . 100 songs</p>
                </div>
                <div className={styles.albumControl}>
                    <i className="fa fa-play"> &nbsp;Play all</i>
                    <i className="fa fa-plus"> &nbsp;Add to</i>
                    <i className="fa fa-ellipsis-h">&nbsp;&nbsp;More</i>
                </div>
            </div>
        </div>
    )
}