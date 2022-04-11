import { useEffect, useState } from "react";
import ContainerContent from "../container/container.component";
import { Table, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { GetGroupList, AddGroup, UpdateGroup, DeleteGroup } from "../../store/apiActions";
import { Link } from "react-router-dom";
import Pagination from "../pagination/pagination.component";

const StaffGroup = (props) => {
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [groupNote, setGroupNote] = useState("");
    const [groupId, setGroupId] = useState(null);
    const [groupDate, setGroupDate] = useState(null);

    useEffect(() => {
        props.loadGroups();
    },[show, showDelete])

    const handleClose = () => {
        setShow(false);
        setShowDelete(false);
        setGroupName("");
        setGroupNote("");
        setGroupDate(null);
        setGroupId(null);
    }

    const handleShow = () => setShow(true);

    const editGroup = (index) => {
        setGroupName(props.groups[index].groupName);
        setGroupNote(props.groups[index].note);
        setGroupId(props.groups[index].groupId);
        setGroupDate(props.groups[index].createdGroupDate);
        setShow(true);
    }

    const groupNameInputHandle = e => {
        setGroupName(e.currentTarget.value);
    }

    const groupNoteInputHandle = e => {
        setGroupNote(e.currentTarget.value);
    }

    const saveGroup = () => {
        if(groupId === null){
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();
            const todayDate = yyyy + '-' + mm + '-' + dd;
            props.addGroup(groupName, groupNote, todayDate);
        } else if(groupId > 0){
            props.updateGroup(groupId, groupName, groupDate, groupNote);
        }
        handleClose();
        props.loadGroups();
    }

    const showDeleteModal = id => {
        setShowDelete(true);
        setGroupId(id);
    }

    const deleteGroup = () => {
        props.deleteGroup(groupId);
        handleClose();
        props.loadGroups();
    }

    return ( 
        <ContainerContent title="STAFF GROUP LIST">
            <div className="text-center mb-3">
                <button type="button" className="btn btn-info text-white" onClick={handleShow}>
                    <i className="fa fa-plus-circle"></i> ADD NEW
                </button>
            </div>

            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Group Name</th>
                        <th>Group Note</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.groups.length > 0 ? (
                        props.groups.map((item, index) => {
                            return (
                                <tr key={item.groupId}>
                                    <td>{index + 1}</td>
                                    <td>{item.groupName}</td>
                                    <td>{item.note}</td>
                                    <td>
                                        <Link to={`${item.groupId}`}><Button variant="outline-success">Detail</Button></Link>
                                        <Button variant="outline-primary" className="mx-2" onClick={() => editGroup(index)}>Edit</Button>
                                        <Button variant="outline-danger" onClick={() => showDeleteModal(item.groupId)}>Delete</Button>
                                    </td>
                                </tr>
                            );
                        })
                    ): (<tr>
                        <td colSpan={3} className="text-center">Data Not Found</td>
                    </tr>)}
                </tbody>
            </Table>
            <Pagination {...props.pagination}/>

            {/* Modal Update/Add */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Staff Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Group Name</label>
                            <input type="text" className="form-control" value={groupName} onChange={groupNameInputHandle}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDescription" className="form-label">Group Note</label>
                            <input type="text" className="form-control" value={groupNote} onChange={groupNoteInputHandle}></input>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={saveGroup}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Delete */}
            <Modal show={showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="alert-form">
                        <div className="alert alert-danger">
                            Do you want to proceed?
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteGroup}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </ContainerContent>
     );
}

const mapStateToProps = state => {
    return {
        groups: state.group.groups,
        pagination: state.group.groupsPagination
    }
}

const mapDispatchToProps = dispatch => {
    return{
        loadGroups: () => {
            return dispatch(GetGroupList({
                url: `/user/group`,
                method: 'POST',
                data: {
                    pageNumber: "0",
                    pageSize: "10",
                    sortBy: "group_id",
                    sortDir: "asc",
                },
            }))
        },
        addGroup: (groupName, groupNote, createDate) => {
            return dispatch(AddGroup({
                url: `/user/add-group`,
                method: 'POST',
                data: {
                    groupName: groupName,
                    createdGroupDate: createDate,
                    note: groupNote,
                }
            }))
        },
        updateGroup: (groupId, groupName, createDate, groupNote) => {
            return dispatch(UpdateGroup({
                url: `/user/group`,
                method: 'PUT',
                data: {
                    groupId,
                    groupName,
                    note: groupNote,
                    createdGroupDate: createDate,
                }
            }))
        },
        deleteGroup: (groupId) => {
            return dispatch(DeleteGroup({
                url: `/user/group/${groupId}`,
                method: 'DELETE'
            }))
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(StaffGroup);