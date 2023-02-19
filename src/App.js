import Header from "./components/Header"
import Machine from "./components/Machine";

function App() {
  return (
    <div className="drum_machine dark:bg-zinc-900 w-full min-h-[100vh] space-y-20" id="drum-machine">
		<div className="header">
			<Header/>
		</div>
		<div className="machine ">
			<Machine/>
		</div>
    </div>
  );
}

export default App;
