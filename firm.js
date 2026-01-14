// Gets the name of a firm
// Arguments: firm (firm object)
// Returns: name (string)
// Usage: getName(myFirm)
function getName(firm) {
    return firm.name;
}

// Sets the name of a firm
// Arguments: firm (firm object), name (string)
// Returns: nothing
// Usage: setName(myFirm, "New Name")
function setName(firm, name) {
    firm.name = name;
}

// Gets the assets value of a firm
// Arguments: firm (firm object)
// Returns: assets (object)
// Usage: getAssets(myFirm)
function getAssets(firm) {
    return firm.assets;
}

// Sets the assets value of a firm
// Arguments: firm (firm object), assets (object)
// Returns: nothing
// Usage: setAssets(myFirm, {})
function setAssets(firm, assets) {
    firm.assets = assets;
}

// Gets the liabilities value of a firm
// Arguments: firm (firm object)
// Returns: liabilities (number)
// Usage: getLiabilities(myFirm)
function getLiabilities(firm) {
    return firm.liabilities;
}

// Sets the liabilities value of a firm
// Arguments: firm (firm object), liabilities (number)
// Returns: nothing
// Usage: setLiabilities(myFirm, 8000)
function setLiabilities(firm, liabilities) {
    firm.liabilities = liabilities;
}

// Changes the quantity of an asset type in a firm's assets
// Arguments: firm (firm object), assetType (assetType object), quantity (BigNumber or number)
// Returns: nothing
// Usage: changeAssetQuantity(myFirm, energyAssetType, new BigNumber(100))
function changeAssetQuantity(firm, assetType, quantity) {
    const bigQuantity = quantity instanceof BigNumber ? quantity : new BigNumber(quantity);
    const adjustedQuantity = bigQuantity.decimalPlaces(assetType.maxDecimals);
    if (firm.assets[assetType.name]) {
        const newQuantity = firm.assets[assetType.name].quantity.plus(adjustedQuantity).decimalPlaces(assetType.maxDecimals);
        if (newQuantity.isEqualTo(0)) {
            delete firm.assets[assetType.name];
        } else {
            firm.assets[assetType.name].quantity = newQuantity;
        }
    } else {
        firm.assets[assetType.name] = createAssetInstance(assetType, adjustedQuantity);
    }
}
