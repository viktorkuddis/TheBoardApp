import { PropTypes } from "prop-types"

export default function BoardColumn(props) {
    return (

        <div className="board-column" >
            <h2>{props.columnName}</h2>
            Här är min board Kollumn
        </div>

    );
}

BoardColumn.propTypes = {
    columnName: PropTypes.string,
}

BoardColumn.defaultProps = {
    columnName: "Kolumn",

}