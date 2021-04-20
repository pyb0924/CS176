const fs = require('fs');
const request=require('request')

let raw_json = JSON.parse(fs.readFileSync('getSearchByKey.json', 'utf8'));
raw_json=raw_json.response.data.song.list;

album_ids=[]
for (const item of raw_json) {
    album_ids.push(item.album.mid);
}
console.log(album_ids)

const options={
    method:"GET",
    port:3200,
    path:'/getAlbumInfo',
    query:{"albummid":""},
    json:true
}

let song_list=[]


for (let i=0;i<album_ids.length;i++){
    const url="http://localhost:3200/getAlbumInfo?albummid="+album_ids[i];

    request(url, {json: true}, function(error, response, body){
        if(error) console.log(error);
        else {
            let req_list=body.response.data.list;
            for (const song of req_list) {
                song_list.push(
                    {
                        "album_id":song.albummid,
                        "album_name":song.albumname,
                        "song_id":song.songmid,
                        "song_name":song.songname
                    }
                );
            }
            console.log("done");

        }
    });
}

fs.writeFile('result.json',JSON.stringify(song_list),'utf8',err => {
    if(err)throw err;
    console.log("done")
})








