import React from 'react'

function ResultsTable() {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <th>Name</th>
                    <th>Attempts</th>
                    <th>Earn Points</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Maha</td>
                    <td>02</td>
                    <td>30</td>
                    <td>Passed</td>
                
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ResultsTable