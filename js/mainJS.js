/**
 * Created by CainSummer on 2017/5/22.
 */
// 登陆模块

let LoginUser =
    {
        "account": "",
        "password": "",
        "verCode": ""
    };

let num;


let person = {
    "userId": "",
    "userName": "",
    "userAccount": "",
    "userPassword": "",
    "userCreateTime": "",
    "userLastSignInTime": "",
    "userLevel": "",
    "userSex": "",
    "userAvatar": null,
    "userTel": "",
    "userTheaterId": -1
};

function findUser(Account, PassWord, user) {

    for (let i = 0; i < user.length; i++) {
        if (Account === user[i].userAccount && PassWord === user[i].userPassword) {
            return true;
        }
    }

    return false;
}


function changePersion(user) {
    person.userId = user.userId;
    person.userName = user.userName;
    person.userAccount = user.userAccount;

}


// function signUserFuc(user) {
//     let Account = $("#signUserAccount").val();
//     let Password = $("#signUserPassword").val();
//     let IC = $("#identifyingCodeInput").val();
//
//     if (IC != 2907) {
//         alert("验证码错误！");
//         return false;
//     }
//
//     if (findUser(Account, Password, user.data) == true) {
//         console.log(true);
//
//         //页面跳转
//         person.userName = user
//
//     } else {
//         alert("用户名或者密码错误！");
//         return false;
//     }
// }

function changeVerCode() {

    let $src = "";

    // $.ajax({
    //     url: "http://47.93.98.212/Home/VerCode",
    //     type: "GET",
    //     xhrFields: {withCredentials: true},
    //     crossDomain: true,
    //     async: false,
    //     success: function (res) {
    //         $src = "data:img/png;base64," + res.base64;
    //         $("#verCodeImg").attr('src', $src);
    //     }
    // });
    $("#verCodeImg").attr('src', $src);
}


window.onload = function () {
};


//登陆判断
function signUserBtn(rest) {
    let Account = $("#signUserAccount").val();
    let Password = $("#signUserPassword").val();
    let verCode = $("#identifyingCodeInput").val();


    LoginUser.account = Account;
    LoginUser.password = Password;
    LoginUser.verCode = verCode;


    let aa = $("#signForm").serialize();


    $.ajax({
        type: "POST", //提交方式，也可以是get
//            url: "http://localhost:18000/api/v1/user/login",
        url: "http://111.231.208.121:8080/ttms/api/v1/user/login",    //请求的url地址
        xhrFields: {withCredentials: true},

        contentType: 'application/json;charset=utf-8',
//            dataType: "application/json;charset=utf-8",   //返回格式为json,也可以不添加这个属性，也可以是（xml、json、script 或 html）。
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: JSON.stringify({emp_no: Account, emp_pass: Password}),    //参数值 ,id是定义的要传的参数变量名，后台接收一致，value是页面取的传值的变量名，如果有多个，按照格式每组用逗号隔开，没有参数可以不用
        beforeSend: function () {
            //请求前的处理，如果没有可以不用写
        },
        success: function (data) {


            if (data) {
                $(function () {
                    $.ajax({
                        type: "GET",
                        url: "http://111.231.208.121:8080/ttms/api/v1/user/type?emp_no=" + Account,
                        xhrFields: {withCredentials: true},

                        contentType: 'application/json;charset=utf-8',
                        async: true,
                        success: function (data) {
                            if (data === 0) {

                                let myurl = "html/frameHTML.html" + "?" + "account=" + Account;
                                window.location.assign(myurl);
                                return true;

                            } else if (data === 1) {
                                let myurl = "html/frameHTML.html" + "?" + "account=" + Account;
                                window.location.assign(myurl);
                                return true;
                            }

                        },
                        error: function () {
                            alert("出错了，没取到啊!");
                        }
                    });
                });
            } else {
                alert("用户名或密码错误！");
                return false;
            }
        },
        complete: function () {
            //请求完成的处理 ，如果没有，可以不用
        },
        error: function () {
            alert("出错了，没取到啊!");
            return false;
        }
    });

//     $(function () {
//
//         $.ajax({
//             url: LoginAPI(),
//             type: "PATCH",
//             contentType: "application/json; charset=utf-8",
//             datatype: "json",
//             xhrFields: {withCredentials: true},
//             crossDomain: true,
//             data: JSON.stringify(
//                 LoginUser
//             ),
//             success: function (res) {
//
//                 console.log(res);
//
//                 if (res.msg == "wrong verCode") {
//                     alert("验证码错误！");
//                     changeVerCode();
//                     return false;
//                 }
//
//                 if (res.msg == "successful") {
//                     let parm1 = Account;
//                     let parm2 = Password;
//
//                     // $.ajax({
//                     //     url:"http://47.93.98.212/User/QueryUserByAccount/"+Account,
//                     //     xhrFields: { withCredentials: true },
//                     //     type:"GET",
//                     //     success:function (res) {
//                     //
//                     //         let parm3 = res.data.userTheaterId;
//                     //         let parm4 = res.data.userId;
//                     //
//                     //         console.log(parm3);
//                     //
//                     //         if(res.data.userLevel == "系统管理员"){
//                     //             let myurl="html/frameHTML.html"+"?"+"account="+parm1;
//                     //             window.location.assign(myurl);
//                     //             return true;
//                     //         }
//                     //
//                     //         if(res.data.userLevel== "剧院经理"){
//                     //             let myurl="html/ticketManagerHTML.html"+"?"+"account="+parm1+"&"+"userTheaterId"+"="+parm3;
//                     //             window.location.assign(myurl);
//                     //             return true;
//                     //         }
//                     //
//                     //         if(res.data.userLevel == "售票员"){
//                     //
//                     //             let myurl="html/ticketSeller.html"+"?"+"account="+parm1+"&"+"userTheaterId"+"="+parm3+"&"+"userId"+"="+parm4;
//                     //             console.log(myurl);
//                     //             window.location.assign(myurl);
//                     //
//                     //         }
//                     //
//                     //
//                     //     }
//                     // });
//
//
//
//                         // console.log(xhr.getResponseHeader("Cookie"));
//
//                     }
//                 else
//                     {
//                         alert("用户名或密码错误！");
//                         return false;
//                     }
//                 }
//             ,
//                 error: function () {
//                     alert("false");
//                     return false;
//                 }
//             });
//     })
}

//frame框架


