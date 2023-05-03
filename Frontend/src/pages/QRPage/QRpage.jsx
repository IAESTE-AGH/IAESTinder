import classes from "./QRPage.module.css";
import logo from "../../assets/logo-white3.png";

const QRpage = () => {
  return (
    <div className={classes.qrPageContainer}>
      <div className={classes.helper}></div>
      <header>
        <img src={logo} />
        <h1>IAESTinder</h1>
      </header>
      <section className={classes.qrWrapper}>
        <p>
          Dzięki zeskanowaniu kodu QR będziesz mógł skorzystać z naszej
          aplikacji w swoim telefonie!
        </p>
        <div className={classes.qr}></div>
      </section>
    </div>
  );
};

export default QRpage;
