<script setup lang="ts">
import { QuoteIcon } from 'lucide-vue-next'
</script>

<template>
  <div className="space-y-4">
    <div className="flex items-center justify-center gap-3 mb-6">
      <QuoteIcon className="text-quote-accent" :size="56" />
      <h1
        className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-quote-text to-quote-accent bg-clip-text text-transparent"
      >
        QuoteVault
      </h1>
    </div>
    <p className="text-xl md:text-2xl text-quote-author max-w-2xl mx-auto">
      Discover wisdom from the greatest minds in history
    </p>
  </div>
</template>
