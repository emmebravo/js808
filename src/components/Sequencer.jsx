import React from 'react';
import SequenceRow from './SequenceRow';

const Sequencer = ({ currentStepId, currentSequence, playState }) => {
  return (
    <div className='track-list'>
      {currentSequence.map((seq) => {
        return (
          <div key={seq.id}>
            <span>{seq.name}</span>
            {seq.tracks.map(({ id, instrument, pattern }) => {
              return (
                <SequenceRow
                  key={`sequence ` + id}
                  title={instrument}
                  pattern={pattern}
                  noteCount={16}
                  currentStepId={currentStepId}
                  trackId={id}
                  playState={playState}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sequencer;
