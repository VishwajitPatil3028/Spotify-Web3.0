import React, { useState } from 'react'
import style from '../styles/UploadModal.module.css'
import axios from 'axios'

const UploadModal = (props) => {
  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })


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

  const [tit,setTit] = useState();
  const [artiste,setArtiste] = useState();
  const [musUrl,setMusUrl] = useState();
  
  const l =  props.obj.length + 1;
  const s = {
    index: l,
    title: tit,
    artiste: artiste,
    plays: '1,324',
    songLength: '4:50',
    album: 'The Random House',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    link: musUrl,
  }

  const createNewClicked = () => {
    // newMusic()
    props.obj.push(s);
    props.setShowUploadMusic(false)
  }

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
            type='text'
            value={tit}
            onChange={e => setTit(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Artist</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type='text'
            value={artiste}
            onChange={e => setArtiste(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Music Url</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type='text'
            value={musUrl}
            onChange={e => setMusUrl(e.target.value)}
          />
        </div>
      </div>
      <div className={style.modalButtons}>
        <button
          onClick={() => props.setShowUploadMusic(false)}
          className={`${style.button} ${style.cancelButton}`}
        >
          Cancel
        </button>
        <button
          onClick={createNewClicked}
          className={`${style.button} ${style.createButton}`}
        >
          Create New
        </button>
      </div>
    </div>
  )
}

export default UploadModal
