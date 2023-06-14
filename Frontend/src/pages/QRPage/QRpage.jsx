import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import { Link, useNavigate } from "react-router-dom";
import classes from "./QRPage.module.css";
import logo from "../../assets/inne/Logo_SWIPE_JOIN.webp";

const QRpage = () => {
  const navigate = useNavigate();
  const link = "https://iaeste-agh.github.io/IAESTE-PAC/";
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      link || " ",
      (error) => error && console.error(error)
    );
  }, []);

  return (
    <Link to="/instruction" style={{ textDecoration: "none" }}>
      <main className={classes.qrPage}>
        <img src={logo} />
        <div className={classes.qrWrapper}>
          <canvas ref={canvasRef} />
          <p>
            Dzięki zeskanowaniu kodu QR będziesz mógł skorzystać <br></br> z
            naszej aplikacji w swoim telefonie!
          </p>
        </div>

        <button onClick={() => navigate("/instruction")}>Kontynuuj</button>
      </main>
    </Link>
  );
};

export default QRpage;
