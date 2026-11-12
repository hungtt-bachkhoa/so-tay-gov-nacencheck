<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, useRoute } from 'vitepress'

const route = useRoute()
const { site } = useData()
const opened = ref(false)

const tabs = [
  { label: 'Tổng quan', href: '/' },
  { label: 'Vai trò', href: '/vai-tro' },
  { label: 'Chức năng', href: '/chuc-nang' },
  { label: 'Quy trình mẫu', href: '/quy-trinh' },
  { label: 'Thuật ngữ', href: '/thuat-ngu' }
]

const currentPath = computed(() => route.path.replace(/\.html$/, ''))

function isActive(href: string) {
  return href === '/' ? currentPath.value === '/' : currentPath.value.startsWith(href)
}
</script>

<template>
  <header class="site-header">
    <div class="site-header__top">
      <a class="brand" href="/" :aria-label="`Về trang chủ ${site.title}`">
        <span class="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" role="img">
            <path d="M24 3 42 9v13c0 11.7-7.4 19.1-18 23C13.4 41.1 6 33.7 6 22V9l18-6Z" fill="currentColor" opacity=".2" />
            <path d="m15 24 6 6 13-14" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <span>
          <strong>SỔ TAY GOV PORTAL</strong>
          <small>Giám sát · Thanh tra · Thực thi</small>
        </span>
      </a>

      <button
        class="site-menu-button"
        type="button"
        :aria-expanded="opened"
        aria-controls="primary-navigation"
        aria-label="Mở hoặc đóng điều hướng"
        title="Mở hoặc đóng điều hướng"
        @click="opened = !opened"
      >
        <svg v-if="!opened" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        <svg v-else viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
        <span>Danh mục</span>
      </button>
    </div>

    <nav id="primary-navigation" class="tab-nav" :class="{ 'tab-nav--open': opened }" aria-label="Điều hướng chính">
      <a
        v-for="tab in tabs"
        :key="tab.href"
        :href="tab.href"
        :class="{ active: isActive(tab.href) }"
        :aria-current="isActive(tab.href) ? 'page' : undefined"
        @click="opened = false"
      >
        {{ tab.label }}
      </a>
    </nav>
  </header>
</template>
