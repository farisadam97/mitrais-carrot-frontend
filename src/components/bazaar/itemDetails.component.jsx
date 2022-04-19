import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import HistoryTitle from "../text/historyTitle.component";
import Cookies from "universal-cookie";
import LoadingModal from "../modal/loading";

const ItemDetails = (props) => {
    const cookie = new Cookies();
    const token = cookie.get('access_token');
    const buyerId = cookie.get('id');
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const [trxIsLoading, setTrxIsLoading] = useState(false);
    const [isSufficient, setIsSufficient] = useState(true);

    useEffect(() => {
        setTrxIsLoading(false);
        props.loadItemDetail(id, token);
    },[props.transactionId])
    
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if(!isSufficientFunc()){
            setIsSufficient(isSufficientFunc());
            return
        }
        setShow(true);
    }
    
    const handleClickBuy = () => {
        setTrxIsLoading(true);
        props.exchangeItem(id, buyerId, props.detailItem[0].category, token);
        handleClose();
    }

    const isSufficientFunc = () => {
        if(props.basketAmount < props.detailItem[0].rate) return false;
        else return true;
    }

    return (
        <div>
            <HistoryTitle title="Bazaar"/>
            <LoadingModal isLoading = {trxIsLoading}/>
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
                                <button className="btn btn-carrot radius-5" onClick={handleShow} data-toggle="modal" data-target="#exampleModal">Exchange</button>
                                {!isSufficient && <p className="mt-2"><small className="text-danger">You don't have enough carrots to exchange this item.</small></p>}
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
        basketAmount: state.activeUser.basketAmount,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        loadItemDetail: (id, token) => {
            return dispatch({
                type: 'GetItemDetails',
                payload: {
                    url: `/reward/${id}`,
                    method: 'POST',
                    data: {
                        fields: 'name, description, id, rate, stock, category'
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            })
        },
        exchangeItem: (id, buyerId, category, token) => {
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
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            })
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);