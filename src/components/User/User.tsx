import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { Alert } from '@mui/material';
import { Spinner } from '../Spinner/Spinner';

export const User = () => {
  const { id } = useParams<{ id: string }>();

  const { data, code, error, isLoading } = useUser(id || '');

  if (code === -1) {
    return (
      <div className="container">
        <Alert severity="error">{error || "User doesn't exist"}</Alert>
      </div>
    );
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="container user-continer">
      <div className="user-info">
        <div>{data.user.nickname}</div>
        <img src={data.user.avatarThumb} alt="" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
};
