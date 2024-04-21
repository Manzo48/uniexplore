import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../../redux/userReducer';

const Profile = () => {

  const {id} = useParams()

  const users = useSelector(state => state.users.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const user = users.find(item => item._id === id)
  console.log(user)

  return (
    <div>
      <div>
        <h1 style={{textAlign: 'center', padding: '50px'}}>Ваш профиль</h1>
      </div>
      <div>
        <div style={{width: '300px', height: '400px', background: 'gray', borderRadius: '20px'}}>
          
        </div>
        <div>{user?.login}</div>
      </div>
    </div>
  );
};

export default Profile;