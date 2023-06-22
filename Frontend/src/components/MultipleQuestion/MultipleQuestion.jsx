import { useEffect, useState, useRef } from "react";
import { useQuestions } from "../../store/questions-context";
import classes from "./MultipleQuestion.module.css";


const MultipleQuestion = (props) => {
  const myElementRef = useRef(null);
  const [activateOverlay, setactivateOverlay] = useState(false);
  const [overlayHeight, setOverlayHeight] = useState(50);

  const {
    interests,
    isContinueDisabled,
    counter,
    onUpdateInterests,
    setIsContinueDisabled,
    setCounter,
  } = useQuestions();

  useEffect(() => {
    setIsContinueDisabled(counter === 0);
  }, [counter]);

  const wordClickHanlder = (interestObj) => {
    const copiedList = [...interests];
    const clickedInterest = copiedList.find(
      (item) => item.text == interestObj.text
    );
    if (counter < 5) {
      if (!clickedInterest.marked) {
        clickedInterest.marked = true;
        const last = copiedList.find((item) => item.lastMarked === true);
        if (last) {
          last.lastMarked = false;
        }
        clickedInterest.lastMarked = true;
        setCounter(1);
      } else {
        clickedInterest.marked = false;
        setCounter(-1);
      }
    } else if (counter === 5 && !clickedInterest.marked) {
      const last = copiedList.find((item) => item.lastMarked === true);
      last.lastMarked = false;
      last.marked = false;
      clickedInterest.marked = true;
      clickedInterest.lastMarked = true;
    } else if (counter > 0 && clickedInterest.marked) {
      clickedInterest.marked = false;
      setCounter(-1);
    }
    onUpdateInterests(copiedList);
  };

  const changeQuestionHandler = () => {
    const markedInterests = interests
      .filter((interest) => interest.marked)
      .map((interest) => interest.group)
      .toString()
      .replaceAll(",", " ");

    if (counter === 5) {
      props.nextQuestion(markedInterests);
    }
  };

  useEffect(() => {
    const el = myElementRef.current;
    console.log(el.scrollHeight ,'===', el.clientHeight)
    if(el.scrollHeight != el.clientHeight){
      setactivateOverlay(true);
    }
  }, []);

  const scrollHandler = () =>{
    const el = myElementRef.current;
    if(el.scrollTop + el.clientHeight >= el.scrollHeight - 50)
      setOverlayHeight(el.scrollHeight - (el.scrollTop + el.clientHeight));
  }

  return (
    <section className={classes.multipleQuestionContainer}>
      <header>
        <h1>Najfajniejsze z wymienionych aktywności</h1>
        <p>
          Wybierz najfajniejsze aktywności żeby zobaczyć, z którą grupą w IAESTE
          masz najwięcej wspólnego!
        </p>
      </header>
      <div className={classes.scrollContainer}>
        <div 
        className={activateOverlay ? classes.activeOverlay : classes.disabledOverlay}
        style={activateOverlay ? {height: overlayHeight} : {}}
        //className={classes.activeOverlay}
        //style={{height: overlayHeight}}
        />
          <ul
          className={classes.list}
          ref={myElementRef}
          onScroll={scrollHandler}
          >
            {interests.map((word, index) => (
              <li
                className={`${word.marked ? classes.activeWord : ""}`}
                key={index}
                onClick={() => wordClickHanlder(word)}
              >
                {word.text}
              </li>
            ))}
          </ul>
      </div>
      <button
        onClick={changeQuestionHandler}
        className={
          counter != 5 ? classes.disabledButton : classes.activeButton
        }
        disabled={isContinueDisabled}
      >
        <div className={(counter != 0 && counter != 5) ? classes.activeSlasher : classes.disabledSlasher}>
        {`Kontynuuj ${counter}/5`}
        </div>
      </button>
    </section>
  );
};

export default MultipleQuestion;
