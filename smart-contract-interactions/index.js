const Web3 = require("web3");

const web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/UasYvMdW33hotLeHLKN2VfDjmgXWMfTN");

//console.log("connected to node", web3);

//get balance
// web3.eth.getBalance(
//     "0x7908683d2488d15D9FFe890A0C3461cE0D09D2f8",
//     (err, wei) => {
//         balance = web3.utils.fromWei(wei, "ether");
//         console.log("balance", balance);
//     }


const getWalletBalance = async (_address) => {
    // check if wallet address is valid
    const balance = await web3.eth.getBalance(_address)

    return web3.utils.fromWei(balance, "ether")
}

getWalletBalance("0x7908683d2488d15D9FFe890A0C3461cE0D09D2f8").then(console.log)
getWalletBalance("0x7908683d2488d15D9FFe890A0C3461cE0D09D2f8").then(console.log)

module.exports = {
    getWalletBalance
}

//create wallet address 
const createWalletAddress = async () => {
     const wallet = web3.eth.accounts.create();

     console.log(wallet)

     return wallet;
}

createWalletAddress()