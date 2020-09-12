<script>
    import Experience from './Experience.svelte'
    import { fade, fly } from 'svelte/transition';

    let experienceData = {
        PulseM: {
            company: "pulseM",
            title: "Software Engineering Intern",
            logo: "imgs/logos/pulsem.png",
            link: "https://pulsem.me",
            time: "July 2020 - Present",
            description: "Creating A/B Framework with Vue.js & TypeScript",
            banner: "imgs/banners/pulsemexp.png"
        },
        Wyzant: {
            company: "Wyzant",
            title: "Web Development Tutor",
            logo: "imgs/logos/wyzant.png",
            link: "https://www.wyzant.com/match/tutor/88184101",
            time: "May 2020 - Present",
            description: "Assisting students in various web development bootcamps and classes.",
            banner: "imgs/banners/wyzantexp.gif"
        },
        VT: {
            company: "Varsity Tutors",
            title: "Web Development Tutor",
            logo: "imgs/logos/varsitytutors.png",
            link: "https://www.varsitytutors.com/tutors/878747878",
            time: "Feb 2020 - Present",
            description: "Assisting students in various web development bootcamps and classes.",
            banner: "imgs/banners/varsityexp.png"
        },
        Keyring: {
            company: "Keyring",
            title: "Software Engineering Intern",
            logo: "imgs/logos/keyringlogo.png",
            link: "https://joinkeyring.com",
            time: "Apr 2020 - Jun 2020",
            description: "Bundling platform for streaming services.",
            banner: "imgs/banners/keyringexp.svg"
        },
        Cootbie: {
            company: "Cootbie",
            title: "Back-End Development Intern",
            logo: "imgs/logos/cootbie.svg",
            link: "https://cootbie.com",
            time: "Jul 2019 - Jan 2020",
            description: "Giving job-seekers a voice in the journey of recruitment.",
            banner: "imgs/banners/cootbieexp.png"
        },
        Titan: {
            company: "Titan Robotics 2022",
            title: "Web Developer",
            logo: "imgs/logos/titan2022.png",
            link: "https://titanrobotics2022.com",
            time: "Jun 2019 - Jul 2019",
            description: "Showcasing robotics team for business partnerships.",
            banner: "imgs/banners/roboticsexp.png"
        },
        PWP: {
            company: "Packed With Purpose",
            title: "Graphic Design Intern",
            logo: "imgs/logos/pwp.png",
            link: "https://packedwithpurpose.gifts",
            time: "Jun 2018 - Jul 2018",
            description: "Corporate gifting combined with sustainable practices.",
            banner: "imgs/banners/pwpexp.png"
        }
    }
    let active = Object.entries(experienceData)[0][0]
    let { banner, description } = experienceData[active]
    let bannerToggle = true
    let bannerIMG = `<img src="${banner}" class="img-fluid" alt="Experience Banner" />`
    let bannerCol, bannerRow
    let magicnumber = "0px"

    window.addEventListener('scroll', () => {
        moveBanner()
    })

    function sawHover(e) {
        ({ id: active } = e.detail)
        switchBanner(e.detail)
        moveBanner()
    }

    function switchBanner(details) {
        ({ banner, description } = details)
        bannerToggle = false;
        setTimeout(() => {
            bannerToggle = true;
            bannerIMG = `<img src="${banner}" class="img-fluid" alt="Experience Banner" />`
        }, 300)
    }

    function moveBanner() {
        let floatEnvTop = bannerCol.getBoundingClientRect().top,
            floatEnvBottom = bannerCol.getBoundingClientRect().bottom
        let floatElHeight = bannerRow.offsetHeight,
            floatEnvHeight = bannerCol.offsetHeight;
        let startPoint = window.pageYOffset + floatEnvTop + floatElHeight + 100,
            stopPoint = window.pageYOffset + floatEnvBottom - window.innerHeight + 100
        let windowBottomPos = window.innerHeight + window.scrollY,
            windowTopPos = window.scrollY
        if(windowBottomPos > startPoint && windowTopPos < stopPoint) {
            magicnumber = `${((windowBottomPos - startPoint)/stopPoint) * floatEnvHeight}px`
        }
    }

</script>

<article class="container-fluid mt-5">
    <div class=" pl-5 ml-5">
        <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-12">
                        {#each Object.entries(experienceData) as item }
                            <Experience id={item[0]} data={item[1]} active={active} on:hoveredEXP={sawHover}/>
                        {/each}
                    </div>
                </div>
            </div>
            <div id="banner-col" class="col-md-6 position-relative" bind:this={bannerCol}>
                <div class="row px-5 banner position-absolute" style="top: { magicnumber }" bind:this={bannerRow} >
                    {#if bannerToggle}
                        <div class="col px-5" in:fly="{{ y: -20, duration: 300 }}" out:fly="{{ y: 20, duration: 300 }}">
                            <div class="row">
                                {@html bannerIMG}
                            </div>
                            <div class="row">
                                <p class="p-3 mt-3 text-center">{description}</p>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</article>

<style>
    .banner {
        transition: 0.1s ease-out;
        min-height: 100px;
    }
</style>