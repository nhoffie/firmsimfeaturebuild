const firm = {
    name: "",
    assets: 0,
    liabilities: 0
};

const asset = {
    name: "",
    maxPrecision: 0,
    isFungible: false,
    type: ""
};

const holdings = {};

function addAsset(holdings, asset, quantity) {
    holdings[compressAsset(asset)] = { asset: asset, quantity: quantity };
}
