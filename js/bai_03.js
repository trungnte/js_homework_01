/**
 * Quy đổi tiền
 * Giá USD hiện nay đang là 23.500 VND
 * Viết chương trình quy đổi từ USD sang VND.
 * Cho người dùng nhập vào số tiền USD.
 * Tính và xuất ra số tiền sau quy đổi VND.
 * VD: Người dùng nhập 2USD => xuất ra 47.000 VND
*/

/*
Mô hình 3 khối:

1. input
    numberOfDollar

2. process
    B1: Lap cong thuc tinh toan
    numberOfVND = numberOfDollar *  23.500

3. output
    Hiển thị trung bình
*/

// 1. input
const VND_PER_USD =  23500;
var numberOfDollar = 10;

// 2. process
var numberOfVND = numberOfDollar * VND_PER_USD;

// 3. output
console.log("VND: " + numberOfVND);


