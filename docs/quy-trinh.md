---
title: Quy trình mẫu đầy đủ
description: Luồng nghiệp vụ đầy đủ từ thiết lập hệ thống, giám sát, thanh tra đến CAPA và phê duyệt quyết định.
---

# Quy trình mẫu đầy đủ

<p class="lead">Quy trình dưới đây mô tả đầy đủ cách các vai trò phối hợp trên Gov Portal. Nội dung không sử dụng tên người, địa danh, doanh nghiệp hay mã hồ sơ cụ thể.</p>

::: info Cách đọc
Mỗi bước gồm vai trò thực hiện, công việc chính và kết quả cần có. Các mã viết hoa là trạng thái được lưu trên hệ thống.
:::

## Giai đoạn 1 — Chuẩn bị hệ thống

### Bước 1 — Thiết lập phạm vi quản lý

<div class="flow">
  <div class="flow-step"><span class="actor">SUPER_ADMIN</span><h3>Quản lý tài khoản và phạm vi</h3><p>Tạo hoặc quản lý tài khoản cơ quan; gán vai trò; phân cán bộ theo địa bàn, ngành và phạm vi dữ liệu; xác định doanh nghiệp thuộc phạm vi quản lý; bật các phân hệ thanh tra, vi phạm, CAPA, quyết định, thu hồi và báo cáo.</p></div>
  <div class="flow-step"><span class="actor">PLATFORM_ADMIN</span><h3>Phụ trách vận hành kỹ thuật</h3><p>Cấu hình môi trường và kết nối API; hỗ trợ phân quyền kỹ thuật; theo dõi lỗi, hoạt động nền tảng và nhật ký khi có sự cố.</p></div>
</div>

::: warning Nguyên tắc phân quyền
Vai trò quản trị có thể được hệ thống cho phép truy cập nhiều chức năng, nhưng việc ký quyết định nên do vai trò nghiệp vụ có đúng thẩm quyền thực hiện.
:::

### Bước 2 — Kiểm tra quyền truy cập

<div class="flow">
  <div class="flow-step"><span class="actor">HỆ THỐNG</span><h3>Chưa đăng nhập</h3><p>Chuyển người dùng đến trang đăng nhập.</p></div>
  <div class="flow-step"><span class="actor">HỆ THỐNG</span><h3>Tài khoản không thuộc cổng cơ quan</h3><p>Từ chối truy cập và hiển thị thông báo không có quyền.</p></div>
  <div class="flow-step"><span class="actor">HỆ THỐNG</span><h3>Tài khoản Gov hợp lệ</h3><p>Kiểm tra vai trò, địa bàn, ngành và phạm vi dữ liệu trước khi cho vào Gov Portal. Người dùng chỉ xem được hồ sơ thuộc phạm vi được giao.</p></div>
</div>

## Giai đoạn 2 — Doanh nghiệp tạo dữ liệu nguồn

### Bước 3 — Khai báo vùng trồng và sản xuất

<div class="flow">
  <div class="flow-step"><span class="actor">DOANH NGHIỆP</span><h3>Ghi nhận dữ liệu ban đầu</h3><p>Khai báo vùng trồng, nhật ký chăm sóc, phân bón và thuốc sử dụng, ngày và sản lượng thu hoạch, người thực hiện, ảnh cùng tài liệu chứng minh.</p></div>
</div>

### Bước 4 — Tạo lô hàng và chuỗi sự kiện

<div class="flow">
  <div class="flow-step"><span class="actor">DOANH NGHIỆP</span><h3>Tạo hồ sơ lô</h3><p>Ghi đầy đủ chuỗi sự kiện: vùng trồng → thu hoạch → sơ chế → phân loại → đóng gói → kho lạnh → vận chuyển → xuất khẩu. Đây là nguồn dữ liệu cho màn hình Lineage.</p></div>
</div>

### Bước 5 — Đính kèm giấy tờ

