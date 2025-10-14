<script setup lang="ts">
import { QuoteIcon, Home } from 'lucide-vue-next'
</script>

<template>
  <header className="p-6 text-center">
    <div className="flex items-center justify-center gap-3 mb-4">
      <QuoteIcon className="text-quote-accent" :size="40" />
      <h1
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-quote-text to-quote-accent bg-clip-text text-transparent"
      >
        QuoteVault
      </h1>
    </div>
    <p className="text-lg text-quote-author max-w-2xl mx-auto">
      Discover inspiring quotes from great minds throughout history. Search, explore, and add your
      own favorite quotes to build your personal collection.
    </p>
    <RouterLink to="/" variant="ghost" className="mt-4 text-quote-author hover:text-quote-accent">
      <Home className="mr-2" :size="16" />
      Back to Home
    </RouterLink>
  </header>
</template>
