// cho 1 mảng
var mang = [
    {id: 1, name: "Nguyễn Văn A", age: 20},
    {id: 2, name: "Nguyễn Văn B", age: 25},
    {id: 3, name: "Nguyễn Văn C", age: 30},
    {id: 4, name: "Nguyễn Văn D", age: 35},
    {id: 5, name: "Nguyễn Văn E", age: 40},
    {id: 6, name: "Nguyễn Văn F", age: 45},
    {id: 7, name: "Nguyễn Văn G", age: 50},
    {id: 8, name: "Nguyễn Văn H", age: 55},
    {id: 9, name: "Nguyễn Văn I", age: 60},
    {id: 10, name: "Nguyễn Văn K", age: 65}
];


// in ra mảng ban đầu
console.log("Mảng ban đầu:");
console.log(mang);


/*
    hàm filter() nhận các đối số
    giống như map() và hoạt động rất giống nhau.
    
    sự khác biệt duy nhất là callback
    cần trả về true hoặc false
    
    nếu nó là true
    thì mảng không thay đổi
    
    nếu là false
    thì phần tử đó sẽ được
    lọc ra khỏi mảng ban đầu

    hàm filter() có 3 tham số
    tham số thứ nhất là value,
    tham số thứ 2 là index,
    tham số thứ 3 là array
    
    value chính là giá trị của
    một bản ghi trong mảng
    (bạn có thể đặt tên tham số
    là item)

    index chính là chỉ số của
    bản ghi trong mảng
*/

// tạo biến kết quả sử dụng "value"
// để hứng dữ liệu lọc các bản ghi
// có tuổi nằm trong khoảng 40 đến 50 tuổi
var ketQua_SuDung_value = mang.filter(function(value, index, array){
    return (40 <= value.age) && (value.age <= 60);
});


// in ra mảng sau khi lọc
// theo tuổi
// có tham số value làm công cụ
console.log("\nKết quả sau khi sử dụng filter() để lọc tuổi trong khoảng [40, 60]:");
console.log(ketQua_SuDung_value);


// tạo biến kết quả sử dụng "index"
// để hứng dữ liệu lọc các bản ghi
// có index == 0 hoặc index == 1
var ketQua_SuDung_index = mang.filter(function(value, index, array){
    return index == 0 || index == 1;
});


// in ra mảng sau khi lọc
// theo chỉ số
// có tham số index làm công cụ
console.log("\nKết quả sau khi sử dụng filter() để lọc các bản ghi có chỉ số bằng 0 (hoặc bằng 1):");
console.log(ketQua_SuDung_index);


// tạo biến kết quả sử dụng "array"
// để hứng dữ liệu lọc các bản ghi
// có index != 0
var ketQua_SuDung_array = mang.filter(function(value, index, array){
    // lấy ra 1 phần tử ở cuối mảng
    array.pop();

    // thêm 1 phần tử ở cuối mảng
    array.push({
        id: 22,
        name: "Nguyễn Văn X",
        age: 17
    });

    /*
        không thêm được 3 phần tử mới
        vào cuối mảng
        kiểu như này
        array.push({id: 15, name: "Nguyễn Văn X", age: 38});
        array.push({id: 18, name: "Nguyễn Văn Y", age: 17});
        array.push({id: 20, name: "Nguyễn Văn Z", age: 52});

        vì viết code như này ở trong hàm filter()
        thì nó sẽ thêm n x 3 phần tử

        vì dụ cái mảng ban đầu có 10 bản ghi
        nếu nó push() thành công
        thì mỗi lần duyệt qua 1 bản ghi
        thì nó lại thêm 3 phần tử

        nếu thành công thì nó thêm tận 10x3=30
        phần tử mới đấy

        do đó, trong hàm filter()
        chỉ giới hạn pop 1 phần tử
        và push 1 phần tử thôi
    */

    // những id khác 1
    // sẽ giúp cho bản ghi được duyệt qua
    // có giá trị true

    // các bản ghi được duyệt
    // qua là true thì mới được in ra màn hình
    return value.id != 1;
});


// in ra mảng sau khi lọc
// với điều kiện index khác 0
console.log("\nKết quả sau khi sử dụng filter() để lọc các bản ghi có id khác 1:");
console.log(ketQua_SuDung_array);


// kết luận:
// chúng ta thường sử dụng value
// hoặc index
// để lọc các bản ghi