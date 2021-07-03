import React, { useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import "../../App.css";
import { getListAction } from '../../redux/actions/userActions';



const UsersComponent = () => {

    const dispatch = useDispatch();

    const { token, users } = useSelector(state => state.userReducer)

    

    const getUsers = useCallback(() => {
        dispatch(getListAction(token))
    }, [token, dispatch])

    useEffect(() => {
        getUsers()
    }, [getUsers]);


    return (
        <div>
            <table className="table table-dark table-striped tableStyle">
                <thead>
                    <tr>
                        <th className="fontTitleRows">ID</th>
                        <th className="fontTitleRows">Email</th>
                        <th className="fontTitleRows">First Name</th>
                        <th className="fontTitleRows">Last Name</th>
                        <th className="fontTitleRows">Avatar</th>

                    </tr>
                    

                </thead>
                <tbody>
                    {
                        users.map((element, index) => (
                            <tr key={index.toString()}>
                                <td className="fontTitleRows">
                                    {element.id}
                                </td>
                                <td className="fontTitleRows">
                                    {element.email}
                                </td>
                                <td className="fontTitleRows">
                                    {element.first_name}
                                </td>
                                <td className="fontTitleRows">
                                    {element.last_name}
                                </td>
                                <td className="fontTitleRows">
                                    <img src={element.avatar} alt="" />
                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
      
        </div>
    );
}

export default UsersComponent;

