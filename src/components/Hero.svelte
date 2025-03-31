<script>
    const platforms = [
        {
          icon: "ri-whatsapp-fill",
          name: "WhatsApp"
        },
        {
          icon: "ri-telegram-fill",
          name: "Telegram"
        },
        {
          icon: "ri-discord-fill",
          name: "Discord"
        },
        {
          icon: "ri-messenger-fill",
          name: "Messenger"
        }
    ];
</script>

<section class="hero-section flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-4 sm:px-5 text-center overflow-hidden relative">
    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-tight">Create Stunning AI Stickers Instantly</h1>
    <p class="text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mb-8 sm:mb-10 opacity-50 font-light">Create unique cartoon-style stickers in seconds. No registration required, completely free and open source.</p>

    <div class="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
        <a href="/generate" class="bg-[#2d9bca] hover:bg-opacity-90 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-[#2d9bca]/20 hover:shadow-xl hover:shadow-[#2d9bca]/30 hover:transform hover:scale-[1.02]">
            Create Sticker
        </a>
    </div>

    <div class="mt-16 sm:mt-20 md:mt-24 relative w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <div class="w-full">
            <h3 class="mb-4 sm:mb-6 opacity-40 text-xs sm:text-sm uppercase tracking-widest font-medium">Used by popular platforms</h3>
            <div class="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
                {#each platforms as platform}
                    <div class="group cursor-pointer">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 transition-all duration-300 border border-white/5">
                            <i class="{platform.icon} text-2xl sm:text-3xl md:text-4xl opacity-30 group-hover:opacity-100 group-hover:text-[#2d9bca] transition-all duration-300"></i>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
