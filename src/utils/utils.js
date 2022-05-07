const getUserInfo = () => {
    const routes = getCurrentPages()
    const thisRoute = routes[routes.length - 1].route
    if (thisRoute.indexOf("login") == -1) {
        const userInfo = uni.getStorageSync('user');
        if (!userInfo) {
            uni.reLaunch({
                url: '/pages/login/index'
            });
        } else {
            return JSON.parse(userInfo);
        }
    }

}
export default getUserInfo