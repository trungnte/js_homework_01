/**
 * Tính tổng 2 ký số
 * Viết chương trình nhập vào 1 số có 2 chữ số VD 12, 44, 83
 * Tính tổng 2 ký số của số vừa nhập
 * VD:
 * 12 => Tổng là 1 + 2 = 3
 * 44 => 4 + 4 = 8
 * */ 

/*
Mô hình 3 khối:

1. input
    chuSo : chu so co 2 chu so!

2. process
    B1: Lap cong thuc tinh toan
    hangChuc = Math.floor(chuSo / 10);
    hangDonVi = chuSo % 10;

    tongChuSo = hangChuc + hangDonVi;

3. output
    Hiển thị console
*/

// 1 input
var chuSo = 12;

// 2: process
var hangChuc = Math.floor(chuSo / 10);
var hangDonVi = chuSo % 10;

var tongChuSo = hangChuc + hangDonVi;

//  output
console.log("Tong chu so: " + tongChuSo);
