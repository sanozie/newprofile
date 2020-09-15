<script>
</script>

<section class="container-fluid">
    <div class="container my-5 py-5">
        <div class="row justify-content-center">
            <div class="col-md-5 center-vert">
                <div class="center-env">
                    <h1 class="pt-1 pb-1 m-0 text-md-left text-center">Socials on deck 🎉.</h1>
                    <h3 class="pt-1 pb-1 text-md-left text-center">I'm Gen Z after all</h3>
                </div>
            </div>
            <div class="col-md-2 col-3 center-vert">
                <img id="profpic" src="/imgs/profile.jpg" class="img-fluid" />
            </div>
            <div class="col-md-5 center-vert">
                <div class="row justify-content-center">
                    <div class="col-2 center-vert">
                        <a href="https://linkedin.com/in/samanozie" target="_blank">
                            <img src="/imgs/socialers/linkedin.png" class="socialericon img-fluid p-2"/>
                        </a>
                    </div>
                    <div class="col-2 center-vert">
                        <a href="https://github.com/sanozie" target="_blank">
                            <img src="/imgs/socialers/github.png" class="socialericon img-fluid p-2"/>
                        </a>
                    </div>
                    <div class="col-2 center-vert">
                        <a href="mailto:sanoziec@gmail.com">
                            <img src="/imgs/socialers/mail.png" class="socialericon img-fluid p-2"/>
                        </a>
                    </div>
                    <div class="col-2 center-vert">
                        <a href="https://www.tiktok.com/@profit_made_it" target="_blank">
                            <img src="/imgs/socialers/tiktok.png" class="socialericon img-fluid p-2"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    h1 {
        font-weight: 700;
    }

    h1, h3 {
        color: #9D9D9D;
        mix-blend-mode: color-burn;
    }

    section {
        background-image: url('/imgs/SocialBack.svg');
        background-size: cover;
    }

    #profpic {
        border-radius: 50%;
        border: 5px solid rgba(0,0,0,0.7);
    }

    .socialericon {
        mix-blend-mode: color-burn;
        transition: 0.2s ease-out;
    }

    .socialericon:hover {
        cursor: pointer;
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2)
    }
</style>