import { useContext } from 'react'
import { SpotifyContext } from '../context/context'
import { songs } from '../data/songs'

const TableRow = ({ song }) => {
  const { playOnSelect } = useContext(SpotifyContext)
  // console.log("table row",song)

  return (
    <tbody>
      <tr onClick={() => playOnSelect(song)}>
        <th className={styles.th}>{song.index}</th>
        {/* <th className={styles.th}>0</th> */}
        <th className={styles.th}>
          <div>
            {/* <p className="font-bold">TITLE</p>
            <p className="opacity-50">Artist</p> */}
            <p className="font-bold">{song.title}</p> 
            {/* <p className="opacity-50">{'artist'}</p> */}
            <p className="opacity-50">{song.artiste}</p>
          </div>
        </th>
        {/* <th className={styles.th}>{'10,000'}</th> */}
        {/* <th className={styles.th}>10,000</th> */}
        <th className={styles.th}>{song.plays}</th>
        {/* <th className={styles.th}>{'2:43'}</th> */}
        {/* <th className={styles.th}>2:43</th> */}
        <th className={styles.th}>{song.songLength}</th>
      </tr>
    </tbody>
  )
}

export default TableRow

const styles = {
  th: `pb-5 hover:opacity-50 cursor-pointer`,
}
