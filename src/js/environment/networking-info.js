const networkingDefaults = {
    type: undefined,
    effectiveType: undefined,
    downlinkMax: 0,
    downlink: 0,
    rtt: 0,
    saveData: false,
    onLine: false
};

const networkingInfo = function (_, provider) {
    let networkingInfo = _.extend({}, networkingDefaults);
    if (navigator) {
        networkingInfo.onLine = navigator.onLine;
        if (navigator.connection) {
            _.extend(networkingInfo, navigator.connection);
            // TODO: remove onchange, might not want to support on other browsers
        }
    }

    if (provider && provider.name === 'hlsjs') {
        // TODO: obtain downlink from hls.js
    } else if (provider && provider.name === 'shaka') {
        // TODO: obtain downlink from shaka
    }

    return networkingInfo;
};

export default networkingInfo;
