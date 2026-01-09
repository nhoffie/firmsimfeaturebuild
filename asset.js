function createAsset(name = "", maxPrecision = 0, isFungible = false, type = "") {
    return {
        name: name,
        maxPrecision: maxPrecision,
        isFungible: isFungible,
        type: type
    };
}

function getName(asset) {
    return asset.name;
}

function setName(asset, name) {
    asset.name = name;
}

function getMaxPrecision(asset) {
    return asset.maxPrecision;
}

function setMaxPrecision(asset, maxPrecision) {
    asset.maxPrecision = maxPrecision;
}

function getIsFungible(asset) {
    return asset.isFungible;
}

function setIsFungible(asset, isFungible) {
    asset.isFungible = isFungible;
}

function getType(asset) {
    return asset.type;
}

function setType(asset, type) {
    asset.type = type;
}

function compressAsset(asset) {
    return JSON.stringify(asset);
}

function uncompressAsset(id) {
    return JSON.parse(id);
}

function addAsset(holdings, asset, quantity) {
    holdings[compressAsset(asset)] = { asset: asset, quantity: quantity };
}
