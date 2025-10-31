<script setup lang="ts">
import CTA from '@/pages/Home/CTA.vue'
import FeaturedQuote from '@/pages/Home/FeaturedQuote.vue'
import LogoTitle from '@/pages/Home/LogoTitle.vue'
</script>

<template>
  <div className="home">
    <div className="home-content">
      <LogoTitle />
      <FeaturedQuote />
      <CTA />
    </div>
  </div>
</template>

<style>
.home {
  min-height: 100vh;
  align-items: center;
  display: flex;
  background: var(--gradient-hero);
  padding: 1.5rem;
}

.home-content {
  margin-left: auto;
  margin-right: auto;
}
</style>
