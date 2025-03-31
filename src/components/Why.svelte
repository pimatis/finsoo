<script>
    let whys = [
      {
        title: "Instant Creation",
        description: "Generate custom stickers in seconds with our lightning-fast AI engine.",
        icon: "ri-speed-up-line"
      },
      {
        title: "Privacy First",
        description: "No account needed, no data stored. Your creations remain completely private.",
        icon: "ri-lock-line"
      },
      {
        title: "Unlimited Style",
        description: "Create stickers in various styles, from cartoon to realistic, with full customization.",
        icon: "ri-palette-line"
      }
    ]
</script>

<section class="why-section py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-5 text-center">
    <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Why Choose Finsoo</h2>
        <p class="text-base sm:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 opacity-50 font-light">Create unique stickers instantly with our advanced AI technology that puts privacy and simplicity first.</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {#each whys as why}
                <div class="feature-card p-6 sm:p-7 md:p-8 rounded-xl bg-white/5 hover:bg-white/[7%] transition-all duration-300 backdrop-blur-sm border border-white/5">
                    <div class="mb-4 sm:mb-5 md:mb-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center rounded-full bg-[#2d9bca]/10">
                        <i class="{why.icon} text-xl sm:text-2xl md:text-3xl text-[#2d9bca]"></i>
                    </div>
                    <h3 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{why.title}</h3>
                    <p class="text-sm sm:text-base opacity-60 font-light">{why.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