<div class="flow">
  <div class="flow-step"><span class="actor">DOANH NGHIỆP</span><h3>Tải hồ sơ liên quan</h3><p>Đính kèm C/O, phiếu kiểm nghiệm, chứng thư kiểm dịch nếu có, hóa đơn, tài liệu lô và tài liệu vận chuyển.</p></div>
  <div class="flow-step"><span class="actor">GOV PORTAL</span><h3>Ghi nhận để kiểm tra</h3><p>Liên kết giấy tờ với lô và hiển thị trạng thái xác minh. Gov Portal không phải cổng xin cấp C/O và không thay thế cơ quan có thẩm quyền cấp C/O.</p></div>
</div>

## Giai đoạn 3 — Giám sát lô hàng

### Bước 6 — Theo dõi trang tổng quan

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_OFFICER</span><h3>Xác định việc cần ưu tiên</h3><p>Theo dõi số doanh nghiệp, lô hàng, đợt thanh tra, vi phạm, CAPA quá hạn, quyết định chờ ký và hoạt động thanh tra gần đây.</p></div>
</div>

::: warning Lưu ý
Số liệu và cảnh báo trên trang tổng quan chỉ giúp nhận diện rủi ro, chưa phải kết luận vi phạm.
:::

### Bước 7 — Tra cứu lô

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_OFFICER</span><h3>Kiểm tra hồ sơ lô</h3><p>Tra cứu doanh nghiệp sở hữu, sản phẩm, ngày tạo, trạng thái, vùng trồng, giấy tờ, chuỗi sự kiện, vi phạm và thu hồi liên quan.</p></div>
  <div class="flow-step"><span class="actor">GOV_OFFICER</span><h3>Xử lý khi không tìm thấy</h3><p>Kiểm tra lại mã tra cứu, xác nhận lô đã được ghi nhận hay chưa và xác định lô có nằm ngoài phạm vi quản lý của tài khoản hay không.</p></div>
</div>

### Bước 8 — Kiểm tra chuỗi cung ứng

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_OFFICER</span><h3>Đọc Lineage</h3><p>Kiểm tra chuỗi từ vùng trồng đến lô nguyên liệu, sơ chế, đóng gói, nhập kho, vận chuyển và chuẩn bị xuất khẩu.</p></div>
  <div class="flow-step"><span class="actor">GOV_OFFICER</span><h3>Đối chiếu tính hợp lý</h3><p>Tìm điểm đứt dữ liệu; so sánh đầu vào và đầu ra; kiểm tra mã vùng trồng trên nhãn, trình tự thời gian, đơn vị vận chuyển và tài liệu liên kết với lô.</p></div>
</div>

### Bước 9 — Xác minh C/O

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_OFFICER</span><h3>Kiểm tra hồ sơ C/O</h3><p>Xác minh C/O có trên hệ thống hay không, liên kết với lô và doanh nghiệp nào, thị trường đích, trạng thái nộp, trạng thái xác thực, thời điểm nộp và mã tham chiếu bên ngoài.</p></div>
</div>

::: info Hiểu đúng trạng thái “hợp lệ”
Trạng thái này cho biết hệ thống tìm thấy hồ sơ và dữ liệu xác minh đạt yêu cầu. Nó không có nghĩa Gov Portal đã cấp C/O.
:::

### Bước 10 — Kiểm tra bản đồ vùng trồng

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_OFFICER</span><h3>Đánh giá vị trí và cảnh báo</h3><p>Kiểm tra vùng trồng có đúng địa bàn khai báo, vị trí có nằm trong ranh giới hợp lệ, khu vực có nhiều cảnh báo hoặc nhiều lô vi phạm hay không.</p></div>
  <div class="flow-step"><span class="actor">GOV_OFFICER</span><h3>Chuyển tín hiệu</h3><p>Nếu phát hiện dấu hiệu bất thường, chuyển thông tin và hồ sơ liên quan cho thanh tra viên để kiểm chứng.</p></div>
</div>

