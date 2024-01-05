# UET-Support

UET Student Support Group Management Systems

<p align="center">
  <br>
  <img width=230px height=116px  src="" alt="Project logo">

</p>

---

<p align="center"> Hệ thống quản lý tổ chức hỗ trợ sinh viên và giảng viên
    <br>
</p>

## 📝 Mục Lục

- [Giới Thiệu](#Giới-Thiệu)
- [Tổng Quan](#Tổng-Quan---Chức-Năng-Chính)
- [Chi tiết](#Chi-tiết)
- [Minh hoạ](#Minh-hoạ)
- [Full Demo](#full-demo)

## Giới Thiệu

Đây là project cuối kì của môn "Phát triển ứng dụng web", thiết kế một Hệ thống quản lý quản lý tổ chức hỗ trợ sinh viên và giảng viên trên website. Website được lấy cảm hứng và kết hợp giữa vài website của trường ĐH Công nghệ.

### Nhóm gồm các thành viên

- Vũ Đại Minh 21021521
- Nguyễn Lê Linh Chi 21021457
- Nguyễn Hải Nam 21020223
- Vũ Hoàng Long 21021515

## Tổng Quan - Chức Năng Chính

- Tài khoản xác thực ba loại người dùng khác nhau: Student - Lecturer - Admin.
- Admin có thể thêm/sửa/xóa tài khoản người dùng, xử lý và update requests, thêm/sửa/xóa news...
- Có hệ thống thông báo notifications.
- Có hệ thống chat

## Chi Tiết

- [Đặc tả yêu cầu](https://docs.google.com/spreadsheets/d/1DhNEjYQtH2ATCYq_AK6OIxIxEMC-rLdmbGcPUtDt5VM/edit)
- [Thiết kế giao diện]()
- [Lược đồ cơ sở dữ liệu](https://drive.google.com/file/d/1fI8ovU3r6wAMqzpdfqutZcZGncCVh0_-/view)
- [Công cụ phát triển]()
- [Hướng dẫn cài đặt và chạy ứng dụng](/docs/installationAndRun.md)

## Minh hoạ
<!-- | login screen                                        | Courses Screen                          |
| ----------------------------                        | ----------------------------------------|
| ![login screen][ref-login]                          | ![courses screen][ref-courses-screen]   |
| Lectures Screen                                     | Modules Screen                          |
| ![lectures screen][ref-lectures-screen]             | ![modules screen][ref-modules-screen]   |
| Assessment Creation Screen                          | Assessment View Screen                  |
| ![Assessment Creation][ref-assessment-creation]     | ![Assessment View][ref-assessment-view] |
| Exam taking Screen                                  | Grading Screen                          |
| ![Exam taking Screen][ref-exam-taking-screen]       | ![Grading Screen][ref-grading-screen]   |
| Grade Book Screen                                   | Course Settings Screen                  | 
| ![Grade Book Screen][ref-grade-book-screen]         | ![Course Settings Screen][ref-course-settings-screen] | -->

## Full Demo

## Hướng dẫn cài đặt và chạy ứng dụng

### Yêu cầu 
- `NodeJS` >= 12.0

1. Truy cập server tại đường dẫn https://int3306.freeddns.org/
   - Tài khoản: fall2324w20g5
   - mật khẩu: fall2324w20g5
2. Mở cửa sổ Terminal 1 chạy lệnh:
```
cd ~/UET-Support/src
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
3. Mở cửa sổ Terminal 2 chạy lệnh:
```
/etc/jupyter/bin/expose 3000
cd ~UET-Support && npm start
```
4. Truy cập vào http://fall2324w20g5.int3306.freeddns.org/ để sử dụng ứng dụng
