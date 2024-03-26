import { PropTypes } from "prop-types"



import TaskCard from "./TaskCard";

export default function BoardColumn(props) {
    return (

        <div className="board-column" >

            <h2>{props.columnName}</h2>

            <div className="board-column-cards-list_container">


                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>

            <div className="column-footer">
                columnfooter
            </div>


        </div >

    );
}

BoardColumn.propTypes = {
    columnName: PropTypes.string,
}

BoardColumn.defaultProps = {
    columnName: "Kolumnens Titel",

}