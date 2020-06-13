import React, { useState } from "react";
import styles from "../styles/shortener.module.css";
import Axios from "axios";
import Link from './Link'
import Statistics from './Statistics'
const Shortener = () => {
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const handleClick = e => {
    e.preventDefault();
    const longUrl = {
      longUrl: url
    };

    Axios.post("/url", longUrl)
      .then(res => {
        setUrls([...urls, res.data]);
      })
      .catch(err => console.log(err));
    setUrl("");
  };
  return (
    <div className={styles.shortenerSection}>
      <form className={styles.shortener}>
        <input
          type="text"
          onPaste={e => {
            e.persist();
            setUrl(e.clipboardData.getData("Text"))
          console.log(url)
          }}
          placeholder="Paste a link here"
        />
        <button onClick={handleClick}>Shorten</button>
      </form>
      {urls.map(url => (
        <Link url={url} key={url._id}/>
      ))}
      <Statistics/>
    </div>
  );
};

export default Shortener;
