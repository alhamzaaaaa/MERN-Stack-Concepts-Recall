import React from 'react'

const QueueDisplay = ({ queue, onUpdateStatus, onRemove }) => {

    const getStatusColor = (status) => {
        switch (status) {
            case "waiting":
                return "blue";
            case "in_progress":
                return "yellow";
            case "completed":
                return "green";
            default:
                return "gray";
        }
    };

    return (


        <div>
            <h1>Queue Display</h1>
            {queue.length === 0 ? (
                <p>The queue is empty.</p>
            ) : (
                <div>
                    {queue.map((customer) => (
                        <div key={customer.id} style={{ border: `2px solid ${getStatusColor(customer.status)}`, padding: "10px", margin: "10px 0" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                                <h2>{customer.name}</h2>
                                <h5>{customer.service}</h5>

                                <span style={{ backgroundColor: getStatusColor(customer.status), color: "white", padding: "5px", borderRadius: "50%" }}>
                                    {customer.status}
                                </span>

                            </div>

                            <div>
                                {customer.status === "waiting" && (
                                    <button onClick={() => onUpdateStatus(customer.id, "in_progress")}>Start</button>
                                )}
                                {customer.status === "in_progress" && (
                                    <button onClick={() => onUpdateStatus(customer.id, "completed")}>Complete</button>
                                )}
                                <button onClick={() => onRemove(customer.id)}>Remove</button>  
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>


    )
}

export default QueueDisplay
