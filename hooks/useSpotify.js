// import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
// // import { TOKEN_PROGRAM_ID } from "@project-serum/serum/lib/token-instructions";
// import { useWallet } from "@solana/wallet-adapter-react";
// import { RPC_ENDPOINT } from "../utils/const";
// import { getProgramInstance } from "../utils/utils";
// const anchor = require("@project-serum/anchor");
// const utf8 = anchor.utils.bytes.utf8;
// const { web3, BN } = anchor;
// const { SystemProgram } = web3;

// const defaultAccounts = {
//   tokenProgram: TOKEN_PROGRAM_ID,
//   clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
//   systemProgram: SystemProgram.programId,
// };

// const useSpotify = (
//   musicUrl,
//   title,
//   setTitle,
//   setMusicUrl,
//   setShowUploadMusic
// ) => {
//   const wallet = useWallet();
//   const connection = new anchor.web3.Connection(RPC_ENDPOINT);
//   const program = getProgramInstance(connection, wallet);

//   const getSongs = async () => {
//     console.log("Fetching songs");

//     const songs = await program.account.musicAccount.all();
//     console.log(songs);
//     return songs;
//   };

//   const newMusic = async () => {
//     const randomkey = anchor.web3.Keypair.generate().publicKey;

//     let [music_pda] = await anchor.web3.PublicKey.findProgramAddress(
//       [utf8.encode("music"), randomkey.toBuffer()],
//       program.programId
//       // in the above state if we get any error change random key
//     ); 

//     // variable for the transaction

//     const tx = await program.rpc.createMusic(title, musicUrl, {
//       accounts: {
//         music: music_pda,
//         randomkey: randomkey,
//         authority: wallet.publicKey,
//         ...defaultAccounts,
//       },
//     });

//     console.log(tx);

//     setTitle("");
//     setMusicUrl("");
//     setShowUploadMusic(false);
//   };

//   return { newMusic, getSongs };
// };

// export default useSpotify;



//*************************** */

import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { useWallet } from '@solana/wallet-adapter-react'
import { RPC_ENDPOINT } from '../utils/const'
import { getProgramInstance } from '../utils/utils'
const anchor = require('@project-serum/anchor')
const utf8 = anchor.utils.bytes.utf8
const { BN, web3 } = anchor
const { SystemProgram } = web3

const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
}

const useSpotify = (
  musicUrl,
  title,
  setTitle,
  setMusicUrl,
  setShowUploadMusic,
) => {
  const wallet = useWallet()
  const connection = new anchor.web3.Connection(RPC_ENDPOINT)
  const program = getProgramInstance(connection, wallet)
  
  const getSongs = async () => {
    console.log('fetching')

    const songs = await program.account.musicAccount.all()
    console.log(songs)
    return songs;
  }

  const newMusic = async () => {
    const randomkey = anchor.web3.Keypair.generate().publicKey;

    let [music_pda] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode('music'), randomkey.toBuffer()],
      program.programId,
    )

    const tx = await program.rpc.createMusic(
      title,
      musicUrl,
      {
        accounts: {
          music: music_pda,
          randomkey: randomkey,
          authority: wallet.publicKey,
          ...defaultAccounts,
        },
      },
    )

    console.log(tx)

    setTitle('')
    setMusicUrl('')
    setShowUploadMusic(false)
  }
  
  return { newMusic, getSongs }
}

export default useSpotify
