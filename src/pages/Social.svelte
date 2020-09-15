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
    <div class="row justify-content-center">
        <p class="p-3 text-center footer">Made with
            <span class="heart-icon">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>️
            </span>

            , designed in <a href="https://www.adobe.com/products/xd.html" target="_blank">Adobe XD</a>
            , and coded using <a href="https://svelte.dev/" target="_blank">Svelte.</a>
            <br/>
            You can view the code at my <a href="https://github.com/sanozie/newprofile" target="_blank">Repo</a></p>
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

    .footer {
        mix-blend-mode: color-dodge;
        color: #1d1d1d;
    }

    .heart-icon {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
    }
</style>