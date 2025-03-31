<script>
    let features = [
      {
        title: "Advanced AI Generation",
        description: "Our cutting-edge AI models transform your ideas into beautiful sticker designs in seconds with stunning detail and accuracy.",
        icon: "ri-ai-generate"
      },
      {
        title: "Instant Downloads",
        description: "Download your stickers immediately in multiple formats compatible with WhatsApp, Telegram, Discord, and other messaging platforms.",
        icon: "ri-download-cloud-line"
      },
      {
        title: "Multiple Style Options",
        description: "Choose from a variety of styles including cartoon, watercolor, pixel art, and more to create stickers that match your personality.",
        icon: "ri-brush-line"
      },
      {
        title: "Batch Creation",
        description: "Generate multiple stickers at once with our batch processing feature, perfect for creating themed sticker packs.",
        icon: "ri-stack-line"
      }
    ]
</script>

<section class="features-section py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-5 text-center sm:text-left">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Powerful Features</h2>
            <p class="text-base sm:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mx-auto opacity-50 font-light">Our AI-powered platform offers everything you need to create amazing stickers for all your messaging apps.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {#each features as feature}
                <div class="feature-item flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-7 md:p-8 rounded-xl bg-white/5 hover:bg-white/[7%] transition-all duration-300 border border-white/5 backdrop-blur-sm">
                    <div class="icon-container mx-auto sm:mx-0 sm:mt-1">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-[#2d9bca]/10">
                            <i class="{feature.icon} text-xl sm:text-2xl text-[#2d9bca]"></i>
                        </div>
                    </div>
                    <div class="content text-center sm:text-left">
                        <h3 class="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                        <p class="text-sm sm:text-base opacity-60 font-light">{feature.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
