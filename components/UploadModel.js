// import React, { useState } from "react";
// import style from "../styles/UploadModal.module.css";
// import axios from "axios";

// const UploadModal = ({
//   title,
//   musicUrl,
//   newMusic,
//   setTitle,
//   setMusicUrl,
//   setShowUploadMusic,
// }) => {
//   const toBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });

//   // these are the props

//   // const uploadClicked = async () => {
//   //   var files = document.querySelector('#music-file')

//   //   if (files.files.length == 0) return

//   //   const base64_file = await toBase64(files.files[0])

//   //   axios
//   //     .post(
//   //       '/api/upload_music',
//   //       { file: base64_file, filename: files.files[0].name },
//   //       {},
//   //     )
//   //     .then(res => {
//   //       console.log(res.data)
//   //       if (
//   //         res.data.result &&
//   //         res.data.result.created &&
//   //         res.data.result.created[0].dataTxId
//   //       )
//   //         setMusicUrl(
//   //           'https://arweave.net/' + res.data.result.created[0].dataTxId,
//   //         )
//   //     })
//   //     .catch(err => {
//   //       console.log(err)
//   //     })
//   // }

//   // console.log("Props Length : ",props.obj.length)

//   const [tit, setTit] = useState();
//   const [artiste, setArtiste] = useState();
//   const [musUrl, setMusUrl] = useState();

//   // const l = props.obj.length + 1;
//   // const s = {
//   //   index: l,
//   //   title: tit,
//   //   artiste: artiste,
//   //   plays: "1,324",
//   //   songLength: "4:50",
//   //   album: "The Random House",
//   //   cover:
//   //     "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
//   //   link: musUrl,
//   // };

//   const createNewClicked = () => {
//     // newMusic()
//     // props.obj.push(s);
//     setShowUploadMusic(false);
//   };

//   return (
//     <div className={style.wrapper}>
//       <div className={style.title}>Upload New Music</div>
//       {/* <input type='file' id='music-file' name='file' /> */}
//       {/* <div className={style.modalButtons}>
//         <button
//           onClick={uploadClicked}
//           className={`${style.button} ${style.createButton}`}
//         >
//           Upload
//         </button>
//       </div> */}

//       <div className={style.inputField}>
//         <div className={style.inputTitle}>Title</div>
//         <div className={style.inputContainer}>
//           <input
//             className={style.input}
//             type="text"
//             value={tit}
//             onChange={(e) => setTit(e.target.value)}
//           />
//         </div>
//       </div>
//       {/* <div className={style.inputField}>
//         <div className={style.inputTitle}>Artist</div>
//         <div className={style.inputContainer}>
//           <input
//             className={style.input}
//             type="text"
//             value={artiste}
//             onChange={(e) => setArtiste(e.target.value)}
//           />
//         </div>
//       </div> */}
//       <div className={style.inputField}>
//         <div className={style.inputTitle}>Music Url</div>
//         <div className={style.inputContainer}>
//           <input
//             className={style.input}
//             type="text"
//             value={musUrl}
//             onChange={(e) => setMusUrl(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className={style.modalButtons}>
//         <button
//           onClick={() => setShowUploadMusic(false)}
//           className={`${style.button} ${style.cancelButton}`}
//         >
//           Cancel
//         </button>
//         <button
//           onClick={newMusic}
//           className={`${style.button} ${style.createButton}`}
//         >
//           Create New
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UploadModal;

// ---------------------------------------

// import style from '../styles/UploadModal.module.css'
// import axios from 'axios'

// const UploadModal = ({
//   description: title,
//   musicUrl,
//   newMusic,
//   setTitle,
//   setMusicUrl,
//   setShowUploadMusic,
// }) => {
//   const toBase64 = file =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader()
//       reader.readAsDataURL(file)
//       reader.onload = () => resolve(reader.result)
//       reader.onerror = error => reject(error)
//     })

//   const uploadClicked = async () => {
//     var files = document.querySelector('#music-file')

//     if (files.files.length == 0) return

//     const base64_file = await toBase64(files.files[0])

//     axios
//       .post(
//         '/api/upload_music',
//         { file: base64_file, filename: files.files[0].name },
//         {},
//       )
//       .then(res => {
//         console.log(res.data)
//         if (
//           res.data.result &&
//           res.data.result.created &&
//           res.data.result.created[0].dataTxId
//         )
//           setMusicUrl(
//             'https://arweave.net/' + res.data.result.created[0].dataTxId,
//           )
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

//   const createNewClicked = () => {
//     newMusic()
//   }

//   return (
//     <div className={style.wrapper}>
//       <div className={style.title}>Upload New Music</div>
//       <input type='file' id='music-file' name='file' />
//       <div className={style.modalButtons}>
//         <button
//           onClick={uploadClicked}
//           className={`${style.button} ${style.createButton}`}
//         >
//           Upload
//         </button>
//       </div>

//       <div className={style.inputField}>
//         <div className={style.inputTitle}>Title</div>
//         <div className={style.inputContainer}>
//           <input
//             className={style.input}
//             type='text'
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className={style.inputField}>
//         <div className={style.inputTitle}>Music Url</div>
//         <div className={style.inputContainer}>
//           <input
//             className={style.input}
//             type='text'
//             value={musicUrl}
//             onChange={e => setMusicUrl(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className={style.modalButtons}>
//         <button
//           onClick={() => setShowUploadMusic(false)}
//           className={`${style.button} ${style.cancelButton}`}
//         >
//           Cancel
//         </button>
//         <button
//           onClick={createNewClicked}
//           className={`${style.button} ${style.createButton}`}
//         >
//           Create New
//         </button>
//       </div>
//     </div>
//   )
// }

