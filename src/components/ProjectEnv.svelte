<script>
    import Project from './Project.svelte'
    import { fade, fly } from 'svelte/transition';

    let projectData = {
        Titan: {
            title: "Titan Robotics 2022",
            logo: "public/imgs/titan2022.png",
            link: "https://titanrobotics2022.com",
            description: "Redesigning robotics team website for business partnerships.",
            banner: "titanback.png",
            mobile: true
        },
        DIYHacks: {
            title: "DIYHacks",
            logo: "public/imgs/diyhackslogo.png",
            link: "https://diyhacks.tech",
            description: "Dynamic hackathon & project creation for students.",
            banner: "diyhacksback.png",
            mobile: true
        },
        CA: {
            title: "Code Authority",
            logo: "public/imgs/calogo.png",
            link: "./CodeAuthority",
            description: "Designed and developed interview website within a week.",
            banner: "caback.png",
            mobile: false
        },
        Bordar: {
            title: "Bordar",
            logo: "public/imgs/bordarlogo.png",
            link: "https://bordar.site",
            description: "Data analytics for curriculum development.",
            banner: "bordarback.png",
            mobile: true
        },
        SEVC: {
            title: "SEVC",
            logo: "public/imgs/sevclogo.png",
            link: "./SEVC",
            description: "Student-driven ventures impacting world sustainability.",
            banner: "sevcback.png",
            mobile: false
        }
    }
    let active = 'Titan'
    let { banner, description } = projectData.Titan
    let bannerToggle = true
    let bannerIMG = `<img src="${banner}" class="img-fluid" alt="Project Banner" />`
    let bannerCol, bannerRow
    let magicnumber = "0px"

    window.addEventListener('scroll', () => {
        moveBanner()
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
            bannerIMG = `<img src="${banner}" class="img-fluid" alt="Experience Banner" />`
        }, 300)
    }

    function moveBanner() {
        let floatEnvTop = bannerCol.getBoundingClientRect().top, floatEnvBottom = bannerCol.getBoundingClientRect().bottom
        let floatElHeight = bannerRow.offsetHeight, floatEnvHeight = bannerCol.offsetHeight;
        let startPoint = window.pageYOffset + floatEnvTop + floatElHeight, stopPoint = window.pageYOffset + floatEnvBottom - window.innerHeight
        let windowBottomPos = window.innerHeight + window.scrollY, windowTopPos = window.scrollY
        if(windowBottomPos > startPoint && windowTopPos < stopPoint) {
            magicnumber = `${((windowBottomPos - startPoint)/stopPoint) * floatEnvHeight}px`
        }
    }

</script>



<article class="container mt-5">
    <div class="row">
        <div class="col-md-9">
            <div class="row px-5 banner position-absolute" style="top: { magicnumber }">
                {#if bannerToggle}
                    <div class="col px-5" in:fly="{{ y: -20, duration: 300 }}" out:fly="{{ y: 20, duration: 300 }}">
                        <div class="row">
                            <p class="time-post">Titan Robotics 2022</p>
                            <p class="desc-post">Showcasing robotics team for business partnerships.</p>
                        </div>
                        <div class="row">
                            {@html bannerIMG}
                        </div>
                    </div>
                {/if}
            </div>
        </div>
        <div class="col-md-3 position-relative">
            <div class="row">
                <div class="col-12">
                    {#each Object.entries(projectData) as item }
                        <Project id={item[0]} data={item[1]} active={active} on:hoveredProject={sawHover}/>
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
</style>