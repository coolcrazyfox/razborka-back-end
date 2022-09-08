const db = require('../db')
class DeviceController{

    async createPost(req,res){
        try{
            const {model, country, device, oem_number, count_ebay, price_ebay, price_store, count_store, link_adr, image_id} = req.body
            const newPost = await db.query('INSERT INTO device (model, country, device, oem_number, count_ebay, price_ebay, price_store, count_store, link_adr, image_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [model, country, device, oem_number, count_ebay, price_ebay, price_store, count_store, link_adr, image_id])
            res.json(newPost.rows[0])
        }catch (e){
            res.status(500).json(e)
        }

    }
    async getPostsByUser(req,res){
        try{
            const id = req.query.id
            const posts = await db.query(`select * from device where id = $1`, [id])
            // const posts = await db.query(`select * from device where user_id = $1`, [id])
            res.json(posts.rows)
        }catch (e){
            res.status(500).json(e)
        }



    }

}
module.exports = new DeviceController()
