/*
    đôi khi chúng ta có một mảng
    các object muốn sửa
    hoặc thêm các thuộc tính
    của từng đối tượng
    
    giả sử chúng ta
    có một mảng các phần tử string
    mà ta sẽ biến tất cả chúng thành chữ thường
    
    trên thực tế
    có thể có vô số tình huống
    ở đó phương thức map()
    sẽ giúp chúng ta xử lý 1 cách dễ dàng

    map (danh từ): là bản đồ

    map (động từ): là ánh xạ

    => suy ra, phương thức map() là phương thức ánh xạ
*/


// tạo biến danh sách sản phẩm (là 1 mảng)
// các bản ghi chứa thông tin như sau:
// id: là id của sản phẩm
// name: là tên của sản phẩm
// price: là giá của sản phẩm (đơn vị đô la $)
var danhSach_SanPham = [
    {id: 1, name: "Điện thoại", price: 300},
    {id: 2, name: "Máy tính bàn", price: 5000},
    {id: 3, name: "Laptop", price: 1200},
    {id: 4, name: "Tủ lạnh", price: 800},
    {id: 5, name: "Máy giặt", price: 500},
    {id: 6, name: "Máy lạnh", price: 850},
    {id: 7, name: "Ti-vi", price: 200},
    {id: 8, name: "Bình nóng lạnh", price: 400},
    {id: 9, name: "Bếp từ", price: 120},
    {id: 10, name: "Bóng đèn", price: 220},
];


// in ra mảng ban đầu
console.log("Mảng ban đầu:");
console.log(danhSach_SanPham);


// cho 1 mảng sản phẩm
// hãy dùng phương thức map()
// để trả về 1 mảng
// giống hệt mảng ban đầu

// tạo biến danh sách sao chép
var danhSach_SaoChep = danhSach_SanPham.map(
    function(value, index, array){
        return {
            id: value.id,
            name: value.name,
            price: value.price
        };
    }
);


// in ra mảng sao chép được trả về bởi phương thức map()
console.log("\nMảng sao chép được trả về bởi phương thức map():");
console.log(danhSach_SaoChep);


// cảm giác sử dụng phương thức map()
// để tạo ra mảng mới
// giống mảng ban đầu
// nếu bạn sử dụng vòng lặp forEach()
// thì cũng tạo ra mảng mới
// giống mảng ban đầu được đấy
// khác nhau chỗ viết code
// là phương thức map() thì không cần dùng push()
// còn dùng forEach() thì bạn phải thêm push()

// ví dụ:
// dùng forEach() để tạo ra kết quả
// giống y hệt phương thức map()
var khoi_tao = [];

// gọi phương thức forEach()
danhSach_SanPham.forEach(
    function(item){
        khoi_tao.push(item);
    }
);

// in ra màn hình mảng
// được tạo ra từ phương thức forEach()
console.log("\nKết quả được tạo ra từ forEach():");
console.log(khoi_tao);


// sử dụng phương thức map()
// để trả về mảng chứa danh sách id
// tạo biến danh sách id
// để hứng dữ liệu
// trả về từ phương thức map()
var danhSach_Id = danhSach_SanPham.map(
    function(value, index, array){
        return {
            id: value.id
        };

        // hoặc bạn viết như này cũng được
        // return value.id;
        
        // thì kết quả in ra màn hình
        // nó trông như này
        // [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10]
    }
);

// in ra màn hình console danh sách id
console.log("\nDanh sách Id:");
console.log(danhSach_Id);


// tạo biến danh sách tên sản phẩm
// để hứng dữ liệu trả về của phương thức map()
var danhSach_TenSanPham = danhSach_SanPham.map(
    function(value, index, array){
        return {
            name: value.name
        };
    }
);

// in ra màn hình console danh sách tên sản phẩm
console.log("\nDanh sách tên sản phẩm:");
console.log(danhSach_TenSanPham);


// tạo biến danh sách giá sản phẩm
// để hứng dữ liệu trả về của phương thức map()
var danhSach_GiaSanPham = danhSach_SanPham.map(
    // bạn có thể viết ngắn gọn như này
    (value, index, array) => value.price
);

// in ra màn hình console danh sách giá sản phẩm
console.log("\nDanh sách giá sản phẩm:");
console.log(danhSach_GiaSanPham);