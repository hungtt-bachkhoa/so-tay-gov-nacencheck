
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import SiteHeader from './components/SiteHeader.vue'

const DefaultLayout = DefaultTheme.Layout

const route = useRoute()
const { site } = useData()
const opened = ref(false)

const tabs = [
  { label: 'Tổng quan', href: '/' },
  { label: 'Vai trò', href: '/vai-tro.html' },
  { label: 'Chức năng', href: '/chuc-nang.html' },
  { label: 'Quy trình mẫu', href: '/quy-trinh.html' },
  { label: 'Thuật ngữ', href: '/thuat-ngu.html' }
]

const currentPath = computed(() => {
  const base = site.value.base || '/'
  const path = route.path.startsWith(base)
    ? '/' + route.path.slice(base.length)
    : route.path

  return path.replace(/\.html$/, '').replace(/\/$/, '') || '/'
})

function isActive(href: string) {
  const target =
    href.replace(/\.html$/, '').replace(/\/$/, '') || '/'

  return currentPath.value === target
}
</script>


<template>
  <div class="gov-handbook">
    <SiteHeader />
    <DefaultLayout />
  </div>
</template>
