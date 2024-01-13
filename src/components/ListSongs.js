import React from 'react'

export default function ListSongs() {
  return (
    <div className="col-span-2">
        <table className="table-auto w-full">
            <thead className="text-white">
                <tr>
                    <th>#</th>
                    <th className="text-left">Title</th>
                    <th className="w-[10%]">Author</th>
                    <th className="w-[10%]"><i className="fa fa-download"></i></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
