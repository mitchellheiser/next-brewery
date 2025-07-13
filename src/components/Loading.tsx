/**
 * Loading Component - Animated loading indicator
 */
export default function Loading(){
    return(
        <div className=" flex flex-col text-center">
             <div className="animate-bounce text-6xl p-2">🍻</div>
            <h3 className="text-m text-gray-500 p-2">Loading ...</h3>
        </div>
    );
}