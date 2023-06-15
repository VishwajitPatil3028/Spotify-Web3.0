import { PublicKey, publicKey } from "@solana/web3.js";
import spotify from './spotify.json'

export const SOLANA_HOST = 'https://falling-old-film.solana-devnet.discover.quiknode.pro/ddb7444c8e1eee854b83cd9235664ec6226cb353/'

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
    "4NTWv6Auaya9D7HPKMGjkLoh77bGoBYiMeEoAmcZgyht"
)


export const STABLE_POOL_IDL = spotify

// changes

// export const RPC_ENDPOINT  = "https://falling-old-film.solana-devnet.discover.quiknode.pro/ddb7444c8e1eee854b83cd9235664ec6226cb353/"
export const RPC_ENDPOINT  = "https://api.devnet.solana.com"