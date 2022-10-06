/**
 * Tính diện tích và chu vi hình chữ nhật
 * Viết chương trình nhập vào 2 chiều dài và chiều rộng của HCN.
 * Tính và xuất ra diện tích, chu vi của HCN đó
 * S = dài * rộng
 * P = (dài + rộng) * 2
 * */ 

/*
Mô hình 3 khối:

1. input
    chieuDai
    chieuRong

2. process
    B1: Lap cong thuc tinh toan
    dienTich = chieuDai *  chieuRong
    chuVi = (chieuDai +  chieuRong) * 2

3. output
    Hiển thị console
*/

// 1 input
var chieuDai = 3;
var chieuRong = 2;

// 2 tinh toan

var dienTich = chieuDai *  chieuRong;
var chuVi = (chieuDai +  chieuRong) * 2;

// 3 output
console.log("Dien tich: " + dienTich);
console.log("Chu vi: " + chuVi);