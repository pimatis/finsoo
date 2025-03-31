<script lang="ts">
    import generate, { type Theme } from '$lib/generate/main';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';

    let prompt: string = '';
    let generatedImage: string | null = null;
    let isGenerating: boolean = false;
    let errorMessage: string | null = null;
    let showSuccessMessage: boolean = false;
    let selectedTheme: Theme = 'cartoon';

    const themes: { value: Theme, label: string }[] = [
        { value: 'cartoon', label: 'Cartoon' },
        { value: 'anime', label: 'Anime' },
        { value: 'pixelArt', label: 'Pixel Art' },
        { value: 'watercolor', label: 'Watercolor' },
        { value: 'minimalist', label: 'Minimalist' },
        { value: 'retro', label: 'Retro' },
        { value: 'popArt', label: 'Pop Art' },
        { value: 'neon', label: 'Neon' }
    ];

    async function handleGenerate() {
        if (!prompt.trim()) {
            errorMessage = "Please enter a description for your sticker";
            setTimeout(() => errorMessage = null, 3000);
            return;
        }

        try {
            isGenerating = true;
            errorMessage = null;
            const result = await generate(prompt, selectedTheme);

            if (result.imageData) {
                generatedImage = `data:image/png;base64,${result.imageData}`;
                showSuccessMessage = true;
                setTimeout(() => showSuccessMessage = false, 3000);
            } else {
                errorMessage = "Failed to generate image. Please try again.";
            }
        } catch (error) {
            console.error("Error generating sticker:", error);
            errorMessage = "Something went wrong. Please try again later.";
        } finally {
            isGenerating = false;
        }
    }

    function downloadSticker() {
        if (!generatedImage) return;

        const link = document.createElement('a');
        link.href = generatedImage;
        link.download = `sticker-${new Date().getTime()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function resetGenerator() {
        prompt = '';
        generatedImage = null;
    }
</script>

<div class="px-3 sm:px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-48 py-3 sm:py-4 md:py-5">
    <Navbar />
    <section class="sticker-creator py-8 sm:py-12 md:py-16 lg:py-24">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-6 sm:mb-10 md:mb-16">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Create Your Sticker</h2>
                <p class="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mx-auto opacity-50 font-light">
                    Describe the sticker you want and our AI will create it instantly.
                    No account needed, completely free!
                </p>
            </div>

            <div class="creator-container bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div class="input-area p-4 sm:p-6 md:p-8 lg:border-r border-white/10">
                        <h3 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">Describe Your Sticker</h3>

                        <div class="mb-4 sm:mb-5 md:mb-6">
                            <textarea bind:value={prompt} class="w-full h-32 sm:h-36 md:h-40 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 focus:border-[#2d9bca] outline-none transition-all duration-300 resize-none" placeholder="e.g., 'Cute cartoon dog with blue hat and glasses making a peace sign'" disabled={isGenerating}></textarea>
                        </div>

                        <div class="mb-4 sm:mb-5 md:mb-6">
                            <label for="theme-select" class="block text-sm sm:text-base font-medium mb-2">Select Style</label>
                            <select id="theme-select" bind:value={selectedTheme} class="w-full p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 focus:border-[#2d9bca] outline-none transition-all duration-300" disabled={isGenerating}>
                                {#each themes as theme}
                                    <option value={theme.value}>{theme.label}</option>
                                {/each}
                            </select>
                        </div>

                        {#if errorMessage}
                            <div class="error-message p-3 sm:p-4 bg-red-500/20 border border-red-500/30 rounded-lg mb-4 sm:mb-5 md:mb-6">
                                <p class="text-xs sm:text-sm">{errorMessage}</p>
                            </div>
                        {/if}

                        {#if showSuccessMessage}
                            <div class="success-message p-3 sm:p-4 bg-green-500/20 border border-green-500/30 rounded-lg mb-4 sm:mb-5 md:mb-6">
                                <p class="text-xs sm:text-sm">Sticker successfully generated!</p>
                            </div>
                        {/if}

                        <button on:click={handleGenerate} class="w-full bg-[#2d9bca] hover:bg-opacity-90 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base" disabled={isGenerating || !prompt}>
                            {#if isGenerating}
                                <div class="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Generating...
                            {:else}
                                <i class="ri-magic-line"></i>
                                Generate Sticker
                            {/if}
                        </button>
                    </div>

                    <div class="preview-area p-4 sm:p-6 md:p-8 bg-white/[2%] flex flex-col items-center justify-center">
                        <h3 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">Your Sticker</h3>

                        <div class="preview-container w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 overflow-hidden">
                            {#if isGenerating}
                                <div class="flex flex-col items-center">
                                    <div class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border-3 sm:border-4 border-[#2d9bca] border-t-transparent rounded-full animate-spin mb-3 sm:mb-4"></div>
                                    <p class="text-xs sm:text-sm opacity-70">Creating your sticker...</p>
                                </div>
                            {:else if generatedImage}
                                <img src={generatedImage} alt="Generated sticker" class="w-full h-full object-contain" />
                            {:else}
                                <div class="flex flex-col items-center text-center px-3 sm:px-4">
                                    <i class="ri-image-line text-2xl sm:text-3xl md:text-4xl opacity-40 mb-3 sm:mb-4"></i>
                                    <p class="text-xs sm:text-sm opacity-70">Your generated sticker will appear here</p>
                                </div>
                            {/if}
                        </div>

                        <div class="action-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                            <button on:click={downloadSticker} class="flex-1 border border-[#2d9bca]/50 text-[#2d9bca] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base" disabled={!generatedImage}>
                                <i class="ri-download-line"></i>
                                Download
                            </button>
                            <button on:click={resetGenerator} class="flex-1 border border-white/10 text-white/70 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                                <i class="ri-refresh-line"></i>
                                New Sticker
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tips mt-6 sm:mt-8 md:mt-10 lg:mt-12 p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h4 class="text-base sm:text-lg font-medium mb-2 sm:mb-3 md:mb-4 flex items-center gap-1.5 sm:gap-2">
                    <i class="ri-lightbulb-line text-[#2d9bca]"></i>
                    Tips for great stickers
                </h4>
                <ul class="list-disc list-inside space-y-1 sm:space-y-1.5 md:space-y-2 opacity-70 font-light text-xs sm:text-sm md:text-base">
                    <li>Be specific about colors, style, and what the character is doing</li>
                    <li>Mention if you want a transparent background for better messaging app integration</li>
                    <li>Try different art styles like cartoon, watercolor, or pixel art</li>
                    <li>Add emotions or expressions to make your stickers more useful in conversations</li>
                </ul>
            </div>
        </div>
    </section>
    <Footer />
</div>
