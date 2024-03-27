export default function AddTaskCard() {

    return (<>

        <div className="addTask_Card">
            <form>
                <h4 contentEditable="true">Uppgiftsnamn</h4>
                <p contentEditable="true">Beskrivning</p>
                <p className="addTask-label">Deadline:</p>
                <input type="date" />
                <input type="time" />

            </form>
        </div >

    </>)


}