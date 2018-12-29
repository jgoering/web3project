var Web3 = require("web3")
var EthereumTransaction = require("ethereumjs-tx")
var web3 = new Web3('HTTP://127.0.0.1:7545')

var sendingAddress = '0x49983e22E5e6Bcc8be1Daf83ff9B6B4e8B3A41B4'
var receivingAddress = '0x528628E6E1D9438AF8A7cccf4a6EB7Fc72BD2d90'

var rawTransaction = {
    nonce: 1,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 1,
    data: ""
}

var privateKeySender = 'd488154cc0859611a566ccda9b219abfaf70e5804c334584835ca2405cbb1068'
var privateKeySenderHex = new Buffer(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)

var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);