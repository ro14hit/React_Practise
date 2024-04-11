import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Navigation = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <div className="fixed top-12 w-full  text-center">
    <Box className="bg-yellow-200 flex justify-center" >
      <Button onClick={()=>{navigate('/home');}}>Home</Button>
      <Button onClick={()=>{navigate('/addUser');}}>Add User</Button>
      <Button onClick={()=>{navigate('/deleteUser');}}>Delete User</Button>
      <Button onClick={()=>{navigate('/updateUser');}}>Update User</Button>
    </Box>
    </div>
  );
}

export default Navigation