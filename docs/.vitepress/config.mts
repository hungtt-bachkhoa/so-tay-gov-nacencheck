import { defineConfig } from 'vitepress'

export default defineConfig({
   base: '/so-tay-gov-nacencheck/',

  lang: 'vi-VN',
  title: 'Sổ tay Gov Portal',
  description: 'Hướng dẫn vai trò, chức năng và quy trình nghiệp vụ của phân hệ Gov Portal',
  cleanUrls: false,
  lastUpdated: true,
  head: [
    ['link', {
  rel: 'icon',
  type: 'image/svg+xml',
  href: '/so-tay-gov-nacencheck/favicon.svg'
}],
    ['meta', { name: 'theme-color', content: '#006b57' }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'Trong trang này' },
    docFooter: { prev: 'Trang trước', next: 'Trang sau' },
    lastUpdated: { text: 'Cập nhật lần cuối' },
    sidebar: [
      {
        text: 'Bắt đầu',
        items: [{ text: 'Gov Portal là gì?', link: '/' }]
      },
      {
        text: 'Con người và công việc',
        items: [
          { text: 'Vai trò tham gia', link: '/vai-tro' },
          { text: 'Nhóm chức năng', link: '/chuc-nang' }
        ]
      },
      {
        text: 'Ví dụ xuyên suốt',
        items: [{ text: 'Quy trình hoàn chỉnh', link: '/quy-trinh' }]
      },
      {
        text: 'Tra cứu nhanh',
        items: [{ text: 'Thuật ngữ nghiệp vụ', link: '/thuat-ngu' }]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/quyennkc-bachkhoa/so-tay-nacencheck' }
    ]
  }
})
