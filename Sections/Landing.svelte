
<script>
    let xfocalpoint = window.innerWidth / 2
    let yfocalpoint = window.innerHeignt / 2
    let herocolor = 'linear-gradient(#be5108, #be5108,#be5108,  #ca3954, #ae478a, #755ea8, #2e6ca4, #2e6ca4, #2e6ca4)',
            rotate
    window.addEventListener('mousemove', (e) => {
        let x = e.pageX, y = e.pageY
        let xmovemeter = -x + xfocalpoint, ymovemeter = -y + yfocalpoint
        herocolor = `linear-gradient(${xmovemeter / 20}deg, #be5108, #be5108,#be5108,  #ca3954, #ae478a, #755ea8, #2e6ca4, #2e6ca4, #2e6ca4)`
        console.log(herocolor)
        rotate = `rotateX(${-(ymovemeter/yfocalpoint)/24}turn) rotateY(${-(xmovemeter/xfocalpoint)/16}turn) rotateZ(${-(xmovemeter/xfocalpoint)/150}turn) skewX(${(xmovemeter/xfocalpoint)}deg)`
    })
</script>

<style>
    section {
        height: 100vh;
    }

    h1 {
        font-weight: bolder;
        font-size: 10vw;
        text-align: left;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>

<section class="container-fluid center">
    <div class="row justify-content-center">
        <h1 style="transform: {rotate}; background: {herocolor}">Aye I'm Sam.</h1>
    </div>
</section>

