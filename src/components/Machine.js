import Drumpad from "./Drumpad"

export default function Machine(){

    return(
        <>
            <div className="main_machine flex flex-col align-middle items-center justify-center h-full w-full md:min-w-max
            overflow-auto" id="drum-machine">
                <Drumpad/>
            </div>
        </>
    )
}