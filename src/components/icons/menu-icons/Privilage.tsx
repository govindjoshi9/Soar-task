import { SvgIcon, SvgIconProps } from '@mui/material';

const PrivilageIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 64 64" // Enlarged viewBox to accommodate the larger icon
      fontSize="inherit" // Use fontSize for dynamic sizing with MUI
      {...props}
    >
      <line x1="50.4" y1="24.38" x2="58.3" y2="23.14" strokeWidth="3" stroke="currentColor" />
      <line x1="47.93" y1="17.11" x2="52.87" y2="14.2" strokeWidth="3" stroke="currentColor" />
      <line x1="42.89" y1="11.73" x2="46.21" y2="4.51" strokeWidth="3" stroke="currentColor" />
      <line x1="33.45" y1="10.69" x2="33.41" y2="4.96" strokeWidth="3" stroke="currentColor" />
      <line x1="24.29" y1="12.09" x2="21.62" y2="4.51" strokeWidth="3" stroke="currentColor" />
      <line x1="17.99" y1="17.03" x2="12.96" y2="14.29" strokeWidth="3" stroke="currentColor" />
      <line x1="15.78" y1="23.97" x2="8.03" y2="22.66" strokeWidth="3" stroke="currentColor" />
      <path
        d="M26.22,45.47c0-5.16-3.19-9.49-4.91-12.69A12.24,12.24,0,0,1,19.85,27c0-6.79,6.21-12.3,13-12.3"
        strokeWidth="3"
        stroke="currentColor"
        fill="none"
      />
      <path
        d="M39.48,45.47c0-5.16,3.19-9.49,4.91-12.69A12.24,12.24,0,0,0,45.85,27c0-6.79-6.21-12.3-13-12.3"
        strokeWidth="3"
        stroke="currentColor"
        fill="none"
      />
      <rect
        x="23.63"
        y="45.19"
        width="18.93"
        height="4.25"
        rx="2.12"
        strokeWidth="3"
        stroke="currentColor"
        fill="none"
      />
      <rect
        x="24.79"
        y="49.43"
        width="16.61"
        height="4.25"
        rx="2.12"
        strokeWidth="3"
        stroke="currentColor"
        fill="none"
      />
      <path
        d="M36.32,53.68v.84a3.23,3.23,0,1,1-6.44,0v-.84"
        strokeWidth="3"
        stroke="currentColor"
        fill="none"
      />
      <path
        d="M24.57,26.25a7.5,7.5,0,0,1,7.88-7.11"
        strokeWidth="3"
        stroke="currentColor"
        fill="none"
      />
    </SvgIcon>
  );
};

export default PrivilageIcon;
