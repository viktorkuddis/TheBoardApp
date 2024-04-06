import { useContext } from "react";

//Komponenter:
import BoardColumn from "./BoardColumn";
import { columnsContext } from "../App";


//Detta är containern som i sin tur håller kolumnerna:
export default function ColumnsContainer() {

    // hämtar kontext för kolumner
    const { columns, setColumns } = useContext(columnsContext);


    return (
        <main className='columns-container_main'>

            {/* Loopa genom kolumnerna för att skapa dom som separata komponenter:
                Skickar med data om kolumnen som en prop så att korten ska kunna veta vilken kolumn de ska lägga sig i.*/}

            {
                columns.map((column) => (

                    <BoardColumn
                        key={column.columnID}
                        column={column}
                    />

                ))
            }

        </ main >

    );


}