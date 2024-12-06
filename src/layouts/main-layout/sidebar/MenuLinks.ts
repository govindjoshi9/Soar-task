import { SvgIconProps } from '@mui/material';
import CreditCardIcon from 'components/icons/menu-icons/CreditCardIcon';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';
import InvestIcon from 'components/icons/menu-icons/InvestIcon';
import LoanIcon from 'components/icons/menu-icons/LoanIcon';
import ServiceIcon from 'components/icons/menu-icons/ServiceIcon';
import SettingsIcon from 'components/icons/menu-icons/SettingsIcon';
import PrivilageIcon from 'components/icons/menu-icons/Privilage';
import TransferIcon from 'components/icons/menu-icons/TransferIcon';
import UserIcon from 'components/icons/menu-icons/UserIcon';

export enum linkEnum {
  Dashboard = 'dashboard',
  Transactions = 'transactions',
  Accounts = 'accounts',
  Investments = 'investments',
  Credit = 'credit-cards',
  Loans = 'loans',
  Services = 'Services',
  previlege = 'My Privileges',
  Setting = 'Setting',
}

export interface MenuLinkType {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
}
export const menuLinks: MenuLinkType[] = [
  {
    id: 1,
    title: linkEnum.Dashboard,
    link: '/',
    icon: HomeIcon,
    available: true,
  },
  {
    id: 2,
    title: linkEnum.Transactions,
    link: '#!',
    icon: TransferIcon,
    available: false,
  },
  {
    id: 3,
    title: linkEnum.Accounts,
    link: '#!',
    icon: UserIcon,
    available: false,
  },
  {
    id: 4,
    title: linkEnum.Investments,
    link: '#!',
    icon: InvestIcon,
    available: false,
  },
  {
    id: 5,
    title: linkEnum.Credit,
    link: '#!',
    icon: CreditCardIcon,
    available: false,
  },
  {
    id: 6,
    title: linkEnum.Loans,
    link: '#!',
    icon: LoanIcon,
    available: false,
  },
  {
    id: 7,
    title: linkEnum.Services,
    link: '#!',
    icon: ServiceIcon,
    available: false,
  },
  {
    id: 8,
    title: linkEnum.previlege,
    icon: PrivilageIcon,
    link: '#!',
    available: false,
  },
  {
    id: 9,
    title: linkEnum.Setting,
    link: '/authentication/login',
    icon: SettingsIcon,
    available: false,
  },
];
