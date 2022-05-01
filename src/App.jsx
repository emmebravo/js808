import { useState } from 'react';
import Header from './components/Header';
import Sequencer from './components/Sequencer';
import './css/App.css';
import sequenceData from './data';

function App() {
  const [sequence, setSequence] = useState(1);
  const currentSequence = sequenceData.filter((s) => s.id === sequence);

  const playState = useState({
    playing: false,
    currentStep: 0, //mention this is length of pattern arr
    beatsPerBar: 4,
    bpm: 145,
  });

  const headerStuff = {
    sequence,
    setSequence,
    playState,
  };

  const sequencerStuff = {
    currentSequence,
    playState,
  };

  return (
    <main>
      <Header {...headerStuff} />
      <Sequencer {...sequencerStuff} />
    </main>
  );
}

export default App;
