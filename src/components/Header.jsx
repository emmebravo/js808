import { useEffect, useRef } from 'react';

const Header = ({
  setStartTime,
  setPastLapse,
  setBPM,
  isSequencePlaying,
  startTime,
  BPM,
  sequence,
  setSequence,
  sequencer,
  playState,
}) => {
  const [playFn, setPlayFn] = playState;
  const currentInterval = useRef(null);
  const msPerMinute = 1000 * 60;
  //let currentInterval = null;

  const onPlay = (e) => {
    setPlayFn({ ...playFn, playing: true });
    // some kind of function to play beats
  };

  console.log('current step', playFn.currentStep);

  useEffect(() => {
    if (playFn.playing) {
      if (currentInterval.current) {
        clearInterval(currentInterval.current);
      }

      currentInterval.current = setInterval(() => {
        let currStep = playFn.currentStep;

        if (+currStep < 15) {
          currStep += 1;
        } else {
          currStep = 0;
        }
        setPlayFn({ ...playFn, currentStep: currStep });
        // playDrumsForStep(currentStep);
      }, msPerMinute / playFn.bpm / playFn.beatsPerBar);
    }
  }, [playFn.playing, playFn.currentStep]);

  return (
    <>
      <h2>JS 808</h2>
      <button onClick={onPlay}>Play</button>
      <button
        onClick={() => {
          clearInterval(currentInterval.current);
          setPlayFn({ ...playFn, playing: false });
        }}
      >
        Stop
      </button>
      <input
        type='number'
        placeholder='BPM'
        value={playFn.bpm}
        onChange={(e) => setPlayFn({ ...playFn, bpm: e.target.value })}
      />
      <select
        value={sequence}
        onChange={(e) => setSequence(Number(e.target.value))}
      >
        <option value={1}>sequence 1</option>
        <option value={2}>sequence 2</option>
        <option value={3}>sequence 3</option>
      </select>
    </>
  );
};

export default Header;
