import styles from "./Buttons.module.css"

function Buttons() {

    const styles = {
        margin: "10px 15px",
        borderRadius: "5px"
    };
     
    return(
        <>
            <div className="first-row">
                <button className="btn btn-primary" style={styles}>New Project +</button>
                <button className="btn btn-primary" style={styles}>Estimations</button>
            </div>

            <button className="btn btn-primary" style={styles}>Generate report</button>

        </>
        
    );

}

export default Buttons