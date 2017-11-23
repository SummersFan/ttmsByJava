/**
 * Created by CainSummer on 2017/5/22.
 */
//登陆API

// function signAPI(){
//     $(function () {
//         $.ajax({
//             url: "http://api.ksgin.online/User",
//             type:"GET",
//             timeout:5000,
//             success: function (res) {
//                 signUserFuc(res);
//             },
//             error:function () {
//                 alert("fuck");
//             }
//         });
//     });
// }




function LoginAPI() {
    return "http://47.93.98.212/User/Login";
}

function QueryUserByAccountAPI(account) {
    return "http://47.93.98.212/User/QueryUserByAccount/"+account;
}