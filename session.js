const session = {
    assets: {},
    firms: {}
};

// Creates a new asset object and adds it to session
// Arguments: name (string), maxDecimals (integer), isFungible (boolean), type (string) - all optional
// Returns: nothing
// Usage: createAsset("Gold", 2, true, "commodity") or createAsset()
function createAsset(name = "", maxDecimals = 0, isFungible = false, type = "") {
    const asset = {
        name: name,
        maxDecimals: maxDecimals,
        isFungible: isFungible,
        type: type
    };
    session.assets[JSON.stringify(asset)] = asset;
}

// Creates a new firm object and adds it to session
// Arguments: name (string), assets (string - JSON stringify compressed holdings), liabilities (number) - all optional
// Returns: nothing
// Usage: createFirm("Acme Corp", "{}", 5000) or createFirm()
function createFirm(name = "", assets = "{}", liabilities = 0) {
    const firm = {
        name: name,
        assets: assets,
        liabilities: liabilities
    };
    session.firms[JSON.stringify(firm)] = firm;
}
