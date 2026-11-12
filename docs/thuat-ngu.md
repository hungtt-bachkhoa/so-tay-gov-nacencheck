---
title: Thuật ngữ nghiệp vụ
description: Giải thích nhanh CAPA, C/O, finding, violation, severity và các khái niệm liên quan.
---

# Thuật ngữ nghiệp vụ

<p class="lead">Các từ viết tắt dễ gây nhầm được diễn giải bằng câu hỏi thực tế mà chúng trả lời.</p>

## CAPA {#capa .term}

<span class="term-code">CAPA</span> **Corrective and Preventive Action** — hành động khắc phục và phòng ngừa.

- **Correction:** sửa ngay hiện tượng đang sai. Ví dụ: thay nhãn thiếu thông tin.
- **Corrective action:** loại bỏ nguyên nhân của lỗi đã xảy ra. Ví dụ: sửa quy trình duyệt nhãn để luôn có bước đối chiếu bắt buộc.
- **Preventive action:** ngăn lỗi tương tự phát sinh ở nơi khác hoặc trong tương lai. Ví dụ: thêm kiểm tra tự động cho tất cả mẫu nhãn.

Một CAPA tốt trả lời: lỗi do đâu, làm gì, ai làm, hạn nào, bằng chứng nào và kiểm tra hiệu lực ra sao.

### Ví dụ

**Nhóm:** `LABELING`  
**Mức:** `MAJOR`  
**Nội dung:** 300 thùng ghi sai mã vùng trồng.

#### Corrective Action — hành động khắc phục

- Cách ly 300 thùng sai nhãn.
- Gỡ nhãn cũ.
- In và dán lại nhãn đúng.
- Kiểm tra lại 100% lô trước khi xuất kho.

#### Preventive Action — hành động phòng ngừa

- Khóa mẫu nhãn cũ.
- Mỗi lô chỉ sinh một mẫu nhãn từ dữ liệu lô.
- Thêm bước quét mã vùng trồng trước khi in.
- Yêu cầu hai người kiểm tra lô xuất khẩu.

#### Bằng chứng

- Ảnh trước và sau khi thay nhãn.
- Danh sách 300 thùng.
- Biên bản tiêu hủy nhãn cũ.
- Quy trình đóng gói mới.
- Bản ghi đào tạo nhân viên.

## C/O {#co .term}

<span class="term-code">C/O</span> **Certificate of Origin** — chứng nhận xuất xứ hàng hóa. Nó dùng để chứng minh hàng hóa có xuất xứ theo tiêu chí và hồ sơ tương ứng.

Ví dụ: C/O ghi linh kiện có xuất xứ Việt Nam nhưng lineage lại cho thấy lô nguyên liệu được nhập từ nguồn khác. Đây là tín hiệu cần kiểm chứng, chưa đủ để tự động kết luận gian lận.

## Phát hiện và vi phạm {#finding-violation .term}

| Khái niệm | Câu hỏi nó trả lời | Ví dụ |
|---|---|---|
| Phát hiện (`Finding`) | Thanh tra đã quan sát và chứng minh được điều gì? | 12 nhãn thiếu tên đơn vị chịu trách nhiệm |
| Vi phạm (`Violation`) | Hành vi nào vi phạm quy định, mức độ và hướng xử lý? | Hồ sơ vi phạm về ghi nhãn, SEV3, yêu cầu sửa trong 5 ngày |

Một phát hiện có thể được giải trình hợp lệ và đóng mà không thành vi phạm. Ngược lại, một vi phạm phải có căn cứ và bằng chứng truy ngược được.

## Mức phát hiện và mức vi phạm {#severity .term}

Hai thang đo có liên quan nhưng không đồng nhất:

- `MINOR / MAJOR / CRITICAL` mô tả mức đáng chú ý của **phát hiện khi kiểm tra**.
- `SEV3 / SEV2 / SEV1` định tuyến mức nghiêm trọng của **hồ sơ vi phạm và quy trình xử lý**.

