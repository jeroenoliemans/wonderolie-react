// ajax request helper
function get(url) {

    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function() {
            reject(Error('Network Error'));
        };

        req.send();
    });
}

const portFolioServices = {
    getPortFolioItems: (query) => {
        return get(`items/items.json`);
    },
    getPortFolioItem: (itemId) => {
        return get(`items/${itemId}.json`);
    },
};

export default portFolioServices;
