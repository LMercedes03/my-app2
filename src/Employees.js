import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Employees = () => {
  let [employees, setEmployees] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const users = (await axios.get('https://jsonplaceholder.typicode.com/users')).data
      setEmployees(users)
      console.log(users)
    }
    fetch()
  }, [])
  
  return (
    <div className='Empoyees'>
        <table>
            <th>Employees...</th>
            <tr>
                <td>{ employees[0]?.name }</td> 
                <td>{ employees[0]?.email }</td>
            </tr>
            <tr>
                <td>{ employees[1]?.name }</td> 
                <td>{ employees[1]?.email }</td>
            </tr>
            <tr>
                <td>{ employees[2]?.name }</td> 
                <td>{ employees[2]?.email }</td>
            </tr>
            <tr>
                <td>{ employees[3]?.name }</td> 
                <td>{ employees[3]?.email }</td>
            </tr>
            <tr>
                <td>{ employees[4]?.name }</td> 
                <td>{ employees[4]?.email }</td>
            </tr>
            <tr>
                <td>{ employees[5]?.name }</td> 
                <td>{ employees[5]?.email }</td>
            </tr>
            <tr>
                <td>{ employees[6]?.name }</td> 
                <td>{ employees[6]?.email }</td>
            </tr>
            <tr>
                <td>{ employees[7]?.name }</td> 
                <td>{ employees[7]?.email }</td>
            </tr>
            <tr>
                <td>{ employees[8]?.name }</td> 
                <td>{ employees[8]?.email }</td>
            </tr>
            <tr>
                <td>{ employees[9]?.name }</td> 
                <td>{ employees[9]?.email }</td>
            </tr>
        </table>
    </div>
  )
}