Không nên chỉ đổi nhãn cơ học, ví dụ `CRITICAL = SEV1`, nếu chưa đánh giá phạm vi ảnh hưởng, bằng chứng, khả năng khắc phục và căn cứ nghiệp vụ.

## Lineage {#lineage .term}

<span class="term-code">LINEAGE</span> Chuỗi quan hệ giữa nguyên liệu, công đoạn, lô sản xuất, vận chuyển và sản phẩm. Nó giúp trả lời “sản phẩm này đến từ đâu?” và “nếu một nguyên liệu có vấn đề thì những lô nào bị ảnh hưởng?”.

## Nút {#nut .term}

**Nút — Node** là một đối tượng trong chuỗi cung ứng, thường đại diện cho một lô nguyên liệu, lô đang sản xuất hoặc lô thành phẩm tại một giai đoạn. Mỗi nút lưu các thông tin chính như mã lô, loại, xuất xứ, trạng thái, thời gian và đơn vị sở hữu hoặc xử lý.

Ví dụ trong quy trình sản xuất bóng đèn:

- `CAP-450V-022`: lô tụ điện — nút nguyên liệu.
- `DRV-LED-9W`: lô bộ nguồn — nút sản xuất trung gian.
- `LED-A60-2026`: lô bóng đèn hoàn chỉnh — nút thành phẩm.

## Liên kết {#lien-ket .term}

**Liên kết — Edge** là đường nối giữa hai nút, cho biết lô nguồn đã được sử dụng, vận chuyển hoặc chuyển thành lô đích như thế nào. Liên kết có thể ghi loại sự kiện, tên quan hệ và số lượng liên quan.

Ví dụ: `CAP-450V-022 → DRV-LED-9W` cho biết lô tụ điện đã được dùng để sản xuất lô bộ nguồn. Liên kết `DRV-LED-9W → LED-A60-2026` cho biết bộ nguồn đó tiếp tục được lắp vào lô bóng đèn thành phẩm.

## Tại sao cần nút và liên kết? {#tai-sao-can-nut-va-lien-ket .term}

Nút cho biết **đối tượng nào** đang được theo dõi; liên kết cho biết **đối tượng đó đi đâu và tạo thành sản phẩm nào**.

Giả sử lô tụ điện `CAP-450V-022` bị lỗi, hệ thống có thể lần theo chuỗi:

```text
CAP-450V-022
      ↓
DRV-LED-9W
      ↓
LED-A60-2026
```

Từ đó cán bộ biết:

- Tụ điện lỗi đã được dùng trong bộ nguồn nào.
- Bộ nguồn đó được dùng cho lô đèn nào.
- Cần thanh tra hoặc thu hồi những lô thành phẩm nào.

Nếu không có liên kết, hệ thống chỉ biết có một lô tụ điện lỗi nhưng không biết nó đã đi vào sản phẩm nào.

## SLA {#sla .term}

<span class="term-code">SLA</span> Mốc thời gian cam kết hoặc quy định để xử lý một công việc. Ví dụ: doanh nghiệp phải nộp CAPA trong 5 ngày; chuyên viên phải thẩm định trong 2 ngày làm việc.

## Tenant và phạm vi dữ liệu {#tenant .term}

**Tenant** là không gian dữ liệu của một tổ chức/đơn vị trên nền tảng. Ngoài vai trò, quyền truy cập còn có thể bị giới hạn theo tenant, tỉnh/thành, đơn vị quản lý hoặc phạm vi hồ sơ. Vì vậy hai người cùng là `GOV_OFFICER` chưa chắc xem được cùng một dữ liệu.

## Audit log {#audit-log .term}

Nhật ký kiểm toán ghi hành động quan trọng: người thực hiện, thời gian, dữ liệu trước/sau và đối tượng bị tác động. Đây là cơ sở để truy trách nhiệm và kiểm tra tính toàn vẹn của quy trình.
