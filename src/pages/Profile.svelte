<script>
    import Experiences from "../components/Experiences.svelte";
</script>

<section class="container-fluid pt-5">
    <div class="container mt-5">
        <h1 class="pt-3 pb-3">Hello 👋 Thanks for visiting.</h1>
        <h3 class="pt-1 pb-1">First off, a bit of experience</h3>
    </div>
    <Experiences />
    <div class="container">
        <p>You can also view <a>my resume</a></p>
        <h2>
            <span class="outlined-header ">TL;DR:</span><br/>
            <span class="no-enphasis">I'm a</span> Full-Stack Developer <span class="no-enphasis ">and</span> UI/UX Designer.
            <span class="no-enphasis">I've worked with a lot of </span> startups.
        </h2>
    </div>
</section>

<style>
    section {
        background-color: #ececec;
    }
    h1 {
        font-weight: 700;
    }
</style>