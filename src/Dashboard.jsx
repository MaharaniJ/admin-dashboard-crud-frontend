import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function Dashboard() {
    const data = [
        {
            id:1,
            title: "EARNINGS (MONTHLY)",
            price: "$40,000",
            theme:"primary"
        },
        {
            id:2,
            title: "EARNINGS (ANNUAL)",
            price: "$215,000",
            theme:"success"
        },
        {
            id:3,
            title: "TASKS",
            price: "50%",
            theme:"info"
        },
        {
            id:4,
            title: "PENDING REQUESTS",
            price: "18",
            theme:"warning"
        }
    ]
  return (
    <div className="container-fluid">
         <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <Link to='/' className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
                    </div>
                    <div className="row">
                   {
                    data.map((datas)=>{
                        return <Card key={datas.id} datas={datas}></Card>
                    })
                   }
                    </div>

    </div>
  )
}

export default Dashboard;