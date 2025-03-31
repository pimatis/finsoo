<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');

    :global(body) {
        font-family: "Geist", sans-serif;
        margin: 0;
        padding: 0;
        background-color: #0a0a0e;
        color: #ffffff;
        position: relative;
        overflow-x: hidden;
    }

    :global(body::before) {
        content: '';
        position: fixed;
        top: -150px;
        right: -150px;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(45, 155, 202, 0.4) 0%, rgba(45, 155, 202, 0) 70%);
        filter: blur(80px);
        z-index: -1;
    }

    :global(body::after) {
        content: '';
        position: fixed;
        bottom: -150px;
        left: -150px;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(45, 155, 202, 0.3) 0%, rgba(45, 155, 202, 0) 70%);
        filter: blur(80px);
        z-index: -1;
    }

    @keyframes scrollRight {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }

    @keyframes scrollLeft {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
    }

    :global(.comments-track-outer) {
        width: 100%;
        overflow: hidden;
    }

    :global(.comments-track-1), :global(.comments-track-2) {
        display: flex;
        width: fit-content;
        animation-duration: 40s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    :global(.comments-track-1) {
        animation-name: scrollRight;
    }

    :global(.comments-track-2) {
        animation-name: scrollLeft;
        direction: rtl;
    }

    :global(.comments-track-1:hover), :global(.comments-track-2:hover) {
        animation-play-state: paused;
    }
</style>
