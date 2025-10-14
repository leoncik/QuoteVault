<template>
  <div className="quote-card p-12 md:p-16 relative overflow-hidden">
    <div className="absolute top-8 left-8 text-quote-accent/20">
      <QuoteIcon :size="80" />
    </div>

    <div className="relative z-10 space-y-8">
      <blockquote className="text-3xl md:text-4xl font-serif text-quote-text leading-relaxed">
        "{randomQuote.text}"
      </blockquote>

      <cite className="text-xl md:text-2xl text-quote-author not-italic font-semibold">
        — {randomQuote.author}
      </cite>

      <Button onClick="{getNewQuote}" variant="outline" className="mt-6"> New Quote </Button>
    </div>
  </div>
</template>