// export default UploadModal

//-----------------------------------------------------

import React, { useState } from "react";
import style from "../styles/UploadModal.module.css";
import axios from "axios";
import Payment from "./Payment";
// import { useState, useEffect } from "react";
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

import { useNavigate } from "react-router-dom";

const UploadModal = (props) => {
  const wallet = useWallet();
  const [payers, setPayers] = useState([]);
  const [isPaid, setPaid] = useState(false);

  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState("");
  const [transactionPurpose, setTransactionPurpose] = useState("");

  const { connected, publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const makeTransaction = async (fromWallet, toWallet, amount, reference) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = clusterApiUrl(network);
    const connection = new Connection(endpoint);

    // Get a recent blockhash to include in the transaction
    const { blockhash } = await connection.getLatestBlockhash("finalized");

    const transaction = new Transaction({
      recentBlockhash: blockhash,
      // Here the buyer pays the transaction fees
      feePayer: fromWallet,
    });

    // Create the instruction to send SOL from owner to recipient
    const transferInstruction = SystemProgram.transfer({
      fromPubkey: fromWallet,
      lamports: amount.multipliedBy(LAMPORTS_PER_SOL).toNumber(),
      toPubkey: toWallet,
    });

    transferInstruction.keys.push({
      pubkey: reference,
      isSigner: false,
      isWritable: false,
    });

    transaction.add(transferInstruction);

    return transaction;
  };

  // const payClicked = async ({ amount, receiver, transactionPurpose }) => {
  const payClicked = async () => {
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

  // const navigate = useNavigate();

  // these are the props
  // ({
  //   description: title,
  //   musicUrl,
  //   newMusic,
  //   setTitle,
  //   setMusicUrl,
  //   setShowUploadMusic,
  // })

  // const uploadClicked = async () => {
  //   var files = document.querySelector('#music-file')

  //   if (files.files.length == 0) return

  //   const base64_file = await toBase64(files.files[0])

  //   axios
  //     .post(
  //       '/api/upload_music',
  //       { file: base64_file, filename: files.files[0].name },
  //       {},
  //     )
  //     .then(res => {
  //       console.log(res.data)
  //       if (
  //         res.data.result &&
  //         res.data.result.created &&
  //         res.data.result.created[0].dataTxId
  //       )
  //         setMusicUrl(
  //           'https://arweave.net/' + res.data.result.created[0].dataTxId,
  //         )
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // console.log("Props Length : ",props.obj.length)

  const [tit, setTit] = useState();
  const [artiste, setArtiste] = useState();
  const [musUrl, setMusUrl] = useState();

  const l = props.obj.length + 1;
  const s = {
    index: l,
    title: tit,
    artiste: artiste,
    plays: "1,324",
    songLength: "4:50",
    album: "The Random House",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
    link: musUrl,
  };

  // const routeChange = () => {
  //   let path = `Payment`;
  //   navigate(path);
  // };

  // const createNewClicked = () => {
  //   // newMusic()
  //   props.obj.push(s);
  //   props.setShowUploadMusic(false);
  // };

  const createNewClicked = async (e) => {
    e.preventDefault();

    // console.log("datevalue : ",dateValue);

    const allInputValue = {
      titleser: tit,
      artistser: artiste,
      musicurlser: musUrl,
    };
    //setNewFormValues(allInputValue);
    //setFormErrors(validate(allInputValue));
    // setIsSubmit(true);

    let res = await fetch("http://localhost:7000/api/addsongs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allInputValue),
    });

    let resjson = await res.json();

    payClicked();
    if (res.status === 200) {
      // routeChange()
      // <Payment/>
      // if (setPaid) {
        
        setTimeout(() => {
          props.setShowUploadMusic(false);
        alert("Song Uploaded");
          // navigate("/Payment");
        }, 2000);
      // }
    } else {
      props.setShowUploadMusic(false);
      setMessage("Some Error Occurred");
    }

    console.log("all input values 2 : ", allInputValue);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Upload New Music</div>
      {/* <input type='file' id='music-file' name='file' /> */}
      {/* <div className={style.modalButtons}>
        <button
          onClick={uploadClicked}
          className={`${style.button} ${style.createButton}`}
        >
          Upload
        </button>
      </div> */}

      <div className={style.inputField}>
        <div className={style.inputTitle}>Title</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="text"
            value={tit}
            onChange={(e) => setTit(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Artist</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="text"
            value={artiste}
            onChange={(e) => setArtiste(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Music Url</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="text"
            value={musUrl}
            onChange={(e) => setMusUrl(e.target.value)}
          />
        </div>
      </div>
      <div className={style.modalButtons}>
      <button
          onClick={createNewClicked}
          className={`${style.button} ${style.createButton}`}
        >
          Create New
        </button>
        <button
          onClick={() => props.setShowUploadMusic(false)}
          className={`${style.button} ${style.cancelButton}`}
        >
          Cancel
        </button>
       
      </div>
    </div>
  );
};

export default UploadModal;
