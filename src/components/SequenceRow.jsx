import { useContext } from 'react';
import Note from './Note';
import '../css/Track.css';
import Context from '../Context';

const SequenceRow = ({ title, trackId, pattern, noteCount, currentStepId }) => {
  const { currentStep, playing } = useContext(Context);

  const notes = pattern.map((num, i) => {
    const isNoteOn = pattern[i] === 1;
    // const isNoteOnCurrentStep = currentStep === i;
    const stepID = i;

    return (
      <Note
        key={`note ` + i}
        trackId={trackId}
        stepID={stepID}
        isNoteOn={isNoteOn}

        // isNoteOnCurrentStep={isNoteOnCurrentStep}
        // play={playing}
      />
    );
  });

  return (
    <div className='track'>
      <header className='track_title'>{title}</header>
      <main className='track_notes'>{notes}</main>
    </div>
  );
};

export default SequenceRow;
