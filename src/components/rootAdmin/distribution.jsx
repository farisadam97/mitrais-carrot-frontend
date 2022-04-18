import ContainerContent from "../container/container.component";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const Distribution = (props) => {
    return ( 
        <ContainerContent title="DISTRIBUTION DETAIL">
            <div className="col-md-6">
                <Table bordered>
                    <tbody>
                        <tr>
                            <td><b className="text-black">Year</b></td>
                            <td>2022</td>
                        </tr>
                        <tr>
                            <td><b className="text-black">Harvest</b></td>
                            <td>2022</td>
                        </tr>
                        <tr>
                            <td><b className="text-black">Distributed Carrot</b></td>
                            <td>2022</td>
                        </tr>
                        <tr>
                            <td><b className="text-black">Carrot in Barn</b></td>
                            <td>2022</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="col-md-12"><hr /></div>
            <div className="col-md-12">
                <h5>Shared Carrot</h5>
                <div className="col-md-12">
                    <div className="text-center mb-3">
                        <button className="btn btn-info text-white">
                            SHARE CARROT
                        </button>
                    </div>
                </div>
                <Table bordered hover striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Shared to</th>
                            <th>JF</th>
                            <th>Grade</th>
                            <th>Carrot</th>
                            <th>Note</th>
                            <th>Shared At</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </Table>
            </div>
        </ContainerContent>
     );
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Distribution);