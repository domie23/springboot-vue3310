const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixiankaifangkechengw/",
            name: "zaixiankaifangkechengw",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixiankaifangkechengw/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线开放课程"
        } 
    }
}
export default base
