import React, { useState } from "react";
import styles from "../styles/shortener.module.css";
import Axios from "axios";
const Shortener = () => {
  const urls = [];
  const [url, setUrl] = useState("");
  const handleClick = e => {
    e.preventDefault();
    const longUrl = {
      longUrl: url
    };

    Axios.post("/url", longUrl)
      .then(res => {
        urls.push(res.data.shortUrl);
      })
      .catch(err => console.log(err));
    setUrl("");
  };
  return (
    <form className={styles.shortener}>
      <input
        value={url}
        type="text"
        onChange={e => setUrl(e.target.value)}
        onPaste={e => setUrl(e.clipboardData.getData("text/plain"))}
      />
      <button onClick={handleClick}>Shorten</button>
    </form>
  );
};

export default Shortener;
