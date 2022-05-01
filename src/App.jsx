import { useState } from 'react';
import Header from './components/Header';
import Sequencer from './components/Sequencer';
import './css/App.css';
import sequenceData from './data';
import Context from './Context';

function App() {
  const [startTime, setStartTime] = useState(null);
  const [sequence, setSequence] = useState(1);
  const isSequencePlaying = startTime !== null;
  const currentSequence = sequenceData.filter((s) => s.id === sequence);

  const playState = useState({
    playing: false,
    currentStep: 0,
    beatsPerBar: 4,
    bpm: 145,
  });

  const headerStuff = {
    setStartTime,
    isSequencePlaying,
    startTime,
    sequence,
    setSequence,
    currentSequence,
    playState,
  };

  const sequencerStuff = {
    currentSequence,
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
