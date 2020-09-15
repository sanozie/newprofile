<script>
    import ProjectEnv from '../components/ProjectEnv.svelte'

    export let mobile
</script>

<section class="container-fluid">
    <div class="container mt-5 pt-5">
        <h1 class="pt-3 pb-3">I've made a couple sites &#128071;.</h1>
        <h3 class="pt-1 pb-1">Feel free to take a look!</h3>
    </div>
    <ProjectEnv mobile={mobile}/>
</section>

<style lang="scss">
    section {
        background-color: #2b2b2b;
        color: white;
    }

    h1 {
        font-weight: 700;
    }

</style>