/* HOW TO HANTERA ALERTEN!:

-skika in innehåll som prop "alertContent" till komponenten antingen via en variabel som håller med mer komplex html eller direkt text.

  Exempel:
    <Alert alertContent={variabelhär} />
    <Alert alertContent={"Text som ska visas är"} />
*/




export default function Alert(props) {

    return (
        <div className="fade-in-out_animation alert_content-container">
            {props.alertContent}
        </div>

    );
}