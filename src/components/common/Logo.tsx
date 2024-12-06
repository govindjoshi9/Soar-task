import { Typography } from '@mui/material';
import Image from 'components/base/Image';
import { Fragment } from 'react/jsx-runtime';

const Logo = () => {
  return (
    <Fragment>
      <Image src="/Soar/Soar.png" alt="Soar" sx={{ width: 36 }} />
      <Typography variant="h2">Soar Task</Typography>
    </Fragment>
  );
};

export default Logo;
