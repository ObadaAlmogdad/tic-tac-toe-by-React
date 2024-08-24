import { Dispatch, SetStateAction } from "react";

type Cellprops ={
    id:number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winningMessage: string;
}

const cell =({go ,setGo ,id ,cells ,setCells, cell ,winningMessage}:Cellprops) =>{

    const handleClick = (e: any) =>{
        if (winningMessage) {
            return;
        }

        const notTaken = !cells[id]

        if(notTaken){
            if(go === "circle"){
                handleCellChange("circle")
                setGo("cross")
            }else if (go === "cross"){
                handleCellChange("cross")
                setGo("circle")
            }
        }
       
    }
    
    const handleCellChange =(cellToChange: string) => {
        let copyCells = [...cells]
        copyCells[id] = cellToChange
        setCells(copyCells)
    }

    return <div className="square" onClick={handleClick}>
        <div className={cell}> { cell ? cell === "circle" ? "o" : "x" :""}</div>
    </div>
};

export default cell;