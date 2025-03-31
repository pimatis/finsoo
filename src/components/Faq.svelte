<script lang="ts">
    import { slide } from 'svelte/transition';

    let faqs = [
        {
            question: "Is it really free to use?",
            answer: "Yes, Finsoo is completely free to use. We believe in open-source software and making creative tools accessible to everyone.",
            isOpen: false
        },
        {
            question: "Do I need to create an account?",
            answer: "No, you don't need to create an account or provide any personal information. Just visit the site and start creating stickers instantly.",
            isOpen: false
        },
        {
            question: "What file formats can I download the stickers in?",
            answer: "You can download your stickers in PNG format with transparent backgrounds, making them perfect for use in any messaging app or social media platform.",
            isOpen: false
        },
        {
            question: "Are there any limits on how many stickers I can create?",
            answer: "There are no strict limits, but we implement fair usage policies to ensure everyone can enjoy the service. Most users can create dozens of stickers per day without any issues.",
            isOpen: false
        },
        {
            question: "Can I use these stickers commercially?",
            answer: "Yes, all stickers you create with Finsoo are yours to use however you wish, including for commercial purposes.",
            isOpen: false
        },
        {
            question: "What happens to my data?",
            answer: "We don't store any personal data. Your sticker prompts are only used temporarily to generate your stickers and are not saved after generation.",
            isOpen: false
        }
    ];

    function toggleFaq(index: any) {
        faqs = faqs.map((faq, i) => {
            if (i === index) {
                return { ...faq, isOpen: !faq.isOpen };
            } else {
                return { ...faq, isOpen: false };
            }
        });
    }
</script>

<section class="faq-section py-10 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-5">
    <div class="max-w-3xl mx-auto">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Frequently Asked Questions</h2>
            <p class="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mx-auto opacity-50 font-light">Find answers to common questions about our AI sticker creation platform.</p>
        </div>

        <div class="faq-container">
            {#each faqs as faq, index}
                <div class="faq-item mb-3 sm:mb-4 rounded-xl bg-white/5 hover:bg-white/[7%] transition-all duration-300 border border-white/5 overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-center" on:click={() => toggleFaq(index)}>
                        <h3 class="text-base sm:text-lg md:text-xl font-semibold">{faq.question}</h3>
                        <div class="transform transition-transform duration-300" class:rotate-180={faq.isOpen}>
                            <i class="ri-arrow-down-s-line text-lg sm:text-xl md:text-2xl text-[#2d9bca]"></i>
                        </div>
                    </button>

                    {#if faq.isOpen}
                        <div transition:slide={{ duration: 300 }} class="p-4 sm:p-5 md:p-6 pt-0">
                            <p class="text-sm sm:text-base opacity-60 font-light md:-mt-7">{faq.answer}</p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>
