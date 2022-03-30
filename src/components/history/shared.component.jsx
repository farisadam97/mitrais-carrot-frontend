import React from "react";

const HistoryItem = ({ lists, isLoading }) => {
  console.log(lists)
  return (
        <div class="row d-flex align-content-end">
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
              <tbody id="table-histories">
            {lists.length > 0 ? (
              lists.map(item => (
                <tr key={item.id}>
                  <td scope="row">{item.id}</td>
                  <td>{item.senderName}</td>
                  <td>{item.receiverName}</td>
                  <td>{item.message}</td>
                  <td>{item.amountShared}</td>
                  <td>{item.sharedAt}</td>
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
        </div>
    )
}

export default HistoryItem

