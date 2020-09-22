<script>
    import { createEventDispatcher } from 'svelte';
    import { redirectToExternal } from '../utils/ui'

    export let id
    export let data
    export let active
    export let mobile

    const dispatch = createEventDispatcher();

    function hoveredEXP() {
        dispatch('hoveredEXP', { id, bannerPNG: data.bannerPNG, bannerWEBP: data.bannerWEBP, description: data.description });
    }
</script>

<div class="info-wrapper exp-info-wrapper position-relative" class:info-wrapper-hover={active === id}
     class:info-wrapper-mobile={mobile} on:mouseenter={hoveredEXP}
     on:click={redirectToExternal(data.mobile, data.link)}>
    <span class = "externalButton center">
        <svg class="bi bi-box-arrow-up-right externalIcon" width="1em" height="1em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clip-rule="evenodd"/>
        </svg>
    </span>
    <div class="row info-item my-2 justify-content-start">
        <div class="col-2 h-100 justify-content-center company-logo-col center-vert pl-3">
            <img src={data.logo} class="img-fluid company-logo" alt="Company Logo" />
        </div>
        <div class="col-8 h-100 center-vert">
            <div class="envelope">
                <div class="row">
                    <div class="col-12 info-text">
                        <h2>{data.company}</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 info-text">
                        <p class="title">{data.title}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 info-text">
                        <p class="time">{data.time}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    //make the thing
    .info-wrapper {
        padding: 0.5rem 0;
        margin: 1rem 0;
        transition: 0.3s ease-out;
        border-radius: 20px;
        overflow: hidden;
        background: linear-gradient('45deg', rgba(0, 0, 0, 0.01), pink);
        opacity: 0.1;
    }
    .externalButton {
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 25%;
        position: absolute;
        top: -40px;
        left: calc(100% - 40px);
        opacity: 0;
        transition: 0.2s ease-out;
        background-color: #6cc1d8;
        z-index: 10;
    }
    .externalIcon {
        margin: 50px 0 0 11px;
        opacity: 1;
        transition: 0.35s ease-out;
    }
    .info-item {
        height: 15vh;
        box-sizing: border-box;
        margin-right: 0;
        margin-left: 0;
        .into-text {
            white-space: nowrap;
        }
        .title {
            margin: 0;
        }
        .time {
            color: rgba(0,0,0,0.3);
            margin: 0;
        }
        h2 {
            font-size: calc(1rem + 0.9vw);
            font-weight: bolder;
            letter-spacing: 0.01rem;
        }
        .company-logo-col {
            padding: 0;
        }
        .company-logo {
            max-width: 100%;
            max-height: 100%;
        }
    }

    .info-wrapper-hover {
        transform: translate(-0px, -4px);
        box-shadow: -2px 6px 20px rgba(104, 104, 104, 0.1);
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
        .externalButton {
            opacity: 1;
            transition: 0.2s ease-out;
        }
    }

    .info-wrapper-mobile {
        opacity: 1;
        box-shadow: -2px 6px 10px rgba(104, 104, 104, 0.1);
        background-color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
        .externalButton {
            opacity: 0;
        }
    }

</style>