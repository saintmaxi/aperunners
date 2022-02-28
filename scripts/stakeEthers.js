/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const aperunnersAddress = "0x23d29535dd1a10D8783f76A5bD32C860262B8191";
// const aperunnersAbi = () => {
//     return `[{"inputs":[{"internalType":"string","name":"unrevealedURI_","type":"string"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"},{"internalType":"address","name":"opensea_","type":"address"},{"internalType":"address","name":"looksrare_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"AuthorizationForbidden","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"AuthorizationGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransfered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"MAX_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"auth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"},{"internalType":"bytes32[]","name":"proof_","type":"bytes32[]"}],"name":"claimWhitelist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"forbid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user_","type":"address"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user_","type":"address"},{"internalType":"bytes32[]","name":"proof_","type":"bytes32[]"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"looksrare","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketplacesApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"opensea","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleState","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"},{"internalType":"string","name":"baseExtension_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"looksrare_","type":"address"}],"name":"setLooksrare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"opensea_","type":"address"}],"name":"setOpensea","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"saleState_","type":"uint256"}],"name":"setSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"unrevealedURI_","type":"string"}],"name":"setUnrevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleMarketplacesApproved","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unrevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const runAddress = "";
// const runAbi = () => { 
    // return ``;
// };

// const apeVaultAddress = "";
// const apeVaultAbi = () => {
//     return ``;
// };

// const etherscanBase = `https://etherscan.io/tx/`;
// const correctChain = 1;
// const baseImageURI = "https://ipfs.io/ipfs/QmbBGQGGoYwPWepXRXQa3hY7BAaMUB413ddNTPRpfakWPT/";

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

