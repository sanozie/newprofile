<script>
    import Project from './Project.svelte'
    import { fade, fly } from 'svelte/transition';
    import { moveBanner } from '../utils/ui'

    export let mobile

    let projectData = {
        DIYHacks: {
            title: "DIYHacks",
            logo: "diyhackslogo.png",
            link: "https://diyhacks.tech",
            description: "Dynamic hackathon & project creation for students.",
            bannerPNG: "imgs/banners/diyhacksback.png",
            bannerWEBP: "imgs/banners/diyhacksback.webp",
            mobile: true
        },
        Titan: {
            title: "Titan Robotics 2022",
            logo: "titan2022.png",
            link: "https://titanrobotics2022.com",
            description: "Redesigning robotics team website for business partnerships.",
            bannerPNG: "imgs/banners/titanback.png",
            bannerWEBP: "imgs/banners/titanback.webp",
            mobile: true
        },
        CA: {
            title: "Code Authority",
            logo: "calogo.png",
            link: "./CodeAuthority",
            description: "Designed and developed interview website within a week.",
            bannerPNG: "imgs/banners/caback.png",
            bannerWEBP: "imgs/banners/caback.webp",
            mobile: false
        },
        Bordar: {
            title: "Bordar",
            logo: "bordarlogo.png",
            link: "https://bordar.site",
            description: "Data analytics for curriculum development.",
            bannerPNG: "imgs/banners/bordarback.png",
            bannerWEBP: "imgs/banners/bordarback.webp",
            mobile: true
        },
        SEVC: {
            title: "SEVC",
            logo: "sevclogo.png",
            link: "./SEVC",
            description: "Student-driven ventures impacting world sustainability.",
            bannerPNG: "imgs/banners/sevcback.png",
            bannerWEBP: "imgs/banners/sevcback.webp",
            mobile: false
        }
    }
    let active = Object.entries(projectData)[0][0]
    let { bannerPNG, bannerWEBP, description } = projectData[active]
    let bannerToggle = true
    let bannerIMG = `<picture>
                <source srcset="${bannerWEBP}" type="image/webp">
                <source srcset="${bannerPNG}" type="image/png">
                <img src="${bannerPNG}" alt="Project Banner" class="img-fluid">
            </picture>`
    let bannerCol, bannerRow
    let magicnumber = "0px"

    window.addEventListener('scroll', () => {
        magicnumber = moveBanner(bannerCol, bannerRow)
    })

    function sawHover(e) {
        ({ id: active } = e.detail)
        switchBanner(e.detail)
    }

    function switchBanner(details) {
        ({ bannerWEBP, bannerPNG, description } = details)
        bannerToggle = false;
        setTimeout(() => {
            bannerToggle = true;
            bannerIMG = `
            <picture>
                <source srcset="${bannerWEBP}" type="image/webp">
                <source srcset="${bannerPNG}" type="image/png">
                <img src="${bannerPNG}" alt="Project Banner" class="img-fluid">
            </picture>`
        }, 300)
    }

</script>



<article class="container-fluid mt-5">
    <div class="row justify-content-center justify-content-md-start">
            <div class="col-md-9 d-none d-md-flex" bind:this={bannerCol}>
                <div class="row px-5 banner position-absolute">
                    {#if bannerToggle}
                        <div class="col px-5" in:fly="{{ y: -20, duration: 300 }}" out:fly="{{ y: 20, duration: 300 }}"
                             style="top: { magicnumber }" bind:this={bannerRow}>
                            <div class="row">
                                {@html bannerIMG}
                            </div>
                            <div class="row">
                                <p class="desc-post">{description}</p>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
            <div class="col-md-2 col-6 position-relative">
                <div class="row">
                    <div class="col-12">
                        {#each Object.entries(projectData) as item }
                            <Project id={item[0]} data={item[1]} mobile={mobile} active={active} on:hoveredProject={sawHover}/>
                        {/each}
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

    p.desc-post {
        font-weight: 300;
        font-size: calc(1rem + 0.5vw);
        padding: 0.3rem;
        padding-bottom: 1rem;
    }
</style>