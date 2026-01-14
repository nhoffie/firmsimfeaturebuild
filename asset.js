// Gets the name of an asset
// Arguments: asset (asset object)
// Returns: name (string)
// Usage: getName(myAsset)
function getName(asset) {
    return asset.name;
}

// Sets the name of an asset
// Arguments: asset (asset object), name (string)
// Returns: nothing
// Usage: setName(myAsset, "Silver")
function setName(asset, name) {
    asset.name = name;
}

// Gets the max decimals of an asset
// Arguments: asset (asset object)
// Returns: maxDecimals (integer)
// Usage: getMaxDecimals(myAsset)
function getMaxDecimals(asset) {
    return asset.maxDecimals;
}

// Sets the max decimals of an asset
// Arguments: asset (asset object), maxDecimals (integer)
// Returns: nothing
// Usage: setMaxDecimals(myAsset, 3)
function setMaxDecimals(asset, maxDecimals) {
    asset.maxDecimals = maxDecimals;
}

// Gets the fungibility of an asset
// Arguments: asset (asset object)
// Returns: isFungible (boolean)
// Usage: getIsFungible(myAsset)
function getIsFungible(asset) {
    return asset.isFungible;
}

// Sets the fungibility of an asset
// Arguments: asset (asset object), isFungible (boolean)
// Returns: nothing
// Usage: setIsFungible(myAsset, true)
function setIsFungible(asset, isFungible) {
    asset.isFungible = isFungible;
}

// Gets the type of an asset
// Arguments: asset (asset object)
// Returns: type (string)
// Usage: getType(myAsset)
function getType(asset) {
    return asset.type;
}

// Sets the type of an asset
// Arguments: asset (asset object), type (string)
// Returns: nothing
// Usage: setType(myAsset, "commodity")
function setType(asset, type) {
    asset.type = type;
}

// Compresses an asset object into a unique ID string
// Arguments: asset (asset object)
// Returns: id (string)
// Usage: compressAsset(myAsset)
function compressAsset(asset) {
    return JSON.stringify(asset);
}

// Uncompresses an ID string back into an asset object
// Arguments: id (string)
// Returns: asset (asset object)
// Usage: uncompressAsset(assetId)
function uncompressAsset(id) {
    return JSON.parse(id);
}

// Adds an asset to a holdings object with a specified quantity
// Arguments: holdings (holdings object), asset (asset object), quantity (number)
// Returns: nothing
// Usage: addAsset(myHoldings, goldAsset, 100)
function addAsset(holdings, asset, quantity) {
    holdings[compressAsset(asset)] = { asset: asset, quantity: quantity };
}
