export default class Page {
    open(path) {
        browser.url(path);
    }

    waitUsingFixedTimout(time) {
        console.log("Pausing for: " + time + " seconds.");
        browser.pause(time);
    }
}
