/*
    reduce() là một phương thức
    được sử dụng
    để thực thi một hàm
    lên các phần tử của mảng (từ trái sang phải)
    với một biến tích lũy
    để thu về một giá trị duy nhất
    
    là một phương thức quan trọng
    hay sử dụng trong lập trình hàm

    reduce (động từ): là làm ngắn bớt, làm thành nhỏ
*/


/*
    callback là hàm thực thi
    với 4 tham số là:
    1. accumulator
    2. currentValue
    3. index
    4. array

    THÔNG TIN THAM SỐ:
    1. accumulator: biến tích lũy
    được trả về sau mỗi lần gọi hàm callback

    2. currentValue: phần tử của mảng đang được xử lý

    3. index (Optional): chỉ số của phần tử
    trong mảng đang được xử lý

    4. array (Optional): mảng hiện tại gọi phương thức reduce()


    ĐẶC BIỆT:
    initialValue: là giá trị
    cho tham số thứ nhất (accumulator)
    của hàm callback trong lần gọi hàm đầu tiên
    
    nếu giá trị này không được cung cấp
    thì giá trị phần tử đầu tiên
    của mảng sẽ được sử dụng


    => sau khi đã code nhiều ví dụ
    tôi thấy cái biến tích lũy (accumulator)
    khá là giống biến khởi tạo (khoi_tao)
    mà tôi hay dùng
*/


/*
    ví dụ:
    arr.reduce(
        function(accumulator, currentValue, index, array){
            // chỗ này viết code xử lý
        },
        initialValue
    );
*/


// ví dụ:
// cho 1 mảng
// tính tổng các phần tử trong mảng
var mang = [10, 20, 30, 40];

var ketQua = mang.reduce(
    function(tong, item){
        return tong + item;
    }
);

// tạo ra chuỗi string
// nó kiểu nối dấu cộng
// vào giữa các phần tử trong mảng
var str = mang.join(" + ");

// in kết quả ra màn hình
console.log(`Kết quả ${str} = ${ketQua} (chưa truyền thêm initialValue)`);


// bạn có thể viết ngắn gọn như sau
var mang2 = [1, 2, 3, 4, 5];
var ketQua2 = mang2.reduce(
    (tong, item) => tong + item
);
var str2 = mang2.join(" + ");
console.log(`\nKết quả ${str2} = ${ketQua2} (chưa truyền thêm initialValue)`);


// thử truyền initialValue = 10
var mang3 = [1, 2, 3, 4, 5];
var ketQua3 = mang3.reduce(
    function(tong, item){
        return tong + item
    },
    0
);
var str3 = mang3.join(" + ");
console.log(`\nKết quả ${str3} = ${ketQua3} (đã truyền thêm initialValue = 0)`);


// thử truyền initialValue = 10
var mang4 = [1, 2, 3, 4, 5];
var ketQua4 = mang4.reduce(
    function(tong, item){
        return tong + item
    },
    10
);
var str4 = mang4.join(" + ");
console.log(`\nKết quả ${str4} = ${ketQua4} (đã truyền thêm initialValue = 10)`);


// tính trung bình cộng (AVERAGE)
// bằng cách sử dụng reduce()
const mang5 = [1, 2, 3];

const trungBinhCong = mang5.reduce((tong, item, index, array) => {
  tong += item;
  
  if (index === array.length - 1) {
    return tong / array.length;
  } else {
    return tong;
  }
});

str5 = mang5.join(" + ");

console.log(`\nKết quả (${str5}) / ${mang5.length} = ${trungBinhCong}`);
