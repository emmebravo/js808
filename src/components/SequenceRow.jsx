import Note from './Note';
import '../css/Track.css';

const SequenceRow = ({ title, trackId, pattern, playState }) => {
  const [playFn] = playState;

  const notes = pattern.map((_, i) => {
    const isNoteOn = pattern[i] === 1;
    const isNoteOnCurrentStep = playFn.currentStep === i;
    const stepID = i;

    return (
      <Note
        key={`note ` + i}
        trackId={trackId}
        stepID={stepID}
        isNoteOn={isNoteOn}
        isNoteOnCurrentStep={isNoteOnCurrentStep}
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
