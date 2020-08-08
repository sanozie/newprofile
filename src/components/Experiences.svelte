
<script lang="ts">
    import Experience from './Experience.svelte'

    let experienceData = {
        PulseM: {
            company: "pulseM",
            title: "Software Engineering Intern",
            logo: "imgs/logos/pulsem.png",
            link: "https://pulsem.me",
            time: "July 2020 - Present",
            description: "Creating A/B Framework with Vue.js & TypeScript",
            expImg: "varsityexp.png"
        },
        Wyzant: {
            company: "Wyzant",
            title: "Web Development Tutor",
            logo: "imgs/logos/wyzant.png",
            link: "https://www.wyzant.com/match/tutor/88184101",
            time: "May 2020 - Present",
            description: "Assisting students in various web development bootcamps and classes.",
            expImg: "varsityexp.png"
        },
        VT: {
            company: "Varsity Tutors",
            title: "Web Development Tutor",
            logo: "imgs/logos/varsitytutors.png",
            link: "https://www.varsitytutors.com/tutors/878747878",
            time: "Feb 2020 - Present",
            description: "Assisting students in various web development bootcamps and classes.",
            expImg: "varsityexp.png"
        },
        Keyring: {
            company: "Keyring",
            title: "Software Engineering Intern",
            logo: "imgs/logos/keyringlogo.png",
            link: "https://joinkeyring.com",
            time: "Apr 2020 - Present",
            description: "Bundling platform for streaming services.",
            expImg: "keyringexp.svg"
        },
        Cootbie: {
            company: "Cootbie",
            title: "Back-End Development Intern",
            logo: "imgs/logos/cootbie.svg",
            link: "https://cootbie.com",
            time: "Jul 2019 - Jan 2020",
            description: "Giving job-seekers a voice in the journey of recruitment.",
            expImg: "cootbieback.png"
        },
        Titan: {
            company: "Titan Robotics 2022",
            title: "Web Developer",
            logo: "imgs/logos/titan2022.png",
            link: "https://titanrobotics2022.com",
            time: "Jun 2019 - Jul 2019",
            description: "Showcasing robotics team for business partnerships.",
            expImg: "roboticsexp.png"
        },
        PWP: {
            company: "Packed With Purpose",
            title: "Graphic Design Intern",
            logo: "imgs/logos/pwp.png",
            link: "https://packedwithpurpose.gifts",
            time: "Jun 2018 - Jul 2018",
            description: "Corporate gifting combined with sustainable practices.",
            expImg: "pwpexp.png"
        }
    }
    console.log(Object.entries(experienceData))
</script>

<style>
</style>

<article class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <div class="row">
                <div class="col-12">
                    {#each Object.entries(experienceData) as item }
                        <Experience id={item[0]} data={item[1]} />
                    {/each}
                </div>
            </div>
        </div>
        <div class="col-md-6">

        </div>
    </div>
</article>