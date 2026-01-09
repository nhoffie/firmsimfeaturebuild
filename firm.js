// Creates a new firm object
// Arguments: name (string), assets (string - JSON stringify compressed holdings), liabilities (number) - all optional
// Returns: firm object with name, assets, and liabilities properties
// Usage: createFirm("Acme Corp", "{}", 5000) or createFirm()
function createFirm(name = "", assets = "{}", liabilities = 0) {
    return {
        name: name,
        assets: assets,
        liabilities: liabilities
    };
}

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
// Returns: assets (string - JSON stringify compressed holdings)
// Usage: getAssets(myFirm)
function getAssets(firm) {
    return firm.assets;
}

// Sets the assets value of a firm
// Arguments: firm (firm object), assets (string - JSON stringify compressed holdings)
// Returns: nothing
// Usage: setAssets(myFirm, "{}")
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

// Adds an asset to a firm's holdings with specified quantity
// Arguments: firm (firm object), asset (asset object), quantity (number)
// Returns: nothing
// Usage: addAssetToFirm(myFirm, energyAsset, 100)
function addAssetToFirm(firm, asset, quantity) {
    const holdings = JSON.parse(firm.assets);
    const assetKey = compressAsset(asset);

    if (holdings[assetKey]) {
        holdings[assetKey].quantity += quantity;
    } else {
        holdings[assetKey] = { asset: asset, quantity: quantity };
    }

    firm.assets = JSON.stringify(holdings);
}
