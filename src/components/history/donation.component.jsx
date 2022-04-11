import React from "react";

const DonationHistoryItem = ({ lists, isLoading }) => {
  return (
    <div className="row d-flex align-content-end">
      <div className="col-md-12 p-0">
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Donation</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody id="table-histories">
            {lists.length > 0 ? (
              lists.map((item, index) => {
                let trxDate = item?.trxDate?.split("T");
                const trxDates = trxDate[0];
                const trxDateTime = trxDate[1].split(".")[0];
                trxDate = trxDates + " " + trxDateTime + " WIB";
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.rewardEntity}</td>
                    <td>{item.amount}</td>
                    <td>{item.status}</td>
                    <td>{trxDate}</td>
                  </tr>
                );
              })
            ) : isLoading ? (
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
  );
};

export default DonationHistoryItem;
