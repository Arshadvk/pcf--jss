import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';

// ** Types Imports


const DashboardTable = ({ data, type }) => {
  const router = useRouter()
  const rows = data
  const [editingRow, setEditingRow] = useState(null);

  const handleStatusClick = (rowId) => {
    setEditingRow(editingRow === rowId ? null : rowId);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleStatusChange = (newStatus, _id) => {
    const data = {
      id: _id,
      status: newStatus
    }
    

    axios.post("/api/post/status-change", data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      Swal.fire({
        title: 'Success',
        text: 'Status updated successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
   
    }).catch((error) => {
      Swal.fire({
        title: 'Error',
        text: 'There was an error updating the status.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error(error);
    });
    setEditingRow(null);
  };

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <span
                    className={`${row.status === 'pending'
                      ? 'bg-red-600'
                      : row.status === 'verified'
                        ? 'bg-orange-600'
                        : 'bg-green-600'
                      } p-2 text-white rounded-full font-bold cursor-pointer`}
                    onClick={() => handleStatusClick(row._id)}
                  >
                    {row.status}
                  </span>
                  {editingRow === row._id && (
                    <div className="absolute bg-white shadow-md rounded mt-2">
                      <ul>
                        <li
                          className="p-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleStatusChange(row.status === "pending" ? "verified" : row.status === "verified" ? "approved" : "remove", row._id)}
                        >
                          {row.status === "pending" ? "verified" : row.status === "verified" ? "approved" : "remove"}
                        </li>
                      </ul>
                    </div>
                  )}
                </TableCell>
                <TableCell className='cursor-pointer' onClick={() => type === "request" ? router.push(`/user/requests/${row._id}`) : router.push(`/user/${row._id}`)}>
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
