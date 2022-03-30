import React, { useEffect } from "react";
import NavbarComponent from "../../../components/navbar/navbar.component";
import Container from "../../container";
import PageTitle from "../../../components/text/pageTitle.component";
import ContainerContent from "../../../components/container/container.component";
import BazaarItem from "../../../components/bazaar/item.component"
import StaffSummary from "../../../components/summary/staff.component";
import { connect } from "react-redux";

const IndexStaff = (props) => {
    useEffect(() => {
        props.loadItem()
        console.log(props.items)
    },[])

    return(
        <div className="">
            <NavbarComponent />
            <Container>
                <PageTitle title="DASHBOARD"></PageTitle>
                <StaffSummary />
                <ContainerContent title="BAZAAR">
                    <div className="row mt-3">
                        {props.items && <BazaarItem items={props.items}/>}
                    </div>
                </ContainerContent>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.bazaarItem.items,
        isLoading: state.bazaarItem.isLoading,
        error: state.bazaarItem.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadItem: () => {
            return dispatch({
                type: 'GetBazaarItem"',
                payload: {
                    url: '/reward',
                    method: 'POST',
                    data:{
                        category: "reward",
                        location: "2",
                        fields: "name, description, id, rate, stock",
                        page_number: "0",
                        page_size: "10",
                        sort_by: "name",
                        sort_dir: "asc"
                    }
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexStaff)