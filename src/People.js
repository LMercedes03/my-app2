import React from 'react'

export const People = ({data}) => {
    return (
        <div className="People">
            <table>
                <thead></thead>
                <tbody>
                    {
                        data.map(p => (
                        <tr key={p.id}>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
  )
}