<script lang="ts">
    let xfocalpoint = window.innerWidth / 2
    let yfocalpoint = window.innerHeight / 2
    let herocolor = 'linear-gradient(#be5108, #be5108,#be5108,  #ca3954, #ae478a, #755ea8, #2e6ca4, #2e6ca4, #2e6ca4)',
            rotate

    function watchMouse(e) {
        let x = e.pageX, y = e.pageY
        let xmovemeter = -x + xfocalpoint, ymovemeter = -y + yfocalpoint
        herocolor = `linear-gradient(${xmovemeter / 20}deg, #be5108, #be5108,#be5108,  #ca3954, #ae478a, #755ea8, #2e6ca4, #2e6ca4, #2e6ca4)`
        rotate = `rotateX(${-(ymovemeter/yfocalpoint)/24}turn)
        rotateY(${-(xmovemeter/xfocalpoint)/16}turn)
        rotateZ(${-(xmovemeter/xfocalpoint)/150}turn)
        skewX(${(xmovemeter/xfocalpoint)}deg)`
    }

</script>

<section class="container-fluid center" on:mousemove={(e) => watchMouse(e)}>
    <div class="row justify-content-center">
        <h1 style="transform: {rotate}; background-image: {herocolor}">Aye I'm Sam.</h1>
    </div>
</section>

<style>
    section {
        min-height: 100vh;
    }
    h1 {
        font-weight: bolder;
        font-size: 10vw;
        text-align: left;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    }
</style>