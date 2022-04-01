import React from 'react'
import { useEffect, useState } from "react";

const ManajerList = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        props.loadManager();
        setIsLoading(false);
    },[])
  return (
    <div>
         <NavbarComponent />
            <Container>
                <PageTitle title="ADMIN MANAGEMENT"></PageTitle>
                <ContainerContent title="MANAGER LIST">
                    <div className="row mt-3">
                    </div>
                </ContainerContent>
            </Container>
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
                        "role": "4",
                        "fields": "name, jf, grade, office, email, status, resignDate",
                        "pageNumber": "0",
                        "pageSize": "10",
                        "sortBy": "id",
                        "sortDir": "asc"
                    }
                }
            })
        },
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(ManagerList);