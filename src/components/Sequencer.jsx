import SequenceRow from './SequenceRow';

const Sequencer = ({ currentSequence, playState }) => {
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
