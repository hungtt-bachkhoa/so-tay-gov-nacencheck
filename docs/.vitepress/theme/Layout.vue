<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import SiteHeader from './components/SiteHeader.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <div class="gov-handbook">
    <SiteHeader />
    <Layout />
  </div>
</template>
