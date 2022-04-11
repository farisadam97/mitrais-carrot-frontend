import { useEffect, useState } from "react";
import { Table, Modal,Button } from "react-bootstrap";
import ContainerContent from "../container/container.component";
import { GetSettings, UpdateSettings } from "../../store/apiActions";
import { connect } from "react-redux";

const Settings = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [minimum, setMinimum] = useState(null);
    const [birthdayShare, setBirthdayShare] = useState(null);
    const [initialCarrot, setInitialCarrot] = useState(null);

    useEffect(() => {
        props.getSetting()
        setMinimum(props.annualCarrotMinimum);
        setBirthdayShare(props.carrotBirthDayShare);
        setInitialCarrot(props.initialCarrot);
    },[props.annualCarrotMinimum, props.carrotBirthDayShare, props.initialCarrot])

    const minimumInputHandle = e => {
        setMinimum(e.currentTarget.value)
    }

    const birthdayInputHandle = e => {
        setBirthdayShare(e.currentTarget.value)
    }

    const initialInputHandle = e => {
        setInitialCarrot(e.currentTarget.value)
    }

    const updateSetting = () => {
        props.updateSetting(parseInt(minimum), parseInt(birthdayShare), parseInt(initialCarrot));
        handleClose();
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
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Annual Carrot Left Minimum</label>
                            <input type="number" className="form-control" value={minimum} onChange={minimumInputHandle}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDescription" className="form-label">Carrot Birthday Share</label>
                            <input type="number" className="form-control" value={birthdayShare} onChange={birthdayInputHandle}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="selectCategory" className="form-label">Initial Carrot</label>
                            <input type="number" className="form-control" value={initialCarrot} onChange={initialInputHandle}></input>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={updateSetting}>
                        Save Settings
                    </Button>
                </Modal.Footer>
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