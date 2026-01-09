function createFirm() {
    return {
        name: "",
        assets: 0,
        liabilities: 0
    };
}

function getName(firm) {
    return firm.name;
}

function setName(firm, name) {
    firm.name = name;
}

function getAssets(firm) {
    return firm.assets;
}

function setAssets(firm, assets) {
    firm.assets = assets;
}

function getLiabilities(firm) {
    return firm.liabilities;
}

function setLiabilities(firm, liabilities) {
    firm.liabilities = liabilities;
}
