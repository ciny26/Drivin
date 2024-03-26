import React from "react";

const imgHeaderStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '60vh',
  overflow: 'hidden',
  marginBottom: '60px'
};

const overlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent gray color
};

const imgStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: "50% 50%"
};

const pageName : React.CSSProperties = {
  position:"absolute",
  top:"50%",
  left:"50%",
  color:"white",
  transform: "translate(-50%, -50%)",
  zIndex:"99"
}

const ImgHeader = ({ backImgURL , backgroundTitle }: { backImgURL: string , backgroundTitle:string}) => {
    return (
      <div style={imgHeaderStyle}>
        <h1 style={pageName}>{backgroundTitle}</h1>
        <img src={backImgURL} alt="" style={imgStyle} />
        <div style={overlayStyle}></div>
      </div>
    );
  };
  
  export default ImgHeader;
  