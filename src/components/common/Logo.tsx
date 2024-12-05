import { Typography } from '@mui/material';
import Image from 'components/base/Image';
import { Fragment } from 'react/jsx-runtime';

const Logo = () => {
  return (
    <Fragment>
      <Image src="/public/Header_c.png" alt="logo" sx={{ width: 36 }} />
      <Typography variant="h2">Soar</Typography>
    </Fragment>
  );
};

export default Logo;
