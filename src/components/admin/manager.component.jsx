import { connect } from "react-redux";
import { useEffect, useState } from "react";

const ManagerComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        props.loadManager();
        setIsLoading(false);
    },[])

  return (
    <div>
        <div className="dataTables_wrapper dt-bootstrap5 no-footer">
            <div className="dataTables_filter">
                <label>Search:<input type={"search"} className="form-control form-control-sm" /></label>
            </div>
            <table id="admin-manager-table" className="table table-striped table-bordered table-hover mt-3 dataTable no-footer" style={{width: "100%"}}>
                <thead>
                    <tr role={"row"}>
                        <th scope="col" rowSpan={"1"} colSpan={"1"} style={{width: "18px"}}>#</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        managerList: state.managerList.manager,
        error: state.managerList.error,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        loadManager: () => {
            return dispatch({
                type: 'GetManagerList',
                payload: {
                    url: `/user`,
                    method: 'POST',
                    data: {
                        fields: 'name, description, id, rate, stock, category'
                    }
                }
            })
        },
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ManagerComponent);