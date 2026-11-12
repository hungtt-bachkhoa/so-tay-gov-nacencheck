---
title: Nhóm chức năng
description: Giải thích các mục trên navigation của Gov Portal.
---

# Các nhóm chức năng trên navigation

<p class="lead">Thanh điều hướng được tổ chức theo hành trình công việc: quan sát dữ liệu trước, mở hồ sơ kiểm tra sau, rồi xử lý và báo cáo kết quả.</p>

## 1. Giám sát và truy xuất

<div class="card-grid">
  <div class="info-card"><h3>Tra cứu / Xem truy vết</h3><p>Tìm theo mã lô, sản phẩm hoặc chủ thể; xem các nút nguyên liệu, sản xuất, vận chuyển và mối liên kết giữa chúng.</p></div>
  <div class="info-card"><h3>Bản đồ rủi ro (Heatmap)</h3><p>Nhìn khu vực, đơn vị hoặc nhóm hàng có mật độ tín hiệu rủi ro cao để ưu tiên kiểm tra.</p></div>
  <div class="info-card"><h3>Xác minh C/O</h3><p>Đối chiếu chứng nhận xuất xứ, chủ thể, lô hàng, thời hạn và trạng thái hồ sơ.</p></div>
  <div class="info-card"><h3>Tem và định danh</h3><p>Theo dõi việc phát hành, kích hoạt, khóa hoặc bất thường của tem/định danh gắn với hàng hóa.</p></div>
</div>

**Các cấp trong chuỗi truy xuất** là độ xa so với lô đang xem, không phải cấp hành chính:

- `Level 0`: nguyên liệu hoặc nút đầu vào xa nhất đang hiển thị.
- `Level 1`: nguyên liệu trung gian hoặc linh kiện đã qua một bước ghép/chế biến.
- `Level 2`: lô thành phẩm đang được hình thành từ các đầu vào trước đó.

Trên bản đồ, **chấm xanh** thường biểu diễn địa điểm của một nút/sự kiện; **đường xanh dương** biểu diễn liên kết hoặc hành trình giữa các nút. Màu sắc là cách trực quan hóa, còn ý nghĩa chính xác cần đọc loại nút và chi tiết liên kết.

## 2. Thanh tra và phát hiện

### Khi nào thực hiện thanh tra?

- Theo kế hoạch định kỳ đã được phê duyệt.
- Theo chuyên đề, ví dụ kiểm tra nguồn gốc linh kiện điện tử.
- Đột xuất khi có phản ánh, cảnh báo hoặc dấu hiệu rủi ro.
- Hậu kiểm để xác nhận nội dung doanh nghiệp đã khai báo hoặc đã khắc phục.

### Các kiểu kiểm tra thường gặp

| Kiểu | Mục đích | Ví dụ |
|---|---|---|
| Định kỳ | Kiểm soát tuân thủ theo chu kỳ | Kiểm tra cơ sở sản xuất mỗi năm |
| Chuyên đề | Tập trung vào một nhóm rủi ro | Kiểm tra nhãn hàng hóa đèn LED |
| Đột xuất | Phản ứng với tín hiệu cụ thể | Có phản ánh C/O không khớp lô hàng |
| Hậu kiểm | Xác minh sau công bố/khắc phục | Kiểm tra CAPA đã triển khai thực tế chưa |

### Phát hiện là gì?

**Phát hiện (finding)** là điều thanh tra viên quan sát được và có bằng chứng. Nó chưa mặc nhiên là quyết định vi phạm.

Ví dụ: “Nhãn trên 12 sản phẩm thiếu thông tin đơn vị chịu trách nhiệm”. Nhóm phát hiện là `LABELING`; mức `MAJOR` vì ảnh hưởng đáng kể đến tính tuân thủ nhưng chưa có căn cứ cho thấy nguy cơ tức thời đến tính mạng.

Mức phát hiện thường dùng:

- `MINOR`: sai sót nhỏ, phạm vi hẹp, có thể sửa nhanh.
- `MAJOR`: sai sót đáng kể, có tính hệ thống hoặc ảnh hưởng khả năng kiểm chứng.
- `CRITICAL`: nguy cơ nghiêm trọng, có thể cần can thiệp ngay.

## 3. Vi phạm, CAPA và quyết định

**Vi phạm (violation)** là hồ sơ xử lý được lập khi phát hiện đã được đánh giá có đủ căn cứ. Phát hiện trả lời “đã thấy gì”; vi phạm trả lời “quy định nào bị vi phạm, ai chịu trách nhiệm và xử lý ra sao”.

Mức độ vi phạm (`SEV`) thể hiện mức nghiêm trọng để định tuyến xử lý:

| Mức | Ví dụ | Hướng xử lý minh họa |
|---|---|---|
| `SEV3` – thấp | Một trường thông tin phụ trên nhãn bị sai ở phạm vi nhỏ | Yêu cầu sửa và nộp bằng chứng |
| `SEV2` – đáng kể | Nhiều lô không chứng minh được nguồn gốc đầu vào | CAPA bắt buộc, giám sát chặt, có thể kiểm tra lại |
| `SEV1` – nghiêm trọng | Hàng có nguy cơ an toàn cao hoặc giả mạo hồ sơ nguồn gốc có hệ thống | Trình thẩm định, phê duyệt quyết định và có thể thu hồi |

Thanh tra viên hoặc cán bộ được phân quyền có thể **khởi tạo/đề xuất** hồ sơ vi phạm. Quyền xác nhận, thẩm định và ra quyết định cuối cùng phụ thuộc vai trò và thẩm quyền; người tạo không mặc nhiên được tự phê duyệt.

## 4. Thu hồi, báo cáo và kiểm toán

- **Thu hồi:** xác định sản phẩm/lô bị ảnh hưởng, phạm vi, thời hạn, tiến độ và bằng chứng hoàn tất.
- **Báo cáo tuân thủ:** tổng hợp vụ việc, tỷ lệ CAPA đúng hạn, vi phạm theo ngành/địa bàn.
- **Nhật ký kiểm toán:** ghi ai đã làm gì, lúc nào, trên hồ sơ nào để phục vụ kiểm tra sau này.
- **Phân loại/rủi ro:** hỗ trợ ưu tiên nguồn lực; không thay thế phán đoán chuyên môn và quyết định có thẩm quyền.
