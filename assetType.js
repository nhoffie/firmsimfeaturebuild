// Gets the name of an assetType
// Arguments: assetType (assetType object)
// Returns: name (string)
// Usage: getName(myAssetType)
function getName(assetType) {
    return assetType.name;
}

// Sets the name of an assetType
// Arguments: assetType (assetType object), name (string)
// Returns: nothing
// Usage: setName(myAssetType, "Silver")
function setName(assetType, name) {
    assetType.name = name;
}

// Gets the max decimals of an assetType
// Arguments: assetType (assetType object)
// Returns: maxDecimals (integer)
// Usage: getMaxDecimals(myAssetType)
function getMaxDecimals(assetType) {
    return assetType.maxDecimals;
}

// Sets the max decimals of an assetType
// Arguments: assetType (assetType object), maxDecimals (integer)
// Returns: nothing
// Usage: setMaxDecimals(myAssetType, 3)
function setMaxDecimals(assetType, maxDecimals) {
    assetType.maxDecimals = maxDecimals;
}

// Gets the fungibility of an assetType
// Arguments: assetType (assetType object)
// Returns: isFungible (boolean)
// Usage: getIsFungible(myAssetType)
function getIsFungible(assetType) {
    return assetType.isFungible;
}

// Sets the fungibility of an assetType
// Arguments: assetType (assetType object), isFungible (boolean)
// Returns: nothing
// Usage: setIsFungible(myAssetType, true)
function setIsFungible(assetType, isFungible) {
    assetType.isFungible = isFungible;
}

// Gets the type of an assetType
// Arguments: assetType (assetType object)
// Returns: type (string)
// Usage: getType(myAssetType)
function getType(assetType) {
    return assetType.type;
}

// Sets the type of an assetType
// Arguments: assetType (assetType object), type (string)
// Returns: nothing
// Usage: setType(myAssetType, "commodity")
function setType(assetType, type) {
    assetType.type = type;
}

// Compresses an assetType object into a unique ID string
// Arguments: assetType (assetType object)
// Returns: id (string)
// Usage: compressAssetType(myAssetType)
function compressAssetType(assetType) {
    return JSON.stringify(assetType);
}

// Uncompresses an ID string back into an assetType object
// Arguments: id (string)
// Returns: assetType (assetType object)
// Usage: uncompressAssetType(assetTypeId)
function uncompressAssetType(id) {
    return JSON.parse(id);
}

// Creates an asset instance with an asset type and quantity
// Arguments: assetTypeJson (string), quantity (BigNumber)
// Returns: assetInstance (string)
// Usage: createAssetInstance('{"name":"energy","maxDecimals":3,"isFungible":true,"type":"commodity"}', new BigNumber(100))
function createAssetInstance(assetTypeJson, quantity) {
    return JSON.stringify({ asset: assetTypeJson, quantity: quantity });
}