## Giai đoạn 4 — Thực hiện thanh tra

### Bước 11 — Lập cuộc thanh tra

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_INSPECTOR</span><h3>Tạo kế hoạch</h3><p>Chọn doanh nghiệp, loại thanh tra, ngày thực hiện, phạm vi và người phụ trách. Trạng thái ban đầu là <code>PLANNED</code>.</p></div>
</div>

| Loại thanh tra | Ý nghĩa |
| --- | --- |
| `ROUTINE` | Kiểm tra định kỳ |
| `RANDOM` | Kiểm tra đột xuất |
| `COMPLAINT_DRIVEN` | Kiểm tra theo phản ánh |
| `RECALL` | Kiểm tra phục vụ thu hồi |

### Bước 12 — Bắt đầu thực hiện

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_INSPECTOR</span><h3><code>PLANNED → IN_PROGRESS</code></h3><p>Đối chiếu hàng thực tế, nhãn thùng, mã QR, mã lô, C/O, phiếu kiểm nghiệm, nhật ký sản xuất, số lượng tồn kho và điều kiện bảo quản.</p></div>
</div>

### Bước 13 — Ghi phát hiện

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_INSPECTOR</span><h3>Mô tả phát hiện</h3><p>Ghi rõ nội dung quan sát, nhóm vấn đề, mức độ, lô liên quan và bằng chứng. Mỗi phát hiện được lưu trên máy chủ để tiếp tục xử lý.</p></div>
</div>

| Nhóm | Nội dung |
| --- | --- |
| `TRACEABILITY` | Truy xuất nguồn gốc |
| `LABELING` | Ghi nhãn |
| `DOCUMENTATION` | Hồ sơ, chứng từ |
| `SAFETY` | An toàn |
| `ORIGIN` | Xuất xứ |

| Mức | Cách hiểu |
| --- | --- |
| `CRITICAL` | Nghiêm trọng, cần ưu tiên xử lý |
| `MAJOR` | Sai lệch đáng kể |
| `MINOR` | Sai lệch nhỏ nhưng cần khắc phục |
| `OBSERVATION` | Ghi nhận để theo dõi |

### Bước 14 — Kết luận thanh tra

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_INSPECTOR</span><h3>Chọn kết quả</h3><p>Chọn đạt, đạt có điều kiện hoặc không đạt; ghi yêu cầu khắc phục, tài liệu cần bổ sung và thời hạn hoàn thành.</p></div>
  <div class="flow-step"><span class="actor">HỆ THỐNG</span><h3><code>IN_PROGRESS → COMPLETED</code></h3><p>Sau khi gửi kết luận, biên bản được hoàn tất và không còn chỉnh sửa như hồ sơ đang thực hiện.</p></div>
</div>

| Lựa chọn trên giao diện | Nhóm trạng thái kết quả |
| --- | --- |
| `PASS` | `COMPLIANT` |
| `CONDITIONAL` | `VIOLATIONS_FOUND` |
| `FAIL` | `VIOLATIONS_FOUND` |

## Giai đoạn 5 — Lập hồ sơ vi phạm

### Bước 15 — Chuyển phát hiện thành vi phạm

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_INSPECTOR · GOV_OFFICER</span><h3>Lập vi phạm</h3><p>Ghi doanh nghiệp, lô, nội dung, mức độ, hạn CAPA và bằng chứng; liên kết hồ sơ với biên bản thanh tra. Trạng thái ban đầu là <code>REPORTED</code>.</p></div>
</div>

::: info Với mức OBSERVATION
Tùy quy định nghiệp vụ, cán bộ có thể giữ ở mức ghi nhận để theo dõi thay vì bắt buộc lập vi phạm.
:::

## Giai đoạn 6 — Doanh nghiệp tiếp nhận và nộp CAPA

### Bước 16 — Xác nhận đã tiếp nhận

