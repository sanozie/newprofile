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
            banner: "diyhacksback.png",
            mobile: true
        },
        Titan: {
            title: "Titan Robotics 2022",
            logo: "titan2022.png",
            link: "https://titanrobotics2022.com",
            description: "Redesigning robotics team website for business partnerships.",
            banner: "titanback.png",
            mobile: true
        },
        CA: {
            title: "Code Authority",
            logo: "calogo.png",
            link: "./CodeAuthority",
            description: "Designed and developed interview website within a week.",
            banner: "caback.png",
            mobile: false
        },
        Bordar: {
            title: "Bordar",
            logo: "bordarlogo.png",
            link: "https://bordar.site",
            description: "Data analytics for curriculum development.",
            banner: "bordarback.png",
            mobile: true
        },
        SEVC: {
            title: "SEVC",
            logo: "sevclogo.png",
            link: "./SEVC",
            description: "Student-driven ventures impacting world sustainability.",
            banner: "sevcback.png",
            mobile: false
        }
    }
    let active = Object.entries(projectData)[0][0]
    let { banner, description } = projectData[active]
    let bannerToggle = true
    let bannerIMG = `<img src="/imgs/banners/${banner}" class="img-fluid" alt="Project Banner" />`
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
        ({ banner, description } = details)
        bannerToggle = false;
        setTimeout(() => {
            bannerToggle = true;
            bannerIMG = `<img src="imgs/banners/${banner}" class="img-fluid" alt="Experience Banner" />`
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