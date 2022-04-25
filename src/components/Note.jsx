import { useEffect, useContext, useRef } from 'react';
import classNames from 'classnames';
import '../css/Note.css';
import Context from '../Context';

const Note = ({ trackId, stepID, isNoteOn }) => {
  const { currentStep, playing } = useContext(Context);
  const noteRef = useRef();

  const isNoteOnCurrentStep = stepID === currentStep;

  const noteClassNames = classNames('note', {
    on: isNoteOn,
    playing: isNoteOn && isNoteOnCurrentStep && playing,
  });

  useEffect(() => {
    if (isNoteOn && isNoteOnCurrentStep && playing) {
    }
  }, [isNoteOn, isNoteOnCurrentStep]);

  const noteClicked = (e) => {
    e.target.classList.toggle('on');
    //toggleNote({ trackId, stepID });
    // playing();
  };

  return <div className={noteClassNames} onClick={noteClicked} />;
};

export default Note;
