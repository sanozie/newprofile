<script>
    import Experience from './Experience.svelte'
    import { fade, fly } from 'svelte/transition';
    import { moveBanner } from '../utils/ui'

    export let mobile

    let experienceData = {
        PulseM: {
            company: "pulseM",
            title: "Software Engineering Intern",
            logo: "imgs/logos/pulsem.png",
            link: "https://pulsem.me",
            time: "July 2020 - Present",
            mobile: true,
            description: "Creating A/B Framework with Vue.js & TypeScript",
            bannerPNG: "imgs/banners/pulsemexp.png",
            bannerWEBP: "imgs/banners/pulsemexp.webp",
        },
        Wyzant: {
            company: "Wyzant",
            title: "Web Development Tutor",
            logo: "imgs/logos/wyzant.png",
            link: "https://www.wyzant.com/match/tutor/88184101",
            time: "May 2020 - Present",
            mobile: true,
            description: "Assisting students in various web development bootcamps and classes.",
            bannerPNG: "imgs/banners/wyzantexp.png",
            bannerWEBP: "imgs/banners/wyzantexp.webp"
        },
        VT: {
            company: "Varsity Tutors",
            title: "Web Development Tutor",
            logo: "imgs/logos/varsitytutors.png",
            link: "https://www.varsitytutors.com/tutors/878747878",
            time: "Feb 2020 - Present",
            mobile: true,
            description: "Assisting students in various web development bootcamps and classes.",
            bannerPNG: "imgs/banners/varsityexp.png",
            bannerWEBP: "imgs/banners/varsityexp.webp"
        },
        Keyring: {
            company: "Keyring",
            title: "Software Engineering Intern",
            logo: "imgs/logos/keyringlogo.png",
            link: "https://www.producthunt.com/upcoming/keyring-bundle-media-subscriptions",
            time: "Apr 2020 - Jun 2020",
            mobile: true,
            description: "Bundling platform for streaming services.",
            bannerPNG: "imgs/banners/keyringexp.svg",
            bannerWEBP: "imgs/banners/keyringexp.webp"
        },
        Cootbie: {
            company: "Cootbie",
            title: "Back-End Development Intern",
            logo: "imgs/logos/cootbie.svg",
            link: "https://cootbie.com",
            time: "Jul 2019 - Jan 2020",
            mobile: true,
            description: "Giving job-seekers a voice in the journey of recruitment.",
            bannerPNG: "imgs/banners/cootbieexp.png",
            bannerWEBP: "imgs/banners/cootbieexp.webp"
        },
        Titan: {
            company: "Titan Robotics 2022",
            title: "Web Developer",
            logo: "imgs/logos/titan2022.png",
            link: "https://titanrobotics2022.com",
            time: "Jun 2019 - Jul 2019",
            mobile: true,
            description: "Showcasing robotics team for business partnerships.",
            bannerPNG: "imgs/banners/roboticsexp.png",
            bannerWEBP: "imgs/banners/roboticsexp.webp"
        },
        PWP: {
            company: "Packed With Purpose",
            title: "Graphic Design Intern",
            logo: "imgs/logos/pwp.png",
            link: "https://packedwithpurpose.gifts",
            time: "Jun 2018 - Jul 2018",
            mobile: true,
            description: "Corporate gifting combined with sustainable practices.",
            bannerPNG: "imgs/banners/pwpexp.png",
            bannerWEBP: "imgs/banners/pwpexp.webp"
        }
    }
    let active = Object.entries(experienceData)[0][0]
    let { bannerWEBP, bannerPNG, description, time } = experienceData[active]
    let bannerToggle = true
    let bannerIMG = `
            <picture>
                <source srcset="${bannerWEBP}" type="image/webp">
                <source srcset="${bannerPNG}" type="image/png">
                <img src="${bannerPNG}" alt="Experience Banner" class="img-fluid">
            </picture>`
    let bannerCol, bannerRow
    let magicnumber = "0px"

    window.addEventListener('scroll', () => {
        magicnumber = moveBanner(bannerCol, bannerRow)
    })

    async function sawHover(e) {
        ({ id: active } = e.detail)
        switchBanner(e.detail)
    }

    function switchBanner(details) {
        let  { bannerWEBP, bannerPNG } = details;
        ({ description } = details)
        bannerToggle = false;
        setTimeout(() => {
            bannerToggle = true;
            // bannerIMG = `<img src="${banner}" class="img-fluid" alt="Experience Banner" />`
            bannerIMG = `
            <picture>
                <source srcset="${bannerWEBP}" type="image/webp">
                <source srcset="${bannerPNG}" type="image/png">
                <img src="${bannerPNG}" alt="Alt Text!" class="img-fluid">
            </picture>`
        }, 300)
    }

    let outro = () => {
        magicnumber = moveBanner(bannerCol, bannerRow)
    }

</script>

<article class="container-fluid mt-5">
    <div class=" pl-md-5 ml-md-5">
        <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-12">
                        {#each Object.entries(experienceData) as item }
                            <Experience id={item[0]} data={item[1]} mobile={mobile}
                                    active={active} on:hoveredEXP={sawHover}/>
                        {/each}
                    </div>
                </div>
            </div>
            <div id="banner-col" class="col-md-6 d-none d-md-flex position-relative" bind:this={bannerCol}>
                <div class="row px-5 banner position-absolute" style="top: { magicnumber }" bind:this={bannerRow} >
                    {#if bannerToggle}
                        <div class="col px-5" in:fly="{{ y: -20, duration: 300 }}" out:fly="{{ y: 20, duration: 300 }}" on:introend="{outro}">
                            <div class="row text-center justify-content-center">
                                <p class="time-post mb-0" >{time}</p>
                                <p class="desc-post text-center">{description}</p>
                            </div>
                            <div class="row">
                                {@html bannerIMG}
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

    p.time-post {
        font-weight: 100;
        font-size: calc(0.8rem + 0.5vw);
        padding: 0.4rem;
    }
    p.desc-post {
        font-weight: 300;
        font-size: calc(1rem + 0.5vw);
        padding: 0.3rem;
        padding-bottom: 1rem;
    }


</style>