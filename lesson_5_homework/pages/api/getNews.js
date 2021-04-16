// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path";
import fs from "fs"

const fileName=path.join(process.cwd(),'public/news.json')
export default (req, res) => {
    const fileContents=fs.readFileSync(fileName,'utf-8')
    const {data}=JSON.parse(fileContents)
    //console.log(data)
    res.status(200)
    res.json(data)
}
