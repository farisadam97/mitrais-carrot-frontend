import React from "react";

const HistoryItem = ({ lists, isLoading }) => {
  return (
    <div className="row d-flex align-content-end">
      <div className="col-md-12 p-0">
        <table className="table table-hover mt-3" style={{textAlign:"center"}}>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Message</th>
              <th scope="col">Carrot</th>
              <th scope="col">Shared At</th>
            </tr>
          </thead>
          <tbody id="table-histories">
            {lists.length > 0 ? (
              lists.map((item, index) => {
                let sharedAt = item?.sharedAt?.split("T");
                const sharedAtDate = sharedAt[0];
                const sharedAtTime = sharedAt[1].split(".")[0];
                sharedAt = sharedAtDate + " " + sharedAtTime + " WIB";
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.senderName}</td>
                    <td>{item.receiverName}</td>
                    <td>{item.message}</td>
                    <td>{item.amountShared}</td>
                    <td>{sharedAt}</td>
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

export default HistoryItem;
