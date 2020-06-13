import React, {useState} from 'react'
const styles = {
    div: {
    color: "black",
    width: "80%",
    padding: "0.9rem 2rem",
    backgroundColor: "white",
    margin: "2rem auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box"
    },
    button: {
    borderRadius: "15px",
    backgroundColor: "hsl(0, 0%, 75%)",
    border: "2px solid hsl(255, 11%, 22%)",
    fontSize: "1.5rem",
    color: "white",
    padding: "1rem 1.5rem"
    }
    
    
}
const Link = ({url}) => {
    const [isCopied, changeCopied] = useState('Copy');
    const onCopyChange = ()=>{
        navigator.clipboard.writeText(url.shortUrl)
        changeCopied('Copied!')
    }
    return (
        <div 
        style={styles.div}>
           <p>{url.shortUrl}</p>
           <button style={styles.button} onClick={() => onCopyChange()}>{isCopied}</button>
        </div>
    )
}

export default Link
