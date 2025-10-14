<script setup lang="ts">
import CTA from '@/components/CTA.vue';
import FeaturedQuote from '@/components/FeaturedQuote.vue';
import LogoTitle from '@/components/LogoTitle.vue';
</script>

<template>
  <div className="home">
    <div className="home-content">
      {/* Logo & Title */}
      <LogoTitle />

      {/* Featured Quote */}
      <FeaturedQuote />

      {/* CTA */}
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
