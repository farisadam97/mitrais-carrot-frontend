import { useEffect, useState } from "react";
import ContainerContent from "../container/container.component";
import HistoryTitle from "../text/historyTitle.component";
import { Table, Modal, Button } from "react-bootstrap";
import Select from 'react-select'
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { GetGroupDetails, GetGroupStaff, GetUsersList } from "../../store/apiActions";
import LoadingModal from "../modal/loading";
import axios from "axios";
import Pagination from "../pagination/pagination.component";

const StaffGroupDetail = (props) => {
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const url = "http://localhost:2022/api/v1/user";

    const handleClose = () => {
        setShow(false);
        setShowDelete(false);
        setSelectedUser(null);
        setUsers([]);
    }

    const handleShow = () => {
        setShow(true);
        props.usersList.map(user => {
            setUsers(e => [...e, {value: user.id, label: user.name }])
        });
    };

    const handleShowDelete = (id) => {
        setSelectedUser(id);
        setShowDelete(true);
    }

    useEffect(() => {
        props.loadDetail(id);
        props.loadGroupStaff(id);
        props.loadUsersList();
    },[selectedUser]);

    const convertJobFamily = (id) => {
        if(id === 1){
            return ""
        } else if(id === 2){
            return ""
        }
    }

    const convertGrade = (id) => {
        if(id === 1){
            return ""
        } else if(id === 2){
            return ""
        }
    }

    const convertOffice = (id) => {
        switch(id){
            case 1:
                return "Bali";
            case 2:
                return "Yogyakarta";
            case 3:
                return "Bandung";
            case 4:
                return "Jakarta";
            case 5:
                return "Singapore";
            default:
                return "Undefined";
        }

    }

    const handleSelectUser = e => {
        setSelectedUser(e.value);
    }

    const getUserDetail = async (id) => {
        const responseUser = await axios.get(`${url}/${id}`);
        const userDetail = responseUser.data.body.data;
        return userDetail;
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        let payload = await getUserDetail(selectedUser);
        payload.groupId = id;
        await axios.patch(url, payload);
        handleClose();
    }

    const handleDelete = async () => {
        let payload = await getUserDetail(selectedUser);
        payload.groupId = 1;
        await axios.patch(url, payload);
        handleClose();
    }

    return ( 
        <ContainerContent>
            <HistoryTitle title="STAFF GROUP"/>
            <div className="col-md-12">
                <hr className="box-title-hr" />
                <h4 className="my-2 box-title">DETAIL STAFF GROUP</h4>
            </div>
            <div className="col-md-12">
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            {props.groupDetails && (<td>: {props.groupDetails.groupName}</td>)}
                        </tr>
                        <tr>
                            <td>Note</td>
                            {props.groupDetails && (<td>: {props.groupDetails.note}</td>)}
                        </tr>
                        <tr>
                            <td>Created At</td>
                            {props.groupDetails && (<td>: {props.groupDetails.createdGroupDate}</td>)}
                        </tr>
                    </tbody>
                </table>
                <hr />
                <h4 className="box-title my-4">STAFF LISTS</h4>
                <div className="text-center mb-3">
                    <button className="btn btn-info text-white" onClick={handleShow}>
                        ADD NEW MEMBER
                    </button>
                </div>
                <Table bordered hover striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Full Name</th>
                            <th>JF</th>
                            <th>Grade</th>
                            <th>Office</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.groupStaff.length > 0 ? (
                            props.groupStaff.map((staff, index) => {
                                return (
                                    <tr key={staff.id}>
                                        <td>{index + 1}</td>
                                        <td>{staff.username}</td>
                                        <td>{staff.name}</td>
                                        <td>{convertJobFamily(parseInt(staff.grades))}</td>
                                        <td>{convertGrade(parseInt(staff.position))}</td>
                                        <td>{convertOffice(parseInt(staff.office))}</td>
                                        <td>
                                            <Button variant="outline-danger" onClick={() => handleShowDelete(staff.id)}>delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (<tr>
                            <td colSpan={7} className="text-center">Data Not Found</td>
                        </tr>)}
                        <LoadingModal isLoading={props.isLoading}/>
                    </tbody>
                </Table>
                { props.pagination > 0 && <Pagination {...props} pagination={props.pagination} type={"groupStaff"}/>}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Staff Group</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Member Name</label>
                                <Select id="user" options={users} onChange={handleSelectUser} required/>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleAdd}>
                            Add Member
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
                        <Button variant="danger" onClick={handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </ContainerContent>
     );
}

const mapStateToProps = state => {
    return{
        groupDetails: state.group.groupDetails,
        groupStaff: state.group.groupStaff,
        usersList: state.user.lists,
        pagination: state.group.staffPagination,
        isLoading: state.group.isLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        loadDetail: (groupId) => {
            return dispatch(GetGroupDetails({
                url: `/user/group/${groupId}`,
                method: 'GET',
            }))
        },
        loadGroupStaff: (groupId) => {
            return dispatch(GetGroupStaff({
                url: `/user/group-member`,
                method: 'POST',
                data: {
                    groupId: groupId,
                    fields: "username, name, office, position, grades, id",
                    pageNumber: "0",
                    pageSize: "10",
                    sortBy: "username",
                    sortDir: "asc",
                }
            }))
        },
        loadUsersList: () => {
            return dispatch(GetUsersList({
                url: `/user`,
                method: 'POST',
                data: {
                    roleId: "10",
                    pageNumber: "0",
                    pageSize: "100",
                    sortBy: "name",
                    sortDir: "asc",
                }
            }))
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(StaffGroupDetail);