<div class="flow">
  <div class="flow-step"><span class="actor">DOANH NGHIỆP</span><h3><code>REPORTED → ACKED</code></h3><p>Đọc hồ sơ và xác nhận đã nhận yêu cầu. <code>ACKED</code> không có nghĩa doanh nghiệp thừa nhận toàn bộ kết luận pháp lý.</p></div>
</div>

### Bước 17 — Phân tích nguyên nhân gốc

<div class="flow">
  <div class="flow-step"><span class="actor">DOANH NGHIỆP</span><h3>Tìm nguyên nhân hệ thống</h3><p>Xác định lỗ hổng trong mẫu biểu, dữ liệu, quy trình hoặc bước kiểm soát đã cho phép lỗi xảy ra và không được phát hiện kịp thời.</p></div>
</div>

::: warning Cách ghi nguyên nhân
Không nên chỉ ghi “nhân viên bất cẩn”. Cần giải thích vì sao quy trình cho phép sai sót đi qua mà không bị ngăn chặn hoặc phát hiện.
:::

### Bước 18 — Lập và gửi CAPA

<div class="flow">
  <div class="flow-step"><span class="actor">DOANH NGHIỆP</span><h3>Hành động khắc phục</h3><p>Cách ly hàng sai, sửa hoặc thay thế nội dung không phù hợp, kiểm tra lại toàn bộ phạm vi ảnh hưởng trước khi tiếp tục lưu thông.</p></div>
  <div class="flow-step"><span class="actor">DOANH NGHIỆP</span><h3>Hành động phòng ngừa</h3><p>Khóa mẫu cũ, chuẩn hóa dữ liệu, bổ sung bước kiểm tra tự động hoặc kiểm tra chéo và cập nhật quy trình làm việc.</p></div>
  <div class="flow-step"><span class="actor">DOANH NGHIỆP</span><h3>Thời hạn và bằng chứng</h3><p>Nêu hạn hoàn thành; đính kèm ảnh trước–sau, danh sách đối tượng đã xử lý, biên bản, quy trình mới và bản ghi đào tạo.</p></div>
  <div class="flow-step"><span class="actor">HỆ THỐNG</span><h3><code>ACKED → CAPA_SUBMITTED</code></h3><p>Ghi nhận CAPA đã được gửi để cơ quan thẩm định.</p></div>
</div>

## Giai đoạn 7 — Thẩm định CAPA

### Bước 19 — Kiểm tra hồ sơ khắc phục

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_REVIEWER</span><h3>Đánh giá nội dung</h3><p>Kiểm tra nguyên nhân gốc có hợp lý; hành động khắc phục có xử lý hàng đang sai; hành động phòng ngừa có giảm nguy cơ tái diễn; bằng chứng có đúng lô, đúng số lượng và đúng hạn.</p></div>
  <div class="flow-step"><span class="actor">GOV_REVIEWER</span><h3>CAPA đạt</h3><p>Chuyển <code>CAPA_SUBMITTED → CAPA_VERIFIED</code>. Khi xác nhận mọi yêu cầu đã hoàn tất, chuyển <code>CAPA_VERIFIED → CLOSED</code>.</p></div>
  <div class="flow-step"><span class="actor">GOV_REVIEWER</span><h3>CAPA chưa đạt</h3><p>Không phê duyệt hồ sơ thiếu bằng chứng, sai số lượng hoặc chưa sửa quy trình; yêu cầu doanh nghiệp bổ sung và nộp lại.</p></div>
  <div class="flow-step"><span class="actor">GOV_OFFICER</span><h3>Hồ sơ quá hạn</h3><p>Theo dõi hồ sơ còn ở <code>REPORTED</code> hoặc <code>ACKED</code>; khi cần can thiệp ở cấp cao hơn, chuyển sang <code>ESCALATED</code>.</p></div>
</div>

::: info Ý nghĩa của ESCALATED
Đây là trạng thái chuyển vụ việc lên mức xử lý cao hơn, không đồng nghĩa hệ thống tự động xử phạt.
:::

## Giai đoạn 8 — Xử lý vi phạm nghiêm trọng

