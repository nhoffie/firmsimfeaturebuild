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

const assetsObject = {};

function addAsset(assetsObject, asset, quantity) {
    assetsObject[asset.name] = { asset: asset, quantity: quantity };
}
