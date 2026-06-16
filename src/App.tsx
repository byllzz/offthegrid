import { GridBackground } from './components/Canvas/GridBackground';
import { Ruler } from './components/Controls/Ruler';
import { ControlPanel } from './components/Controls/ControlPanel';

function App() {
  return (
    <>
      <Ruler />
      <GridBackground />
      <ControlPanel />
      <div className="footer-credits">
        designed and developed by <strong>Rostislav Blaha</strong> &bull; Re-engineered 2026
      </div>
    </>
  );
}

export default App;
