import getUserInfo from "@/utils/utils";

const baseUrl = 'http://39.99.248.243:9321'
const request = (url = '', data = {}, type = 'GET', header = {
}) => {
    getUserInfo()
    return new Promise((resolve, reject) => {
        uni.request({
            method: type,
            url: baseUrl + url,
            data: data,
            header: header,
            dataType: 'json',
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        }).finally(() => {
            uni.hideLoading();
        })
    });
}
export default request