const aperunnersAddress = "0x1FDA0E3a55303a51548E320871c5326620d4a0b9";
const aperunnersAbi = () => {
    return `[{"inputs":[{"internalType":"string","name":"unrevealedURI_","type":"string"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"},{"internalType":"address","name":"opensea_","type":"address"},{"internalType":"address","name":"looksrare_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"AuthorizationForbidden","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"AuthorizationGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransfered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"MAX_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"auth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"},{"internalType":"bytes32[]","name":"proof_","type":"bytes32[]"}],"name":"claimWhitelist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"forbid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user_","type":"address"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user_","type":"address"},{"internalType":"bytes32[]","name":"proof_","type":"bytes32[]"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"looksrare","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketplacesApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"opensea","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleState","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"},{"internalType":"string","name":"baseExtension_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"looksrare_","type":"address"}],"name":"setLooksrare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"opensea_","type":"address"}],"name":"setOpensea","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"saleState_","type":"uint256"}],"name":"setSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"unrevealedURI_","type":"string"}],"name":"setUnrevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleMarketplacesApproved","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unrevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const runAddress = "0xD1142900DB6999db187BC94B7c62fde89C3c2a93";
const runAbi = () => { 
    return `[{"inputs":[{"internalType":"address","name":"newApeRunners","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"airdroped","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"apeRunners","outputs":[{"internalType":"contract ERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isController","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"},{"internalType":"uint256","name":"deadline_","type":"uint256"},{"internalType":"uint8","name":"v_","type":"uint8"},{"internalType":"bytes32","name":"r_","type":"bytes32"},{"internalType":"bytes32","name":"s_","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"},{"internalType":"bool","name":"state","type":"bool"}],"name":"setControllers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]`;
};

const apeVaultAddress = "0xC3D8D04Bf37A40F3272363F4d8F744265f8f5e7d";
const apeVaultAbi = () => {
    return `[{"inputs":[{"internalType":"address","name":"newStakingToken","type":"address"},{"internalType":"address","name":"newRewardToken","type":"address"},{"internalType":"uint256","name":"newRate","type":"uint256"},{"internalType":"uint256","name":"newEndTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"depositsOf","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IRewardToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newEndTime","type":"uint256"}],"name":"setEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRewardToken","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newStakingToken","type":"address"}],"name":"setStakingToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IStakingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
const correctChain = 4;
const baseImageURI = "https://ipfs.io/ipfs/QmbBGQGGoYwPWepXRXQa3hY7BAaMUB413ddNTPRpfakWPT/";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to stake Ape Runners!');
    $("#runners").empty();
    $("#runners").append("<br><h3>No Ape Runners available...</h3>");
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const aperunners = new ethers.Contract(aperunnersAddress, aperunnersAbi(), signer);
const run = new ethers.Contract(runAddress, runAbi(), signer);
const apeVault = new ethers.Contract(apeVaultAddress, apeVaultAbi(), signer);

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

const importRunToWallet = async() => {
    ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: runAddress,
            symbol: 'RUN',
            decimals: 18,
            image: 'https://lh3.googleusercontent.com/ODaJbQx0V8W6xX9U1vMfrm_7m9QyyRk1wfF8tFk_yWt47XIWhjI3VGnk_WCxUvu331YmeK-5qC8DEeDZruhwdRwl4VTWybml1W9foQ=s130',
         },
        },
      });
}

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

// COCO Functions

const getAperunnersEnum = async()=>{
    let userAddress = await getAddress();
    let totalAperunners = await aperunners.balanceOf(userAddress);
    return totalAperunners;
};

const getAperunnersOwned = async() => {
    let userAddress = await getAddress();
    let ownedAperunners = await aperunners.tokensOfOwner(userAddress);
    return [...ownedAperunners].sort((a, b) => a - b);
}

const getStakedAperunnersEnum = async()=>{
    let userAddress = await getAddress();
    let totalAperunners = (await apeVault.depositsOf(userAddress)).length;
    return totalAperunners;
};

const getStakedAperunnersOwned = async() => {
    let userAddress = await getAddress();
    let ownedAperunners = await apeVault.depositsOf(userAddress);
    return [...ownedAperunners].sort((a, b) => a - b);
}

const getRunBalance = async()=>{
    let userAddress = await getAddress();
    let runBalance = await run.balanceOf(userAddress);
    $("#your-run").html(`${(Number(formatEther(runBalance))).toFixed(2)}`);
    return runBalance;
};

const getPendingRunBalance = async()=>{ // need to add up by total of each token (erroring out?)
    let userAddress = await getAddress();
    let pendingRun;
    try {
        pendingRun = 0;
        pendingRunArray = await apeVault.earned(userAddress);
        for (let i = 0; i < pendingRunArray.length; i++) {
            pendingRun += Number(formatEther(pendingRunArray[i]));
        }
    }
    catch {
        pendingRun = 0.0
    }
    $("#claimable-run").html(pendingRun);
    $("#claimable-run-mobile").html(pendingRun);
    return pendingRun;
};

const claim = async() => {
    if (await getPendingRunBalance() == 0) {
        await displayErrorMessage("You have no $RUN to claim!");
    }
    else {
        await apeVault.claim().then( async(tx_) => {
            await waitForTransaction(tx_);
        }); 
    }
};

// Staking functions

//Approval

const approveRunnersToVault = async() => {
    await aperunners.setApprovalForAll(apeVaultAddress, true).then (async (tx_) => {
        await waitForTransaction(tx_);
        $("#approval-button").html(`Approving<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
    });
};

var hideApproval = false;

const checkRunnersApproval = async() => {
    let userAddress = await getAddress();
    let approved = await aperunners.isApprovedForAll(userAddress, apeVaultAddress);
    if (!approved && !hideApproval) {
        await displayApprovalMessage()
    }
}

async function displayApprovalMessage() {
    if (!($("#approval-popup").length)) {
        let fakeJSX = `<div id="approval-popup">
                        <p>Before staking, you must approve the Ape Vault staking contract to move your Ape Runners.
                            <br>
                            <br>
                            <button class="button" id="approval-button" onclick="approveRunnersToVault()">APPROVE</button>
                            <button class="button" onclick="hideApprovalDiv()">NOT NOW</button>
                        </p>
                        </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-approval' style="height:${height}px"></div>`);
    }
}

function hideApprovalDiv() {
    $("#approval-popup").remove();
    $("#block-screen-approval").remove();
    hideApproval = true;
}


// Staking

const stakeByIds = async()=>{
    try {
        if (selectedForStaking.size == 0) {
            displayErrorMessage("Select at least 1 Ape Runner to stake!")
        }
        else if ((await getAperunnersEnum()) == 0) {
            displayErrorMessage("No available Ape Runners to stake!")
        }
        else {
            const runnersArray = Array.from(selectedForStaking);
        
            await apeVault.deposit(runnersArray).then( async(tx_) => {
                for (let i = 0; i < runnersArray.length; i++) {
                    $(`#runner-${runnersArray[i]}`).remove();
                }
                selectedForStaking = new Set();
                $("#selected-for-staking").text("None");
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) {
        if ((error.message).includes("transfer caller is not owner nor approved")) {
            await displayErrorMessage(`Error: You must approve Ape Vault!  Reload page to see prompt again.`)
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
};

const stakeAll = async()=>{
    try {
        if ((await getAperunnersEnum()) == 0) {
            displayErrorMessage("No available Ape Runners to stake!")
        }
        else {
            const runnersArray = await getAperunnersOwned();
        
            await apeVault.deposit(runnersArray).then( async(tx_) => {
                for (let i = 0; i < runnersArray.length; i++) {
                    $(`#runner-${runnersArray[i]}`).remove();
                }
                selectedForStaking = new Set();
                $("#selected-for-staking").text("None");
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) {
        if ((error.message).includes("transfer caller is not owner nor approved")) {
            await displayErrorMessage(`Error: You must approve Ape Vault!  Reload page to see prompt again.`)
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
};

const unstakeByIds = async()=>{
    try {
        const numStaked = await getStakedAperunnersEnum();
        if (numStaked == 0) {
            displayErrorMessage("No Ape Runners staked!")
        }
        else if (selectedForUnstaking.size == 0) {
            displayErrorMessage("Select at least 1 Ape Runner to unstake!")
        }
        else {
            const runnersArray = Array.from(selectedForUnstaking);
            await apeVault.withdraw(runnersArray).then( async(tx_) => {
                for (let i = 0; i < runnersArray.length; i++) {
                    $(`#runner-${runnersArray[i]}`).remove();
                }
                selectedForUnstaking = new Set();
                $("#selected-for-unstaking").text("None");
                // $("#shell-to-claim").text(`$SHELL to Claim: 0`);
                await waitForTransaction(tx_);
            }); 
        }
    }
    catch (error) {
        if ((error.message).includes("transfer caller is not owner nor approved")) {
            await displayErrorMessage(`Error: You must approve Ape Vault!  Reload page to see prompt again.`)
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
}

const unstakeAll = async()=>{
    try {
        const numStaked = await getStakedAperunnersEnum();
        if (numStaked == 0) {
            displayErrorMessage("No Ape Runners staked!")
        }
        else {
            const runnersArray = await getStakedAperunnersOwned();
            await apeVault.withdraw(runnersArray).then( async(tx_) => {
                for (let i = 0; i < runnersArray.length; i++) {
                    $(`#runner-${runnersArray[i]}`).remove();
                }
                selectedForUnstaking = new Set();
                $("#selected-for-unstaking").text("None");
                // $("#shell-to-claim").text(`$SHELL to Claim: 0`);
                await waitForTransaction(tx_);
            }); 
        }
    }
    catch (error) {
        if ((error.message).includes("transfer caller is not owner nor approved")) {
            await displayErrorMessage(`Error: You must approve Ape Vault! Reload page to see prompt again.`)
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
}


var currentlyStaked = [];

const getAperunnersImages = async()=>{
    $("#runners").empty();
    $("#runners").append(`<br><h3>Loading Ape Runners<span class="one">.</span><span class="two">.</span><span class="three">.</span></h3>`);

    const unstakedRunnersNum = await getAperunnersEnum();
    const stakedRunnersNum = await getStakedAperunnersEnum();
    const totalAperunners = unstakedRunnersNum + stakedRunnersNum;
    if (totalAperunners == 0) {
        $("#runners").empty();
        $("#runners").append("<br><h3>No Ape Runners available...</h3>");
    }
    else {
        let batchFakeJSX = "";

        // Get staked first
        const stakedRunners = await getStakedAperunnersOwned();
        currentlyStaked = stakedRunners;
        for (let i = 0; i < stakedRunnersNum; i++) {
            let id = stakedRunners[i];
            let active= "";
            if (selectedForUnstaking.has(Number(id))) {
                active = "active";
            }
            // let shellEarned = Number(formatEther(await stakedTurtles.getPendingTokens(id))).toFixed(2);
            batchFakeJSX += `<div id="runner-${id}" class="runner box ${active}">
                                <img src="${baseImageURI}${id}.png">
                                <p>Ape Runner #${id}</p>
                                <p>$RUN Earned: <span id="run-earned-${id}"><span class="one">.</span><span class="two">.</span><span class="three">.</span>​</span></p>
                                <button class="button staked">STAKED</button>
                                <button id="button-${id}" class="button select" onclick="selectForUnstaking(${id})">UNSTAKE</button>
                             </div>`
        };

        // Get unstaked last
        const unstakedRunners = await getAperunnersOwned();
        for (let i = 0; i < unstakedRunnersNum; i++) {
            let id = unstakedRunners[i];
            let active= "";
            if (selectedForStaking.has(Number(id))) {
                active = "active";
            }
            batchFakeJSX += `<div id="runner-${id}" class="runner box ${active}">
                                <img src="${baseImageURI}${id}.png">
                                <p>Ape Runner #${id}</p>
                                <p>Not earning $RUN!</p>
                                <button class="button unstaked">NOT STAKED</button>
                                <button id="button-${id}" class="button select" onclick="selectForStaking(${id})">STAKE</button>
                             </div>`
        };
        $("#runners").empty();
        $("#runners").append(batchFakeJSX);
    }
}

const getCocoEarnedByID = async(id) => {
    try {
        return Number(formatEther(await coco.getRewardsForId(id))).toFixed(2); //replace w coco version
    }
    catch {
        console.log('Metamask throws extra error. Token reward lookup was successful.')
        return 0;
    }
};

const updateRunEarned = async() => {
    let userAddress = await getAddress();
    let runEarned = (await apeVault.earned(userAddress)).map(x => Number(formatEther(x)));
    for (let i = 0; i < currentlyStaked.length; i++) {
        let runnerID = Number(currentlyStaked[i]);
        let runEarnedByID = runEarned[i];
        $(`#run-earned-${runnerID}`).html(runEarnedByID);
    };
};

const updateClaimingInfo = async()=>{
    if ((await getChainId()) === correctChain) {
        const loadingDiv = `<div class="loading-div" id="refresh-notification">REFRESHING <br>CLAIMING INTERFACE<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</div><br>`;
        $("#pending-transactions").append(loadingDiv);
        await getRunBalance();
        let apeRunnersNum = await getAperunnersEnum();
        let stakedApeRunnersNum = await getStakedAperunnersEnum();
        let totalAperunners = Number(apeRunnersNum) + Number(stakedApeRunnersNum);
        if (stakedApeRunnersNum == 0) {
            $("#claimable-run").text("0.0");
            $("#claimable-run-mobile").text("0.0");
        }
        else {
            await getPendingRunBalance();
        }
        $("#your-aperunners-num").html(totalAperunners);
        $("#your-aperunners-num-mobile").html(totalAperunners);
        $("#your-aperunners-num-2").html(totalAperunners);
        $("#your-aperunners-num-2-mobile").html(totalAperunners);
        $("#staked-aperunners-num").html(stakedApeRunnersNum);
        $("#staked-aperunners-num-mobile").html(stakedApeRunnersNum);
        await getAperunnersImages();
        $("#error-popup").remove();
        $("#refresh-notification").remove();
    } 
    else {
        $("#wallet").text(`Wrong Network!`);
        $("#available-aperunners-images").empty();
        $("#available-aperunners-images").text("Error: Wrong Network");
        $("#your-aperunners-num").html(0);
        $("#your-aperunners-num-mobile").html(0);
        $("#your-aperunners-num-2").html(0);
        $("#your-aperunners-num-2-mobile").html(0);
        $("#staked-aperunners-num").html(0);
        $("#staked-aperunners-num-mobile").html(0);
        $("#your-run").html(`0.0`);
        $("#claimable-run").html(`0.0`);
        $("#claimable-run-mobile").html("0.0");
        displayErrorMessage("Error: Wrong Network", false);
    }
};


// General functions

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        $("#refresh-notification").remove();
        await updateCurrentChain();
        await updateClaimingInfo();
    }
});

//selection helpers

var selectedForStaking = new Set();
var selectedForUnstaking = new Set();

async function selectForStaking(id) {
    if (!selectedForStaking.has(id)) {
        selectedForStaking.add(id);
        $(`#button-${id}`).text("DESELECT")
        $(`#runner-${id}`).addClass("active");
    }
    else {
        selectedForStaking.delete(id);
        $(`#button-${id}`).text("STAKE")
        $(`#runner-${id}`).removeClass("active");
    }
    if (selectedForStaking.size == 0) {
        $("#selected-for-staking").text("None");
    }
    else {
        let selectedString = `${Array.from(selectedForStaking).sort((a, b) => a - b).join(' ')}`;
        $("#selected-for-staking").text(selectedString);
    }
}

async function selectForUnstaking(id) {
    if (!selectedForUnstaking.has(id)) {
        selectedForUnstaking.add(id);
        $(`#button-${id}`).text("DESELECT")
        $(`#runner-${id}`).addClass("active");
    }
    else {
        selectedForUnstaking.delete(id);
        $(`#button-${id}`).text("UNSTAKE")
        $(`#runner-${id}`).removeClass("active");
    }
    if (selectedForUnstaking.size == 0) {
        $("#selected-for-unstaking").text("None");
        $("#shell-to-claim").text(`$SHELL to Claim: 0`);
    }
    else {
        let selectedForUnstakingArray = Array.from(selectedForUnstaking).sort((a, b) => a - b);
        let selectedString = `${selectedForUnstakingArray.join(' ')}`;
        $("#selected-for-unstaking").text(selectedString);
    }
}

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("RunPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("RunPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("RunPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateClaimingInfo();
    }
}

setInterval(async()=>{
    await updateInfo();
    await updateRunEarned();
    await checkRunnersApproval();
    await getPendingRunBalance();
}, 5000)

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    $("#account").addClass("connected");
    $("#mobile-account").text(`${userAddress.substr(0,9)}...`);
    $("#mobile-account").addClass("connected");
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    if (pendingTransactions.size < 1) {
        await updateClaimingInfo();
        await checkRunnersApproval();
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}
