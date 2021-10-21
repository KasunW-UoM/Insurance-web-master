import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function deleteUser(id) {
    if (window.confirm('Are you sure')) {
        fetch('http://localhost:8080/restuser/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            }
        })
    }
}


export default class User extends React.Component{

    constructor(users) {
        super(users)
        this.state = {users : []}
    }

    componentDidMount() {
        axios.get('http://localhost:8080/restuser/')
            .then(res => {
                const users = res.data;
                this.setState({ users });
        })
    }

    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h4 className='text-center'>Users List</h4>
                                    <table className='table-responsive'>
                                        <table className='table table-triped'>
                                        <thead>
                                            <tr>
                                                <th scope="col"><strong>Id</strong></th>
                                                <th scope="col"><strong>nickname</strong></th>
                                                <th scope="col"><strong>Name</strong></th>
                                                <th scope="col"><strong>Surname</strong></th>
                                                <th scope="col"><strong>Email</strong></th>
                                                <th scope="col"><strong>Age</strong></th>
                                                    <th scope="col"><strong>Password</strong></th>
                                                    <th scope='cal'></th>

                                            </tr>
                                            </thead>
                                            
                                            {this.state.users.map(user => {
                                                <tbody>
                                                    <tr key={user.id}>
                                                    <th scope="row"><Link to={`/user/${user.id}`}>{user.id}</Link></th>
                                                    <td>{user.nickName}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.surname}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.age}</td>
                                                    <td>{user.password}</td>
                                                        
                                                        <td>
                                                            <Link to={`/user/${user.id}/usertasks`}><a class="btn btn-sm btn-success ">Tasks<i class="far fa-edit ml-1"></i></a> </Link>
                                                            <Link to={`/user/${user.id}/edit`}><a class="btn btn-sm btn-primary ">Edit User<i class="far fa-edit ml-1"></i></a> </Link>
                                                            <a onClick={() => deleteUser(user.id)} class="btn btn-sm btn-danger ">Delete user<i class="far fa-edit"></i></a>
                                                        </td>
                                                    
                                                    </tr>

                                                </tbody>
                                            })}

                                        </table>

                                        <div class="col-3 text-left">
                                            <Link to={`/user/create`}><a class="btn btn-sm btn-primary">Create new User <i class="far fa-edit ml-1"></i></a> </Link>

                                        </div>

                                        
                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
        
        </>
        )
    }
}