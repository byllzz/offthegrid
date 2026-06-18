import { GridBackground } from './components/Canvas/GridBackground';
import { Ruler } from './components/Controls/Ruler';
import { ControlPanel } from './components/Controls/ControlPanel';

function App() {
  return (
    <>
      <Ruler />
      <GridBackground />
      <ControlPanel />
      <div className="fixed bottom-[10px] font-normal right-5 text-[15px]  text-[#222] z-[100] print:hidden">
        designed and developed by{' '}
        <a
          href="https://github.com/byllzz"
          target="_blank"
          className="text-[#000000] font-black text-[18px] underline font-script"
        >
          Bilal Malik
        </a>
      </div>
    </>
  );
}

export default App;
