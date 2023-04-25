1.Select user:

- Sử dụng thư viện Ant Design
- Data Entry: select
- Sử dụng phương thức get để gọi api lấy danh sách user
- Sử dụng async, await, axios để gọi api:
  - async: khai báo hàm bất đồng bộ.
  - await: tạm dừng việc thực hiện các hàm async
  - axios: để gửi đi các HTTP request bất đồng bộ đến các REST.

2. Lấy danh sách task theo id của user

- Sử dụng phương thức get
- Sử dụng async, await, axios để gọi api:
  - async: khai báo hàm bất đồng bộ.
  - await: tạm dừng việc thực hiện các hàm async
  - axios: để gửi đi các HTTP request bất đồng bộ đến các REST.
- Truyền id của user khi gọi API, idUser lấy từ danh sách của User

3. Cập nhật trạng thái của user

- Sử dụng phương thức PATCH

4. Hiển thị số lượng task đã hoàn thành

- Hiển thị tất cả các task: lấy độ dài của mạng
- Hiển thị tất cả các task đã hoàn thành: sử dụng reduce()

5. Cài đặt và sử dụng

- Nén file sau khi tải về
- Mở terminal gõ npm install. Nếu lỗi:
  - Gõ: npx npm-check-updates
  - Tiếp theo: npx npm-check-updates -u
  - Sau đó: npm install
