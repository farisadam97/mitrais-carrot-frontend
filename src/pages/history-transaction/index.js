import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import backPic from "../../assets/img/back.png";
import iconCarrot from "../../assets/img/mc-icon-carrot.png";
import {
  apiHistoryTrxRequestSucceeded,
  apiHistoryTrxRequestFailed,
} from "../../reducer/historyTransaction";
import store from "../../store/configurationStore";
import { getHistoryTrx } from "../../reducer/historyTransaction";

const HistoryTransaction = () => {
  const [getHistories, setHistories] = useState();
  const [showLoading, setLoading] = useState(true);

  useEffect(() => {
    const url = "http://localhost:2022/api/v1/history/shared/4";
    const payload = {
      startDate: "2022-03-26",
      endDate: "2022-03-26",
      fields: "id, sender_id, receiver_id, shared_at, amount_shared, message",
      pageNumber: "0",
      pageSize: "10",
      sortBy: "shared_at",
      sortDir: "asc",
    };
    axios
      .post(url, payload)
      .then((r) => {
        setHistories(r.data.body);
        setLoading(false);
        store.dispatch(
          apiHistoryTrxRequestSucceeded({ lists: r.data.body.data })
        );
      })
      .catch((e) => {
        store.dispatch(apiHistoryTrxRequestFailed(JSON.stringify(e.message)));
      });
  }, []);

  const printData = (data) => {
    console.log("printData", data);
    let res = data?.data;
    return res ? (
      res.map((e) => (
        <tr key={e.id}>
          <td scope="row">{e.id}</td>
          <td>{e.senderId}</td>
          <td>{e.receiverId}</td>
          <td>{e.message}</td>
          <td>{e.amountShared}</td>
          <td>{e.sharedAt}</td>
        </tr>
      ))
    ) : showLoading ? (
      <tr>
        <td colSpan={6} className="text-center">
          Loading...
        </td>
      </tr>
    ) : (
      <tr>
        <td colSpan={6} className="text-center">
          Data tidak ditemukan
        </td>
      </tr>
    );
  };

  return (
    <div>
      <main role="main" className="container">
        <h2 className="mt-4 pl-0 text-grey ml-0">
          <span className="back-button">
            <a href="index-employee.html">
              <img src={backPic} alt="" className="back" />
            </a>
          </span>
          TRANSACTION HISTORY
        </h2>
      </main>

      <section className="mini-dashboard my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="row box-reward px-0 mr-0"
                style={{
                  backgroundImage: `linear-gradient(bottom left, #5900b9, #3885bd)`,
                }}
              >
                <div className="col-md-4 my-auto">
                  <img
                    src={iconCarrot}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-8 my-auto">
                  <p className="sub-title">Reward</p>
                  <h2 className="text-white">+600 Carrots</h2>
                  <a
                    className="badge badge-white"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Share carrot!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row box-shared px-0 mr-0">
                <div className="col-md-4 my-auto">
                  <img
                    src={iconCarrot}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-8 my-auto">
                  <p className="sub-title">Shared</p>
                  <h2 className="text-white">-70 Carrots</h2>
                  <a
                    className="badge badge-white"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Share carrot!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row box-bazaar px-0">
                <div className="col-md-4 my-auto">
                  <img
                    src={iconCarrot}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-8 my-auto">
                  <p className="sub-title">Bazaar</p>
                  <h2 className="text-white">30 Carrots</h2>
                  <a
                    className="badge badge-white"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Share carrot!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="transaction-history my-4">
        <div className="container search-box">
          <div className="row d-flex align-content-end">
            <div className="col-md-12">
              <form>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="carrot-type">Type</label>
                      <div>
                        <select
                          id="carrot-type"
                          name="carrot-type"
                          className="custom-select"
                        >
                          <option value="type1">Rewards</option>
                          <option value="type2">Shared</option>
                          <option value="type3">Bazaar</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="">Date From</label>
                      <input
                        id=""
                        name=""
                        type="date"
                        className="form-control here"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="date-to">Date To</label>
                      <input
                        id="date-to"
                        name="date-to"
                        type="date"
                        className="form-control here"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="holder" className="vis-none">
                        Date To
                      </label>
                      <button
                        name="submit"
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 p-0">
              <table className="table table-hover mt-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Receiver</th>
                    <th scope="col">Message</th>
                    <th scope="col">Carrot</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody id="table-histories">
                  {getHistories ? (
                    getHistories.data.map((e) => (
                      <tr key={e.id}>
                        <td scope="row">{e.id}</td>
                        <td>{e.senderId}</td>
                        <td>{e.receiverId}</td>
                        <td>{e.message}</td>
                        <td>{e.amountShared}</td>
                        <td>{e.sharedAt}</td>
                      </tr>
                    ))
                  ) : showLoading ? (
                    <tr>
                      <td colSpan={6} className="text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center">
                        Data tidak ditemukan
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryTransaction;
