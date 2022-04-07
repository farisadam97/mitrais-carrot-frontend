import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ItemDetails = (props) => {
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const [trxIsLoading, setTrxIsLoading] = useState(false);

    //to do: add proper loading, add proper message modal, change buyerId

    useEffect(() => {
        props.loadItemDetail(id);
    },[])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClickBuy = () => {
        setTrxIsLoading(true);
        props.exchangeItem(id, 25, props.detailItem[0].category); //<----here buyer id
        handleClose();
    }

    useEffect(() => {
        setTrxIsLoading(false);
    },[props])

    useEffect(() => {
        setTrxIsLoading(false);
        props.loadItemDetail(id);
    },[props.transactionId])

    return (
        <div>
            <main role="main" className="container">
                <h2 className="my-4 pl-0 text-grey ml-0">
                    <span className="back-button">
                        <Link to={-1}><img src="../../assets/img/back.png" alt="" className="back" /></Link>
                    </span> 
                    Bazaar
                </h2>
            </main>
            {trxIsLoading && <p>transfer loading...</p>}
            {(!props.detailItem && !props.error) && <p>Loading...</p>}
            {props.error && <p>{props.error}</p>}
            {props.detailItem && (
                <section className="bazaar-1-item mb-4">
                    <div className="container search-box pb-4">
                        <div className="row d-flex">
                            <div className="col-md-12">
                                <hr className="box-title-hr"/>
                                <h4 className="my-2 box-title">{props.detailItem[0].category === "reward"? "Reward" : "Social Foundation"}</h4>
                            </div>
                            <div className="col-md-6 br-1">
                                <img src="img/bazaar_vespa.jpg" className="img-fluid p-3" alt=""/>
                            </div>
                            <div className="col-md-6 align-self-center p-5">
                                <h3>{props.detailItem[0].name}</h3>
                                <h4><strong className="carrot-orange">{props.detailItem[0].rate} Carrots</strong></h4>
                                <p>{props.detailItem[0].description}</p>
                                <p className={props.detailItem[0].stock <= 5? "text-danger" : "text-success"}>{props.detailItem[0].category === "reward"? "Current stock" : "Total donation"}: {props.detailItem[0].stock}</p>
                                <p className="btn btn-carrot radius-5" onClick={handleShow} data-toggle="modal" data-target="#exampleModal">Exchange</p>
                                {/* <p className="mt-2"><small className="text-danger">You don't have enough carrots to buy this item.</small></p> */}
                            </div>
                        </div>
                    
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Continue to exchange <strong>{props.detailItem[0].name}</strong></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button className="btn btn-carrot radius-5" onClick={handleClickBuy}>
                                Exchange
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </section>
        )}
        {props.error && <p>Item not Found</p>}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        detailItem: state.bazaarItem.detailItem,
        error: state.bazaarItem.error,
        transactionId: state.transaction.transactionId,
        transactionStatus: state.transaction.status,
        spentCarrot: state.transaction.spentCarrot,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        loadItemDetail: (id) => {
            return dispatch({
                type: 'GetItemDetails',
                payload: {
                    url: `/reward/${id}`,
                    method: 'POST',
                    data: {
                        fields: 'name, description, id, rate, stock, category'
                    }
                }
            })
        },
        exchangeItem: (id, buyerId, category) => {
            return dispatch({
                type: 'exchangeReward',
                payload: {
                    url: `transaction/redeem-item`,
                    method: 'POST',
                    data: {
                        category: category,
                        buyerId: parseInt(buyerId),
                        itemId: parseInt(id),
                        amount: 1,
                    }
                }
            })
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);