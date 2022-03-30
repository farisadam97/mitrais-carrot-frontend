import React from "react";
import iconCarrot from "../../assets/img/mc-icon-carrot.png"
import SendModal from "../../components/sendCarrot/modal.send.component"

const Basket = props => {
    return (
    <section className="mini-dashboard px-3 my-4">
        <div className="row gx-5">
          <div className="col-md-4 my-auto">
            <div className="row box-reward px-0 mr-0">
              <div className="col-md-4 my-auto">
                <img src={iconCarrot} alt="" className="img-fluid rounded-circle"/>
              </div>
              <div className="col-md-8 my-auto">
                <p className="sub-title">Reward</p>
                <h2 className="text-white">+600 Carrots</h2>
                <a className="badge badge-white" data-toggle="modal" data-target="#exampleModal">
              Share carrot!</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row box-shared px-0 mr-0">
              <div className="col-md-4 my-auto">
                <img src={iconCarrot} alt="" className="img-fluid rounded-circle"/>
              </div>
              <div className="col-md-8 my-auto">
                <p className="sub-title">Shared</p>
                <h2 className="text-white">-70 Carrots</h2>
                <a className="badge badge-white" data-toggle="modal" data-target="#exampleModal">
              Share carrot!</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row box-bazaar px-0">
              <div className="col-md-4 my-auto">
                <img src={iconCarrot} alt="" className="img-fluid rounded-circle"/>
              </div>
              <div className="col-md-8 my-auto">
                <p className="sub-title">Bazaar</p>
                <h2 className="text-white">30 Carrots</h2>
                <a className="badge badge-white" data-toggle={<SendModal />} data-target="#exampleModal">
              Share carrot!</a>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
}

export default Basket;