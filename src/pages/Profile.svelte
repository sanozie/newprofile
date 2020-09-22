<script>
    import Experiences from "../components/Experiences.svelte";

    export let mobile
</script>

<section class="container-fluid py-5">
    <div class="container mt-5">
        <h1 class="pt-3 pb-3">Hello 👋 Thanks for visiting.</h1>
        <h3 class="pt-1 pb-1">First off, a bit of experience</h3>
    </div>
    <Experiences mobile={mobile} />
    <div class="container">
        <h4 class="my-3">You can also view <a href="SamuelAnozie.pdf" target="_blank">my resume</a></h4>
        <h2 id="tldr" class="my-5">
            <span class="outlined-header ">TL;DR:</span><br/>
            <span class="no-enphasis">I'm a</span> Full-Stack Developer <span class="no-enphasis ">and</span> UI/UX Designer.
            <span class="no-enphasis">I've worked with a lot of </span> startups.
        </h2>
    </div>
    <div class="container">
        <div id="scroller" class="demo position-relative">
            <div class="position-relative py-5">
                <span></span><span></span><span></span>
            </div>
            <h4 class="scroller-text text-center mb-5 pb-5">Scroll to see projects</h4>
        </div>
    </div>

</section>

<style lang="scss">
    section {
        background-color: #ececec;
    }
    h1 {
        font-weight: 700;
    }

    #tldr {
        font-size: calc(2rem + 3vw);
        font-weight: bolder;
        letter-spacing: 0.05rem;
        .outlined-header {
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: thin;
        }

        .no-enphasis {
            font-weight: 200;
        }
    }

    #scroller span {
        position: absolute;
        left: 50%;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg) translateY(80px) translateX(-80px);
        -webkit-animation: sdb07 2s infinite;
        animation: sdb07 2s infinite;
        opacity: 0.1;
        box-sizing: border-box;
    }
    #scroller .scroller-text {
        opacity: 0.5
    }
    #scroller span:nth-of-type(1) {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }
    #scroller span:nth-of-type(2) {
        top: 16px;
        -webkit-animation-delay: .15s;
        animation-delay: .15s;
    }
    #scroller span:nth-of-type(3) {
        top: 32px;
        -webkit-animation-delay: .3s;
        animation-delay: .3s;
    }
    @-webkit-keyframes sdb07 {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes sdb07 {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            opacity: 0;
        }
    }
</style>