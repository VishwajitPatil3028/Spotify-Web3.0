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

import HomePage from "../pages/homepage";

export const Payment = () => {
  const wallet = useWallet();
  const [payers, setPayers] = useState([]);
  const [isPaid, setPaid] = useState(false);

  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState("");
  const [transactionPurpose, setTransactionPurpose] = useState("");

  const { connected, publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  // const makeTransaction = async (fromWallet, toWallet, amount, reference) => {
  //   const network = WalletAdapterNetwork.Devnet;
  //   const endpoint = clusterApiUrl(network);
  //   const connection = new Connection(endpoint);

  //   // Get a recent blockhash to include in the transaction
  //   const { blockhash } = await connection.getLatestBlockhash("finalized");

  //   const transaction = new Transaction({
  //     recentBlockhash: blockhash,
  //     // Here the buyer pays the transaction fees
  //     feePayer: fromWallet,
  //   });

  //   // Create the instruction to send SOL from owner to recipient
  //   const transferInstruction = SystemProgram.transfer({
  //     fromPubkey: fromWallet,
  //     lamports: amount.multipliedBy(LAMPORTS_PER_SOL).toNumber(),
  //     toPubkey: toWallet,
  //   });

  //   transferInstruction.keys.push({
  //     pubkey: reference,
  //     isSigner: false,
  //     isWritable: false,
  //   });

  //   transaction.add(transferInstruction);

  //   return transaction;
  // };


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
  // setAmount(1);
  // setReceiver("ECZotpYCQJbKsZMSR3dcfYr217P5bB9Txt8vCn9rHq7Q");
  // setTransactionPurpose("Aiise hi bhej diye!!");

  const payClicked = async ({ amount, receiver, transactionPurpose }) => {
    const fromWallet = publicKey;
    const toWallet = new PublicKey(
      "ECZotpYCQJbKsZMSR3dcfYr217P5bB9Txt8vCn9rHq7Q"
    );
    const bnAmount = new BigNumber(1);
    const reference = Keypair.generate().publicKey;
    const transaction = await makeTransaction(
      fromWallet,
      toWallet,
      bnAmount,
      reference
    );

    const txnHash = await sendTransaction(transaction, connection);
    console.log(txnHash);

    // const fromWallet = publicKey;
    // const toWallet = new PublicKey("ECZotpYCQJbKsZMSR3dcfYr217P5bB9Txt8vCn9rHq7Q");
    // const bnAmount = new BigNumber(1);
    // const reference = Keypair.generate().publicKey;
    // const transaction = await makeTransaction(
    //   fromWallet,
    //   toWallet,
    //   bnAmount,
    //   reference
    // );

    // const txnHash = await sendTransaction(transaction, connection);
    // console.log(txnHash);

    setPaid(true);
    alert("Transaction Done......");

    // try {

    // } catch (e) {
    //   alert("Transaction Error.....");
    //   setPaid(true);
    // }
  };

  // console.log(getAllWallets)
  if (isPaid) return <HomePage />;
  // else return <HomePage/>

  /** Payment Component */
  return (
    <div className={styles.main}>
      <p className={styles.text}>Make payment</p>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={payClicked}
          disabled={isPaid}
        >
          Pay 0.1 Sol
        </button>
        <button className={styles.button}>Verify Payment</button>
      </div>
    </div>
  );
};

const styles = {
  main: `w-screen h-screen bg-white text-black flex flex-col justify-center items-center`,
  button: `bg-[#22C55E] m-3 text-white font-bold, py-4 px-7 rounded-full hover:opacity-70 transition`,
  text: `text-4xl mb-10`,
  buttons: `flex items-center`,
};

export default Payment;

//********************************************************************* */

// import React from "react";
// import { useEffect, useState } from "react";
// import { getProgramInstance } from "../utils/utils";
// import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
// import { SOLANA_HOST } from "../utils/const";
// import { RPC_ENDPOINT } from "../utils/const";
// import { PublicKey } from "@solana/web3.js";
// import { useWallet } from "@solana/wallet-adapter-react";
// import HomePage from "../pages/homepage";

// const anchor = require("@project-serum/anchor");

// const { web3 } = anchor;
// const { SystemProgram } = web3;
// const utf8 = anchor.utils.bytes.utf8;

// const defaultAccounts = {
//   tokenProgram: TOKEN_PROGRAM_ID,
//   clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
//   systemProgram: SystemProgram.programId,
// };

// export const Payment = () => {
//   const wallet = useWallet();
//   const connection = new anchor.web3.Connection(RPC_ENDPOINT);
//   const program = getProgramInstance(connection, wallet);
//   const [payers, setPayers] = useState([]);
//   const [isPaid, setPaid] = useState(false);

//   // useEffect(() => {
//   //   if (wallet.connected) getAllWallets();
//   // }, [wallet.connected, isPaid]);

//   // const getAllWallets = async () => {
//   //   const payerList = await program.account.payerAccount.all();
//   //   setPayers(payerList);

//   //   payerList.forEach((payer) => {
//   //     if (payer.account.wallet.toBase58() == wallet.publicKey.toBase58())
//   //       setPaid(true);
//   //   });
//   // };

//   const payClicked = async () => {
//     // let [payerSigner] = await anchor.web3.PublicKey.findProgramAddress(
//     //   [utf8.encode("payer"), wallet.publicKey.toBuffer()],
//     //   program.programId
//     // );

//     let payerInfo;

//     // try {
//     //   payerInfo = await program.account.payerAccount.fetch(payerSigner);
//     // } catch (e) {
//     //   try {
//     //     await program.rpc.acceptPayment({
//     //       accounts: {
//     //         payerWallet: payerSigner,
//     //         receiver: new PublicKey(
//     //           "9PuAr7UXpUZnw7zUzQku2a63ziCJoCspyDF3rP6knFUu"
//     //         ),
//     //         authority: wallet.publicKey,
//     //         ...defaultAccounts,
//     //       },
//     //     });
//     //     alert("Transaction proceed");
//     //   } catch (e) {
//     //     alert(e.message);
//     //   }
//     // }

//     // payerInfo = await program.account.payerAccount.fetch(payerSigner);

//     try{

//       await program.rpc.acceptPayment({
//         accounts: {
//           payerWallet: payerSigner,
//           receiver: new PublicKey("9PuAr7UXpUZnw7zUzQku2a63ziCJoCspyDF3rP6knFUu"),
//           authority: wallet.publicKey,
//           ...defaultAccounts,
//         },
//       });
//     } catch (e){

//       alert("Transaction proceed");
//       setPaid(true);

//     }
//   };

//   // console.log(getAllWallets)
//   if (isPaid) return <HomePage />;
//   // else return <HomePage/>

//   /** Payment Component */
//   return (
//     <div className={styles.main}>
//       <p className={styles.text}>Make payment</p>
//       <div className={styles.buttons}>
//         <button
//           className={styles.button}
//           onClick={payClicked}
//           disabled={isPaid}
//         >
//           Pay 0.1 Sol
//         </button>
//         <button className={styles.button} >
//           Verify Payment
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   main: `w-screen h-screen bg-white text-black flex flex-col justify-center items-center`,
//   button: `bg-[#22C55E] m-3 text-white font-bold, py-4 px-7 rounded-full hover:opacity-70 transition`,
//   text: `text-4xl mb-10`,
//   buttons: `flex items-center`,
// };

// export default Payment;

//******************************************************

// ***************************************************************************

// import { useEffect, useState } from 'react'
// import { getProgramInstance } from '../utils/utils'
// import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
// import { SOLANA_HOST } from '../utils/const'
// import { PublicKey } from '@solana/web3.js'
// import { useWallet } from '@solana/wallet-adapter-react'
// import HomePage from '../pages/homepage'

// const anchor = require('@project-serum/anchor')

// const { web3 } = anchor
// const { SystemProgram } = web3
// const utf8 = anchor.utils.bytes.utf8

// const defaultAccounts = {
//   tokenProgram: TOKEN_PROGRAM_ID,
//   clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
//   systemProgram: SystemProgram.programId,
// }

// export const Payment = () => {
//   const wallet = useWallet()
//   const connection = new anchor.web3.Connection(SOLANA_HOST)
//   const program = getProgramInstance(connection, wallet)
//   const [payers, setPayers] = useState([])
//   const [isPaid, setPaid] = useState(false)

//   useEffect(() => {
//     if (wallet.connected) getAllWallets()
//   }, [wallet.connected, isPaid])

//   const getAllWallets = async () => {
//     const payerList = await program.account.payerAccount.all()
//     setPayers(payerList)

//     payerList.forEach(payer => {
//       if (payer.account.wallet.toBase58() == wallet.publicKey.toBase58())
//         setPaid(true)
//     })
//   }

//   const payClicked = async () => {
//     let [payerSigner] = await anchor.web3.PublicKey.findProgramAddress(
//       [utf8.encode('payer'), wallet.publicKey.toBuffer()],
//       program.programId,
//     )

//     let payerInfo

//     try {
//       payerInfo = await program.account.payerAccount.fetch(payerSigner)
//     } catch (e) {
//       try {
//         await program.rpc.acceptPayment({
//           accounts: {
//             payerWallet: payerSigner,
//             receiver: new PublicKey(
//               '9PuAr7UXpUZnw7zUzQku2a63ziCJoCspyDF3rP6knFUu',
//             ),
//             authority: wallet.publicKey,
//             ...defaultAccounts,
//           },
//         })
//         alert('Transaction proceed')
//       } catch (e) {
//         alert(e.message)
//       }
//     }
//   }

//   /** show homepage if user makes payment */
//   if (isPaid) return <HomePage />

//   /** Payment Component */
//   return (
//     <div className={styles.main}>
//       <p className={styles.text}>Make payment</p>
//       <div className={styles.buttons}>
//         <button
//           className={styles.button}
//           onClick={payClicked}
//           disabled={isPaid}
//         >
//           Pay 0.1 Sol
//         </button>
//         <button className={styles.button} onClick={getAllWallets}>
//           Update List
//         </button>
//       </div>
//     </div>
//   )
// }

// const styles = {
//   main: `w-screen h-screen bg-white text-black flex flex-col justify-center items-center`,
//   button: `bg-[#22C55E] m-3 text-white font-bold py-4 px-7 rounded-full hover:opacity-70 transition`,
//   text: `text-4xl text-black mb-10`,
//   buttons: `flex items-center`,
// }
