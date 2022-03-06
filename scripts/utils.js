async function displayErrorMessage(message, timed=true) {
    if (!($("#error-popup").length)) {
        let fakeJSX = `<div id="error-popup" class="popup">
        <div class="popup-inner">
            <div class="description">${message}</div>
        </div>
        </div>`;
        $("body").append(fakeJSX);
        if (timed) {
            await sleep(2500);
            $("#error-popup").remove();
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayLoading() {
    if (!($("#loading-popup").length)) {
        // let fakeJSX = `<div id="loading-popup"></div>`;
        // $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-loading' style="height:${height}px"></div>`);
    }
}

function toggleMenu() {
    const el = document.getElementById("mobile-nav-menu")
    el.classList.toggle('expanded')
    el.classList.toggle('collapsed')
 }

 function clearPendingTxs() {
    localStorage.removeItem("RunPendingTxs");
    localStorage.removeItem("SerumPendingTxs");
    pendingTransactions.clear();
    location.reload();
};
