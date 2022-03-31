import React from "react";

const HistoryRewardItem = ({ lists, isLoading }) => {
  console.log(lists);
  return (
    <div className="col-md-12 p-0">
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Type</th>
            <th scope="col">To/From</th>
            <th scope="col">Description</th>
            <th scope="col">Carrot</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody id="table-history-reward">
          {lists.length > 0 ? (
            lists.map((item) => (
              <tr key={item.id}>
                <td scope="row">{item.id}</td>
                <td>{item.trxDate}</td>
                <td>{item.rewardEntity}</td>
                <td>{item.amount}</td>
                <td>{item.spentAmount}</td>
                <td>{item.status}</td>
              </tr>
            ))
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
  );
};

export default HistoryRewardItem;
