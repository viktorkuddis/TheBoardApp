import { PropTypes } from "prop-types"



import TaskCard from "./TaskCard";

export default function BoardColumn(props) {
    return (

        <div className="board-column" >
            <h2>{props.columnName}</h2>

            <TaskCard title={"en Titel HÄr"} />
            <TaskCard />
            <TaskCard />
        </div>

    );
}

BoardColumn.propTypes = {
    columnName: PropTypes.string,
}

BoardColumn.defaultProps = {
    columnName: "Kolumnens Titel",

}