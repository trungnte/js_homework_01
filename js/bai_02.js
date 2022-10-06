/**
 * Tính giá trị trung bình
 * Viết chương trình nhập vào 5 số thực
 * Tính giá trị trung bình của 5 số này và xuất ra màn hình
*/

/*
Mô hình 3 khối:

1. input
    5 số thực: number01, number02, number03, number04, number05

2. process
    B1: Khai báo biến và get giá trị input từ user
    B2: Lap cong thuc tinh toan

3. output
    Hiển thị trung bình
*/

// 1. input

// 2.1 B1: Khai báo biến và get giá trị input từ user
var number01 = 1.2;
var number02 = 2.3;
var number03 = 3.4;
var number04 = 4.5;
var number05 = 5.6;

// 2.2 B2: Lap cong thuc tinh toan
var average = (number01 + number02 + number03 + number04 + number05) / 5;

//  Hiển thị trung bình
console.log("Average: " + average);

