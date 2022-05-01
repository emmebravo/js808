import { useEffect, useRef } from 'react';
import '../css/Note.css';

const Note = ({ isNoteOn, isNoteOnCurrentStep }) => {
  const noteRef = useRef(null);

  useEffect(() => {
    const divDiv = noteRef.current;
    if (isNoteOn && isNoteOnCurrentStep) {
      divDiv.style.backgroundColor = 'pink';
    } else if (isNoteOn) {
      divDiv.style.backgroundColor = 'grey';
    }
  }, [isNoteOn, isNoteOnCurrentStep]);

  return <div ref={noteRef} className='note' />;
};

export default Note;
