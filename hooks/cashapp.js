import { useState, useEffect } from "react";
// import { getAvatarUrl } from ''
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import BigNumber from "bignumber.js";

export const useCashApp = () => {

  // const [ammount, setAmount] = useState(0)
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState("");
  const [transactionPurpose, setTransactionPurpose] = useState("");

  const { connected, publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();


  // Create the transaction to sent to our wallet and we can sign it from there!!!!!

  const makeTransaction = async (fromWallet, toWallet, amount, reference) => {
    const network = WalletAdapterNetwork.Devnet
    const endpoint = clusterApiUrl(network)
    const connection = new Connection(endpoint)

    // Get a recent blockhash to include in the transaction
    const {blockhash} = await connection.getLatestBlockhash('finalized')

    const transaction = new Transaction({
      recentBlockhash: blockhash,
      // Here the buyer pays the transaction fees
      feePayer: fromWallet
    })


    // Create the instruction to send SOL from owner to recipient 
    const transferInstruction = SystemProgram.transfer({
      fromPubkey: fromWallet,
      lamports: amount.multipliedBy(LAMPORTS_PER_SOL).toNumber(),
      toPubkey: toWallet,
    })

    transferInstruction.keys.push({
      pubkey: reference,
      isSigner: false,
      isWritable: false,
    })

    transaction.add(transferInstruction)
    
    return transaction

  }


  // Create the function to run the transaction this will added to the button 
  const doTransaction = async ({amount, receiver, transactionPurpose}) => {
      const fromWallet= publicKey
      const toWallet = new PublicKey(receiver)
      const bnAmount = new BigNumber(amount)
      const reference = Keypair.generate().publicKey
      const transaction = await makeTransaction(fromWallet,toWallet,bnAmount,reference)


      const txnHash  = await sendTransaction(transaction, connection)
      console.log(txnHash)

      // Create transaction history object

  }


  return { connected, publicKey , doTransaction, amount,setAmount,receiver,setReceiver,transactionPurpose,setTransactionPurpose};
};
