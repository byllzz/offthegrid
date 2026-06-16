import { GridCanvas } from './components/Canvas/GridCanvas';
import { ControlPanel } from './components/Controls/ControlPanel';
import { PatternSwitcher } from './components/Controls/PatternSwitcher';
import { Ruler } from './components/Controls/Ruler';

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Ruler />
      <PatternSwitcher />
      <GridCanvas />
      <ControlPanel />

      <footer className="fixed bottom-4 right-4 text-xs text-gray-400 z-10">
        OffTheGrid — Make your own grid paper
      </footer>
    </div>
  );
}

export default App;
