<script>
    import ProjectEnv from '../components/ProjectEnv.svelte'
</script>

<section class="component">
    <div class="container mt-5">
        <h1 class="pt-3 pb-3">I've made some sites.</h1>
        <h3 class="pt-1 pb-1">Feel free to take a look!</h3>
    </div>
    <ProjectEnv />
    <div class="container">
        <p>You can also view <a>my resume</a></p>
        <h2>
            <span class="outlined-header ">TL;DR:</span><br/>
            <span class="no-enphasis">I'm a</span> Full-Stack Developer <span class="no-enphasis ">and</span> UI/UX Designer.
            <span class="no-enphasis">I've worked with a lot of </span> startups.
        </h2>
    </div>
</section>

<style lang="scss">
    section {
        background-color: #2b2b2b
    }
</style>