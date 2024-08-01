# Sử dụng Functional Programming trong JavaScript
# 1. Phương thức map()
- ánh xạ các thuộc tính để tạo ra bản ghi.<br>
- trả về mảng.
# 2. Phương thức filter()
- lọc bản ghi theo điều kiện true false.<br>
- trả về mảng
# 3. Phương thức reduce()

# Lớp trong JavaScript
<pre>// 4 tính chất của lập trình hướng đối tượng
        // tính chất kế thừa
        // tính chất đóng gói
        // tính chất đa hình (override, overload)
        // tính chất trừu tượng (dùng interface)

        // khai báo lớp
        class Person {
            // hàm khởi tạo
            constructor(p_name, p_age) {
                this.name = p_name;
                this.age = p_age;
            }

            // phương thức ShowInfo()
            ShowInfo() {
                return `My name is ${this.name}, I am ${this.age} years old.`;
            }

            // Constructor hay còn gọi là phương thức khởi tạo
            // là hàm dùng để khởi tạo một đối tượng của một lớp.
            // Nó sẽ tự động được tạo khi ta tạo một đối tượng của lớp.
            // Chú ý là trong một lớp chỉ có một phương thức constructor
            // Nếu ta cố ý viết nhiều hơn 1 constructor thì sẽ xuất hiện lỗi.
            // Như vậy trong Javascript chỉ có 1 hàm constructor


            // Phương thức Getter
            get GetName() {
                return this.name;
            }

            get GetAge() {
                return this.age;
            }


            // Phương thức Setter
            // Cũng giống như phương thức Getter
            // nhưng mục đích của nó là set giá trị cho các thuộc tính
            set SetName(p_name) {
                this.name = p_name;
            }

            set SetAge(p_age) {
                this.age = p_age;
            }
        }

        // tạo đối tượng
        let p = new Person("Nguyễn Văn A", 33);

        console.log(p);

        // gọi phương thức ShowInfo()
        console.log(p.ShowInfo());


        // Các tham số bị thiếu sẽ trả về underfined.
        let person1 = new Person("Nguyen Van B", 18);
        let person2 = new Person("Nguyen Van B");
        let person3 = new Person();
        console.log(person1, person2, person3);


        // Cách gọi phương thức getter
        // Các bạn nhớ là không có cặp ngoặc đơn sau nhé
        console.log(person1.GetName);
        console.log(person1.GetAge);


        // Cách gọi phương thức setter
        person3.SetName = "Nguyễn Văn C";
        person3.SetAge = 45;
        console.log(person3);


        class Student extends Person {
            constructor(p_name, p_age, p_id_student) {
                super(p_name, p_age);
                this.idStudent = p_id_student;
            }

            ShowInfoStudent() {
                return `Student id: ${this.idStudent}`;
            }
        }

        let student1 = new Student("Nguyễn Văn D", 15, 123456);
        console.log(student1);</pre>

# Tạo đối tượng Date
<pre>let d1 = new Date("2024-01-31 11:30:59");

console.log(d1.toLocaleString());</pre>
