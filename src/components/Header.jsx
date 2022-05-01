import { useEffect, useRef } from 'react';

const Header = ({ sequence, setSequence, playState }) => {
  const [playFn, setPlayFn] = playState;

  const currentInterval = useRef(null); // { current: null }
  const msPerMinute = 1000 * 60;

  const onPlay = (e) => {
    setPlayFn({ ...playFn, playing: true });
  };

  console.log('current step', playFn.currentStep);

  useEffect(() => {
    if (playFn.playing === true) {
      if (currentInterval.current) {
        clearInterval(currentInterval.current);
      }

      currentInterval.current = setInterval(() => {
        let currStep = playFn.currentStep;

        //change 15 to length of sequence
        if (currStep < 15) {
          currStep += 1;
        } else {
          currStep = 0;
        }
        setPlayFn({ ...playFn, currentStep: currStep });
      }, msPerMinute / playFn.bpm / playFn.beatsPerBar);
    }
  }, [playFn.playing, playFn.currentStep, playFn.bpm]);

  return (
    <>
      <h2>JS 808</h2>
      <button onClick={onPlay}>Play</button>
      <button
        onClick={() => {
          currentInterval.current && clearInterval(currentInterval.current);
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
        {/* create options by mapping over data */}
        <option value={1}>sequence 1</option>
        <option value={2}>sequence 2</option>
        <option value={3}>sequence 3</option>
      </select>
    </>
  );
};

export default Header;
