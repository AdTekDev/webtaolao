/// Thư viện
var express = require('express');
var path = require('path');

// -- khoi dong app
var chay_app = express();

// Cấu hình: PORT
const PORT = process.env.PORT || 3030;

// Biến
var solan = 0;

/// Engine EJS
chay_app.set('views', path.join( __dirname, 'view'));
chay_app.set('view engine', 'ejs');

/// Khai báo Thư mục chứa các file thấy được, cho FrontEnd
chay_app.use(express.static('public'));

// --- Tới HOME
chay_app.get("/" , xulyhome);
function xulyhome (req, res) {
    return res.render('home');
}

// --- Tới HOME
chay_app.get("/login" , xulylogin);
function xulylogin (req, res) {
    return res.render('login');
}


// Khởi tạo ứng dụng
chay_app.listen( PORT ,
    () => {
        console.log(" OK roi !");
    }
);