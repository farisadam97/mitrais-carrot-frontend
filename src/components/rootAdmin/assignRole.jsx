import ContainerContent from "../container/container.component";
import { Table, Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { GetUsersList } from "../../store/apiActions";
import { useEffect, useState } from "react";
import Pagination from "../pagination/pagination.component";

const AssignRole = (props) => {
    const [selectedUser, setSelecteduser] = useState(null);
    const [show, setShow] = useState(false);
    const [selectedUserName, setSelectedUserName] = useState("");

    useEffect(() => {
        props.getAllUser(1);
    },[])

    const handleShow = (id, name) => {
        setSelecteduser(id);
        setSelectedUserName(name);
        setShow(true);
    }

    const handleClose = () => {
        setSelecteduser(null);
        setSelectedUserName("");
        setShow(false);
    }

    const handleChange = () => {
        handleClose();
    }

    return (
        <ContainerContent title="Assign Role As Admin">
            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Full Name</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.usersList.length > 0 ? (
                        props.usersList.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <td>{index +1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => handleShow(user.id, user.name)}>Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    ):(<tr>
                        <td colSpan={5} className="text-center">Data Not Found</td>
                    </tr>)}
                    {props.isLoading && (<tr><td colSpan={5} className="text-center">Loading...</td></tr>)}
                </tbody>
            </Table>
            {props.pagination > 0 && <Pagination {...props} data={props.pagination} type="userListRole"/>}       

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Change <b>{selectedUserName}</b> role?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleChange}>
                        Change
                    </Button>
                </Modal.Footer>
            </Modal>
        </ContainerContent>
    );
}
 

const mapStateToProps = state => {
    return {
        usersList: state.user.lists,
        pagination: state.user.pagination,
        isLoading: state.user.isLoading 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUser: (pageNumber) => {
            return dispatch(GetUsersList({
                url: `/user`,
                method: 'POST',
                data: {
                    role: "9",
                    fields: "id, name, username, roleId",
                    pageNumber: (pageNumber - 1).toString(),
                    pageSize: "10",
                    sortBy: "name",
                    sortDir: "asc",
                }
            }))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AssignRole);