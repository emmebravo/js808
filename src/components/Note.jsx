import { useEffect, useContext, useRef } from 'react';
import classNames from 'classnames';
import '../css/Note.css';
import Context from '../Context';

const Note = ({ trackId, stepID, isNoteOn, isNoteOnCurrentStep }) => {
  //const { currentStep, playing } = useContext(Context);

  //const noteRef = useRef(trackId)
  // value={noteRef}

  const noteClassNames = classNames('note', {
    on: isNoteOn,
    playing: isNoteOn && isNoteOnCurrentStep,
  });

  useEffect(() => {
    if (isNoteOn && isNoteOnCurrentStep) {
    }
  }, [isNoteOn, isNoteOnCurrentStep]);

  return <div className={noteClassNames} />;
};

export default Note;
