import { PropTypes } from "prop-types"

export default function BoardColumn(props) {
    return (
        <>
            <h2>{props.columnName}</h2>
            Här är min board Kollumn
        </>
    );
}

BoardColumn.propTypes = {
    columnName: PropTypes.string,
}

BoardColumn.defaultProps = {
    columnName: "Kolumn",

}