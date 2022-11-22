import https from '../utils/request'
// 用户列表
async function userList () {
    let { data } = await https.get('/v1/users/list')
    return data
}
// 商家列表
async function businessListings () {
    let { data } = await https.get('/shopping/restaurants?latitude=36.09771&longitude=114.393097&offset=0&limit=20')    
    return data
}
// 食品列表
async function foodstuffList () {
    let { data } = await https.get('/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined')
    return data
}
// 食品列表的需要请求的商家数据
async function business(params) {
    let { data } = await https.get('/shopping/restaurant/'+params)    
    return data
}
// 食品列表需要的收货地址
async function takeList(params) {
    let { data } = await https.get('/v1/addresse/'+params)    
    return data
}
 // 食品修改

// 订单列表
async function orderManagement () {
    let { data } = await https.get('https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined')
    return data
}
// 管理员列表
async function administratorList () {
    let { data } = await https.get('https://elm.cangdu.org/admin/all?offset=0&limit=20')
    return data
}


export { userList,businessListings,foodstuffList,business,orderManagement,administratorList,takeList }