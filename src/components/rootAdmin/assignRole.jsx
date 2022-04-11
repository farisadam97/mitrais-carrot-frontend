import ContainerContent from "../container/container.component";
import { Table } from "react-bootstrap";

const AssignRole = (props) => {
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        </ContainerContent>
    );
}
 

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAlluser: () => {
            return dispatch()
        }
    }
}
export default AssignRole;