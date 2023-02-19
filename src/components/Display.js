export default function Display(props){

    return(
        <>
            <div className="display flex dark:text-zinc-300 dark:bg-zinc-900 text-3xl justify-center w-full py-7 rounded-lg" id="display">
                {props.data?props.data.toUpperCase():"Play!!!"}
            </div>
        </>
    )
}