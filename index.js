import {
  TestNetWallet,
} from "mainnet-js"

async function run () {
//  const wallet = await TestNetWallet.newRandom();
  const wallet = await TestNetWallet.fromSeed("sport skin half next odor demand split shove plunge seed model social", "m/44'/0'/0'/0/0")
  console.log(wallet)
  const balance = await wallet.getBalance()
  console.log(balance);
  
// create & send transaction
//  const txData = await wallet.send([
//    {
//      cashaddr: 'YOUR ADDRESS HERE',
//      value: 0.001,
//      unit: 'bch'
//    }
//  ])
}

run();
