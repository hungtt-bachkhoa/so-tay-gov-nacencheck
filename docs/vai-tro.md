---
title: Vai trò tham gia
description: Ai dùng Gov Portal và mỗi người được làm gì.
---

# Vai trò tham gia

<p class="lead">Một vụ việc đi qua nhiều người để tách biệt người kiểm tra, người thẩm định và người ra quyết định. Cách tách vai trò này giúp giảm sai sót và tránh một người tự làm toàn bộ quy trình.</p>

## Đọc tên vai trò trên hệ thống

| Tên dễ hiểu | Mã quyền thường gặp | Trách nhiệm chính |
|---|---|---|
| Thanh tra viên | `GOV_INSPECTOR` | Tiến hành kiểm tra, thu thập bằng chứng, lập phát hiện |
| Cán bộ quản lý | `GOV_OFFICER` | Giám sát, điều phối hồ sơ, quản lý vụ việc |
| Chuyên viên thẩm định | `GOV_REVIEWER` | Kiểm tra tính đầy đủ, hợp lệ và căn cứ của hồ sơ |
| Lãnh đạo phê duyệt | `GOV_APPROVER` | Chấp thuận hoặc từ chối quyết định có thẩm quyền |
| Quản trị nền tảng | `PLATFORM_ADMIN` | Cấu hình và vận hành nền tảng theo phạm vi được giao |
| Siêu quản trị | `SUPER_ADMIN` | Quản trị kỹ thuật cấp cao, không thay thế vai trò nghiệp vụ |

::: warning Lưu ý về quyền
Tên tab chỉ nói “đây là nhóm chức năng gì”. Việc được xem, tạo, sửa, thẩm định hay phê duyệt vẫn do vai trò, đơn vị, tỉnh/thành và phạm vi dữ liệu quyết định.
:::

## Thanh tra viên {#thanh-tra-vien}

**Khi nào tham gia?** Khi có kế hoạch định kỳ, chuyên đề, phản ánh, cảnh báo rủi ro hoặc dấu hiệu bất thường cần kiểm chứng.

**Công việc điển hình:** nhận phân công; nghiên cứu hồ sơ; kiểm tra hiện trường hoặc từ xa; lập biên bản; tải bằng chứng; tạo phát hiện; đề xuất xử lý.

**Không nên tự làm:** tự phê duyệt quyết định cuối cùng do chính mình đề xuất.

## Cán bộ quản lý {#can-bo-quan-ly}

**Khi nào tham gia?** Từ lúc giám sát rủi ro, tạo/điều phối vụ việc cho tới khi theo dõi hoàn thành.

**Công việc điển hình:** xem heatmap; tra cứu lô; tạo hoặc phân công đợt kiểm tra; theo dõi SLA; đôn đốc CAPA; tổng hợp báo cáo.

## Chuyên viên thẩm định {#chuyen-vien-tham-dinh}

**Khi nào tham gia?** Sau khi hồ sơ đã có kết quả và trước bước phê duyệt quyết định quan trọng.

**Công việc điển hình:** kiểm tra bằng chứng; đối chiếu căn cứ; phát hiện thiếu sót; yêu cầu bổ sung; đề nghị chấp thuận hoặc trả lại.

**Câu hỏi cốt lõi:** “Hồ sơ này đã đủ rõ, đúng thẩm quyền và đủ căn cứ để lãnh đạo quyết định chưa?”

## Lãnh đạo phê duyệt {#lanh-dao-phe-duyet}

**Khi nào tham gia?** Khi cần một quyết định có hiệu lực quản lý như phê duyệt xử lý nghiêm trọng, thu hồi, đình chỉ hoặc kết thúc vụ việc theo thẩm quyền.

**Công việc điển hình:** đọc tóm tắt và hồ sơ; xem ý kiến thẩm định; phê duyệt, từ chối hoặc yêu cầu làm rõ; ký/xác nhận quyết định.

## Quản trị hệ thống {#quan-tri-he-thong}

**PLATFORM_ADMIN** quản lý cấu hình vận hành, danh mục, tích hợp và hỗ trợ người dùng trong phạm vi nền tảng. **SUPER_ADMIN** xử lý cấu hình kỹ thuật cấp cao và sự cố liên vùng/tenant.

Hai vai trò này bảo đảm hệ thống hoạt động nhưng không mặc nhiên có quyền thay thanh tra viên kết luận chuyên môn hay thay lãnh đạo ký quyết định.

## Doanh nghiệp nằm ở đâu trong quy trình?

Doanh nghiệp không phải vai trò Gov Portal, nhưng là bên liên quan quan trọng: cung cấp hồ sơ, giải trình phát hiện, tiếp nhận vi phạm, lập kế hoạch CAPA, nộp bằng chứng khắc phục và thực hiện thu hồi nếu có quyết định.
