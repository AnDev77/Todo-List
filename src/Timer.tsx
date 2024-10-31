import { useState } from "react";

const Clock : React.FC = () => {
    const [time, setTime] = useState(new Date());
    setInterval(()=>{
        setTime(new Date());
    }, 1000)
    return(
        <div className="clock">
            현재시간 : {time.toLocaleTimeString()}
        </div>
    );
}


export default Clock;