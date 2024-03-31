import Modal from "./Modal";

export default function AdvancedEditModal() {

    const content = <>

        <article className="advancedEditModal">
            <div className="head">
                <h2>Boardens Överskhjgf dhsgf sdkjhg kg hg kjhg khg khg khg kgg jkhg kri asg djhagd khagd  </h2>
                <button className="cross">X</button>
            </div>



            <h1>Vattna Blommorna</h1>
            <div className="body">

                <div className="meta-data_section">
                    <div className="time-stams_container" >
                        <p>Deadline: ---</p>
                        <p className="timestamps">Skapad: 1996-04-48 13:49</p>
                        <p className="timestamps">Redigerad: 1996-04-48 13:49</p>
                    </div>

                    <div className="handle-columns_container" >här ska de vara en drop down</div>
                </div>

                <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati explicabo aperiam tenetur, tempore necessitatibus, dolore cupiditate maxime aspernatur minus, non dignissimos laborum soluta distinctio! At voluptates hic dolor blanditiis. Deleniti.</p>


                <button className="danger-btn">Radera</button>
            </div>
        </article>
    </>;


    return (

        <Modal modalContent={content} />
    );
};