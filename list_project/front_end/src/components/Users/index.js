import React, {useState, useEffect} from "react";
import {MdPhone, MdAccountCircle, MdAdd} from 'react-icons/md';
import { Box, BoxContainer,Modal } from './styles';

import { api } from "../../services/api";

export default function Container() 
{
  const [users, setUsers] = useState();

  useEffect(() => {
    async function getDataUsers() {
      const { data } = await api.get('/');
      setUsers(data);
    }
    getDataUsers()
  }, []);
  const mostrar = true;
  function setModal(data) {
    console.log(data);
  }; 
  return (
      <>
      <div className="flex">
        <h3 className="title">Listagem de Contato</h3>
        <span><MdAdd size={24} color="#009688"/> Adicionar </span>
        
      </div>
      <BoxContainer>
        {
          users && users.map(user => (
            <Box key={user.id}>
              <p> <MdAccountCircle size={24} color="#009688"/> {user.full_name}</p>
              <p><MdPhone size={24} color="#009688"/> {user.phones.number_phone}</p>
             <div className="box_footer">
              <span onClick={() => setModal(user)} >Detalhes</span>
             </div>
            </Box> 
          ))
        }
        <Modal></Modal>
      </BoxContainer>
      </>
  );
}