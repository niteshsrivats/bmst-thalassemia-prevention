import Link from 'next/link';
import { FC } from 'react';
import { IconButton } from './base/IconButton';
import Typography from './base/Typography';

const Header: FC = () => {
  return (
    <header className={'absolute top-0 flex h-16 w-full items-center bg-white px-5'}>
      <Typography type={'title'} size={'large'}>
        Campaigns
      </Typography>
      <div className={'ml-auto flex space-x-2'}>
        <Link passHref href={`/campaigns/create`}>
          <IconButton>+</IconButton>
        </Link>
        <div className={'flex h-8 w-8 items-center justify-center rounded-full bg-surface-5 font-bold text-on-surface'}>
          P
        </div>
      </div>
    </header>
  );
};

export default Header;
