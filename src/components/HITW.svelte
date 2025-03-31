<script>
    const steps = [
        {
            title: "Describe Your Sticker",
            description: "Type your idea and let our AI understand what you want to create.",
            icon: "ri-chat-1-line"
        },
        {
            title: "Generate Options",
            description: "Our AI instantly creates multiple sticker options based on your description.",
            icon: "ri-robot-line"
        },
        {
            title: "Download & Share",
            description: "Choose your favorite design, download it, and use it anywhere instantly.",
            icon: "ri-share-forward-line"
        }
    ];
</script>

<section class="how-it-works flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-3 sm:px-4 md:px-5 overflow-hidden relative">
    <div class="max-w-6xl mx-auto w-full">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">How It Works</h2>
            <p class="text-base sm:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mx-auto opacity-50 font-light">Creating your custom stickers takes just a few seconds with our simple three-step process.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12 md:mb-16">
            {#each steps as step, i}
                <div class="step-card p-6 sm:p-7 md:p-8 rounded-xl bg-white/5 hover:bg-white/[7%] transition-all duration-300 backdrop-blur-sm border border-white/5 relative">
                    <div class="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#2d9bca] flex items-center justify-center text-base sm:text-lg md:text-xl font-bold">
                        {i + 1}
                    </div>
                    <div class="mb-4 sm:mb-5 md:mb-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center rounded-full bg-[#2d9bca]/10">
                        <i class="{step.icon} text-xl sm:text-2xl md:text-3xl text-[#2d9bca]"></i>
                    </div>
                    <h3 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center">{step.title}</h3>
                    <p class="text-sm sm:text-base opacity-60 font-light text-center">{step.description}</p>
                </div>
            {/each}
        </div>

        <div class="demo-container rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <div class="demo-header px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 border-b border-white/10 flex items-center">
                <div class="mr-3 sm:mr-4 flex space-x-1.5 sm:space-x-2">
                    <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 opacity-70"></div>
                    <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 opacity-70"></div>
                    <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 opacity-70"></div>
                </div>
                <div class="text-xs sm:text-sm opacity-50">Finsoo</div>
            </div>
            <div class="demo-content grid grid-cols-1 md:grid-cols-2 gap-0">
                <div class="input-side p-4 sm:p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10">
                    <h4 class="text-base sm:text-lg font-medium mb-3 sm:mb-4">Enter Your Description</h4>
                    <div class="mb-3 sm:mb-4 bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10">
                        <p class="text-xs sm:text-sm md:text-base opacity-80 font-light">"Cute cartoon style beige and brown patterned sitting cat sticker with transparent background. Big black eyes, small nose, white paws."</p>
                    </div>
                    <button class="bg-[#2d9bca] hover:bg-opacity-90 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-xl transition-all duration-300 text-sm sm:text-base">
                        Generate Sticker
                    </button>
                </div>
                <div class="output-side p-4 sm:p-6 md:p-8 bg-white/[2%] flex flex-col items-center justify-center">
                    <h4 class="text-base sm:text-lg font-medium mb-3 sm:mb-4">Your Generated Sticker</h4>
                    <div class="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-lg bg-white/10 flex items-center justify-center mb-3 sm:mb-4 relative overflow-hidden">
                        <div class="absolute inset-0"></div>
                        <img src="https://www.upload.ee/image/17918518/cat-sticker.png" alt="Generated Sticker" class="w-full h-full object-cover">
                    </div>
                    <button class="border border-[#2d9bca]/50 text-[#2d9bca] px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-xl transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                        <i class="ri-download-line"></i>
                        Download
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