### Bước 20 — Đề xuất quyết định

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_INSPECTOR · GOV_OFFICER</span><h3>Tạo đề xuất</h3><p>Chọn loại quyết định, hành động đề xuất, khung tiền nếu có, căn cứ áp dụng, ghi chú và hồ sơ liên quan. Công cụ có thể gợi ý nhưng không thay thế trách nhiệm của người có thẩm quyền.</p></div>
</div>

| Mã quyết định | Ý nghĩa |
| --- | --- |
| `PENALTY` | Xử phạt tiền |
| `SUSPEND` | Đình chỉ hoạt động |
| `REVOKE` | Tước hoặc thu hồi giấy phép |
| `RECALL_PRODUCT` | Thu hồi sản phẩm |

### Bước 21 — Hoàn tất bước ký A

<div class="flow">
  <div class="flow-step"><span class="actor">NGƯỜI ĐỀ XUẤT</span><h3><code>PENDING_A_SIGN → PENDING_B_SIGN</code></h3><p>Khi tạo đề xuất thành công, hệ thống hoàn tất bước ký A và chuyển hồ sơ vào hộp quyết định của vai trò có thẩm quyền ký tiếp.</p></div>
</div>

### Bước 22 — Thẩm định quyết định

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_REVIEWER</span><h3>Kiểm tra căn cứ</h3><p>Đọc vi phạm gốc, biên bản thanh tra, bằng chứng, lịch sử CAPA, mức độ ảnh hưởng, hành động đề xuất và khung xử lý.</p></div>
</div>

### Bước 23 — Phê duyệt hoặc từ chối

<div class="flow">
  <div class="flow-step"><span class="actor">GOV_APPROVER</span><h3>Phê duyệt</h3><p>Ký đồng ý khi hồ sơ đầy đủ và có căn cứ. Quyết định sau đó mới được chuyển sang thực thi theo loại xử lý.</p></div>
  <div class="flow-step"><span class="actor">GOV_APPROVER</span><h3>Từ chối</h3><p>Ghi rõ lý do và nội dung cần bổ sung khi bằng chứng, phạm vi ảnh hưởng hoặc căn cứ chưa đủ. Hồ sơ bị từ chối không được thực thi như quyết định đã phê duyệt.</p></div>
</div>

::: warning Phân tách trách nhiệm
- `GOV_INSPECTOR` và `GOV_OFFICER`: lập hồ sơ, đề xuất xử lý.
- `GOV_REVIEWER`: thẩm định nội dung và căn cứ.
- `GOV_APPROVER`: phê duyệt hoặc từ chối quyết định.
- Nút “Đề xuất” không có nghĩa quyết định đã có hiệu lực.
:::

## Tổng hợp luồng trạng thái

| Hồ sơ | Luồng chính |
| --- | --- |
| Thanh tra | `PLANNED → IN_PROGRESS → COMPLETED` |
| Vi phạm và CAPA | `REPORTED → ACKED → CAPA_SUBMITTED → CAPA_VERIFIED → CLOSED` |
| Quá hạn | `REPORTED / ACKED → ESCALATED` |
| Quyết định | `PENDING_A_SIGN → PENDING_B_SIGN → phê duyệt hoặc từ chối` |

## Kết quả cuối cùng cần có

- Mỗi lô có dữ liệu nguồn, chuỗi sự kiện và giấy tờ liên kết rõ ràng.
- Mỗi phát hiện có nội dung, nhóm, mức độ và bằng chứng.
- Vi phạm truy ngược được về phát hiện và biên bản thanh tra.
- CAPA nêu đúng nguyên nhân gốc, hành động khắc phục, phòng ngừa, thời hạn và bằng chứng.
- Hồ sơ nghiêm trọng được đề xuất, thẩm định và phê duyệt bởi các vai trò tách biệt.
- Nhật ký hệ thống cho biết vai trò nào đã thực hiện từng hành động và vào thời điểm nào.
