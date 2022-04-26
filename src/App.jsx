import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Sequencer from './components/Sequencer';
import './css/App.css';
import sequenceData from './data';
import Context from './Context';

function App() {
  const [BPM, setBPM] = useState(145);
  const [startTime, setStartTime] = useState(null);
  const [currentStepId, setCurrentStepId] = useState(null);
  const [sequence, setSequence] = useState(1);

  // const [playing, setPlaying] = useState(false);
  // const [currStep, setCurrStep] = useState(0);
  // const beatsPerBar = 4;

  const isSequencePlaying = startTime !== null;
  const currentSequence = sequenceData.filter((s) => s.id === sequence);

  const playState = useState({
    playing: false,
    currentStep: 0,
    beatsPerBar: 4,
    bpm: 145,
  });

  // const playState = useMemo(
  //   () => (
  //     { BPM, setBPM, playing, setPlaying, beatsPerBar, currStep, setCurrStep },
  //     [BPM, setBPM, playing, setPlaying, beatsPerBar, currStep, setCurrStep]
  //   )
  // );

  // const baseBPMPerOneSecond = 60;
  // const stepsPerBar = 8;
  // const beatsPerBar = 4;
  // const barsPerSequence = 2;
  // const totalSteps = stepsPerBar * barsPerSequence;
  // const totalBeats = beatsPerBar * barsPerSequence;

  // const timePerSequence = (baseBPMPerOneSecond / BPM) * 1000 * totalBeats;
  // const timePerStep = timePerSequence / totalSteps;
  // const playerTime = 15; // useTimer(isSequencePlaying)
  // const lapsedTime = isSequencePlaying
  //   ? Math.max(0, playerTime - startTime)
  //   : 0;
  // const totalLapsedTime = pastLapsedTime + lapsedTime;
  // const [pastLapsedTime, setPastLapse] = useState(0);

  // useEffect(() => {
  //   if (isSequencePlaying) {
  //     setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps);
  //   } else {
  //     setCurrentStep(null);
  //   }
  // }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps]);

  const headerStuff = {
    setStartTime,
    setBPM,
    isSequencePlaying,
    startTime,
    BPM,
    sequence,
    setSequence,
    currentSequence,
    playState,
  };

  const sequencerStuff = {
    currentSequence,
    currentStepId,
    playState,
  };

  return (
    <Context.Provider value={playState}>
      <main>
        <Header {...headerStuff} />
        <Sequencer {...sequencerStuff} />
      </main>
    </Context.Provider>
  );
}

export default App;
