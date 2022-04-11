import React from "react";

const RecentBirthdayItem = ({ lists, isLoading }) => {
  return (
          <div className="col-md-12 p-0">
            <table className="table table-hover mt-3">
              <thead>
                <tr>
                  <th scope="col">Birthday Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Office</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody id="table-recent-birthday">
            {lists.length > 0 ? (
              lists.map(item => (
                <tr key={item.id}>
                  <td scope="row">{item.birthdayDate}</td>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>{item.office}</td>
                  <td>{item.email}</td>
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
    )
}

export default RecentBirthdayItem