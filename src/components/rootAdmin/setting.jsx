import { useEffect, useState } from "react";
import { Table, Modal,Button } from "react-bootstrap";
import ContainerContent from "../container/container.component";
import { GetSettings, UpdateSettings } from "../../store/apiActions";
import { connect } from "react-redux";

const Settings = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setMinimumValidation(null);
        setBirthdayShareValidation(null);
        setInitialCarrotValidation(null);
    };
    const handleShow = () => {
        setMinimum(props.annualCarrotMinimum);
        setBirthdayShare(props.carrotBirthDayShare);
        setInitialCarrot(props.initialCarrot);
        setShow(true);
    }

    const [minimum, setMinimum] = useState(null);
    const [birthdayShare, setBirthdayShare] = useState(null);
    const [initialCarrot, setInitialCarrot] = useState(null);

    const [minimumValidation, setMinimumValidation] = useState(null);
    const [birthdayShareValidation, setBirthdayShareValidation] = useState(null);
    const [initialCarrotValidation, setInitialCarrotValidation] = useState(null);

    useEffect(() => {
        props.getSetting();
        console.log('render')
    },[])

    const minimumInputHandle = e => {
        setMinimum(e.currentTarget.value)
    }

    const birthdayInputHandle = e => {
        setBirthdayShare(e.currentTarget.value)
    }

    const initialInputHandle = e => {
        setInitialCarrot(e.currentTarget.value)
    }

    const handleValidation = () => {
        let formIsValid = true;

        if(minimum === "" || minimum === "0") {
            formIsValid = false;
            setMinimumValidation("Please enter annual carrot left minimum");
        }else if(minimum < 0) {
            formIsValid = false;
            setMinimumValidation("Annual carrot lef minimum can't be negative value");
        }

        if(birthdayShare === "" || birthdayShare === "0") {
            formIsValid = false;
            setBirthdayShareValidation("Please enter carrot birthday share");
        }else if(birthdayShare < 0) {
            formIsValid = false;
            setBirthdayShareValidation("Carrot birthday share can't be negative value");
        }

        if(initialCarrot === "" || initialCarrot === "0") {
            formIsValid = false;
            setInitialCarrotValidation("Please enter initial carrot");
        }else if(initialCarrot < 0) {
            formIsValid = false;
            setInitialCarrotValidation("Initial carrot can't be negative value");
        }

        return formIsValid;
    }

    const updateSetting = () => {

        if(handleValidation()){
            props.updateSetting(parseInt(minimum), parseInt(birthdayShare), parseInt(initialCarrot));
            handleClose();
        }
    }

    return (
        <ContainerContent title="CARROT SETTINGS">
            <button className="btn btn-info text-white" onClick={handleShow}>Edit</button>
            <hr />
            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Setting Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Annual Carrot Left Minimum</td>
                        <td>{props.annualCarrotMinimum}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Carrot Birthday Share</td>
                        <td>{props.carrotBirthDayShare}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Initial Carrot</td>
                        <td>{props.initialCarrot}</td>
                    </tr>
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Reward</Modal.Title>
                </Modal.Header>
                    <form>
                        <Modal.Body>
                                <div className="mb-3">
                                    <label htmlFor="inputName" className="form-label">Annual Carrot Left Minimum</label>
                                    <input type="number" className={`form-control ${minimumValidation ? 'is-invalid' : ''}`} value={minimum} onChange={minimumInputHandle} required></input>
                                    <div className="invalid-feedback">{minimumValidation}</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputDescription" className="form-label">Carrot Birthday Share</label>
                                    <input type="number" className={`form-control ${birthdayShareValidation ? 'is-invalid' : ''}`} value={birthdayShare} onChange={birthdayInputHandle} required></input>
                                    <div className="invalid-feedback">{birthdayShareValidation}</div>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="selectCategory" className="form-label">Initial Carrot</label>
                                    <input type="number" className={`form-control ${initialCarrotValidation ? 'is-invalid' : ''}`} value={initialCarrot} onChange={initialInputHandle} required></input>
                                    <div className="invalid-feedback">{initialCarrotValidation}</div>
                                </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={updateSetting}>
                                Save Settings
                            </Button>
                        </Modal.Footer>
                    </form>
            </Modal>
        </ContainerContent>
    );
}

const mapStateToProps = state => {
    return {
        annualCarrotMinimum: state.setting.annualCarrotMinimum,
        carrotBirthDayShare: state.setting.carrotBirthDayShare,
        initialCarrot: state.setting.initialCarrot,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getSetting: () => {
            return dispatch(GetSettings({
                url: 'carrot/setting',
                method: 'GET'
            }))
        },
        updateSetting: (annualCarrotMinimum, carrotBirthDayShare, initialCarrot) => {
            return dispatch(UpdateSettings({
                url: 'carrot/setting',
                method: 'PUT',
                data: {
                    carrotBirthDayShare,
                    annualCarrotMinimum,
                    initialCarrot,
                }
            }))
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Settings);