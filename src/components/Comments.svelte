<script>
    let commentsTrack1 = [
        {
            content: "I created custom stickers for my daughter's birthday party in minutes! The quality was amazing and everyone loved them.",
            author: "Emma Johnson"
        },
        {
            content: "As a teacher, I use these stickers to reward my students. The AI generates exactly what I need every time!",
            author: "Michael Chen"
        },
        {
            content: "The cartoon style stickers are perfect for my Discord server. So easy to make and they look professional.",
            author: "Sarah Williams"
        },
        {
            content: "I love that I don't need to create an account. Just visit, create, download, and you're done!",
            author: "Daniel Rodriguez"
        },
        {
            content: "This tool is a lifesaver for my small business. We create branded stickers in seconds. Absolutely brilliant!",
            author: "Jessica Patel"
        }
    ];

    let commentsTrack2 = [
        {
            content: "The stickers I made were so good my friends thought I hired a professional designer. Incredible tool!",
            author: "Thomas Wilson"
        },
        {
            content: "As someone who cares about privacy, I appreciate that this service doesn't require any personal data. Thank you!",
            author: "Olivia Martinez"
        },
        {
            content: "I've tried many sticker makers but this is by far the best. The AI understands exactly what I'm looking for.",
            author: "James Lee"
        },
        {
            content: "My WhatsApp group loves the custom emoji packs I made. So much fun and incredibly easy to use!",
            author: "Aisha Jackson"
        },
        {
            content: "The batch creation feature saved me so much time for my marketing campaign. Definitely recommend this to everyone.",
            author: "Robert Kim"
        }
    ];

    commentsTrack1 = [...commentsTrack1, ...commentsTrack1];
    commentsTrack2 = [...commentsTrack2, ...commentsTrack2];
</script>

<section class="testimonials-section py-10 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-5 overflow-hidden">
    <div class="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">What Our Users Say</h2>
        <p class="text-base sm:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mx-auto opacity-50 font-light">Thousands of people are creating amazing stickers with Finsoo. Here's what they think about our platform.</p>
    </div>

    <div class="comments-container relative">
        <div class="comments-track-outer relative">
            <div class="fade-left absolute left-0 top-0 w-12 sm:w-16 md:w-24 h-full bg-gradient-to-r from-[#0a0a0e] to-transparent z-10"></div>
            <div class="fade-right absolute right-0 top-0 w-12 sm:w-16 md:w-24 h-full bg-gradient-to-l from-[#0a0a0e] to-transparent z-10"></div>
            <div class="comments-track-1 flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide">
                {#each commentsTrack1 as comment}
                    <div class="comment-card min-w-[280px] sm:min-w-[300px] md:min-w-[320px] p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 hover:bg-white/[7%] transition-all duration-300 backdrop-blur-sm border border-white/5">
                        <div class="comment-content">
                            <p class="text-sm sm:text-base opacity-80 font-light mb-3 sm:mb-4">"{comment.content}"</p>
                            <h4 class="text-sm sm:text-base font-medium text-[#2d9bca]">{comment.author}</h4>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="comments-track-outer mt-4 sm:mt-6 md:mt-8 relative">
            <div class="fade-left absolute left-0 top-0 w-12 sm:w-16 md:w-24 h-full bg-gradient-to-r from-[#0a0a0e] to-transparent z-10"></div>
            <div class="fade-right absolute right-0 top-0 w-12 sm:w-16 md:w-24 h-full bg-gradient-to-l from-[#0a0a0e] to-transparent z-10"></div>
            <div class="comments-track-2 flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide">
                {#each commentsTrack2 as comment}
                    <div class="comment-card min-w-[280px] sm:min-w-[300px] md:min-w-[320px] p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 hover:bg-white/[7%] transition-all duration-300 backdrop-blur-sm border border-white/5">
                        <div class="comment-content">
                            <p class="text-sm sm:text-base opacity-80 font-light mb-3 sm:mb-4">"{comment.content}"</p>
                            <h4 class="text-sm sm:text-base font-medium text-[#2d9bca]">{comment.author}</h4>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
