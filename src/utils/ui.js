/**
 * Redirects the user to external link, depending on mobile capabilities.
 * @param {boolean} mobile
 * @param {string} link
 */
export function redirectToExternal(mobile, link) {
    if(window.innerWidth > 600 || mobile) {
        window.open(link, '_blank')
    }
}


/**
 * Moves a row within a larger column. To be used with a scroll event listener.
 * @param {string} bannerCol
 * @param {string} bannerRow
 * @returns {string}
 */
export function moveBanner(bannerCol, bannerRow) {
    let floatEnvTop = bannerCol.getBoundingClientRect().top, floatEnvBottom = bannerCol.getBoundingClientRect().bottom
    let floatElHeight = bannerRow.offsetHeight, floatEnvHeight = bannerCol.offsetHeight;
    let startPoint = window.pageYOffset + floatEnvTop + floatElHeight, stopPoint = window.pageYOffset + floatEnvBottom - window.innerHeight
    let windowBottomPos = window.innerHeight + window.scrollY, windowTopPos = window.scrollY
    if(windowBottomPos > startPoint && windowTopPos < stopPoint) {
        return `${((windowBottomPos - startPoint)/stopPoint) * floatEnvHeight}px`
    }
}