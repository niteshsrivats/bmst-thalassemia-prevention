'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
import { IconButton } from './base/IconButton';
import Typography from './base/Typography';
import { Button } from '@mui/base';

const Header: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routeList = pathname.split('/');

  console.log(routeList);

  if (routeList.length > 2) {
    if (routeList[routeList.length - 1] === 'create') {
    } else {
      // view header
    }
  } else {
    // default header
  }

  return (
    <header className={'sticky top-0 flex h-16 w-full items-center bg-white px-5'}>
      {routeList[routeList.length - 1] === 'create' ? (
        <CreateHeader page={''} cancelAction={() => router.back()} />
      ) : (
        <>
          <Typography type={'title'} size={'large'} className="font-semibold text-primary">
            {/* TODO needs capitalize instead of uppercase, maybe lodash? */}
            {routeList[1].toUpperCase()}
          </Typography>
          <div className={'ml-auto flex space-x-2'}>
            <Link passHref href={`/campaigns/create`}>
              <IconButton>+</IconButton>
            </Link>
            <div
              className={'flex h-8 w-8 items-center justify-center rounded-full bg-surface-5 font-bold text-on-surface'}
            >
              P
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

const CreateHeader: FC<{ page: string; cancelAction: () => void }> = ({ page, cancelAction }) => {
  return (
    <div className="flex w-full justify-between">
      <div>
        <Typography type={'title'} size={'large'} className="font-semibold text-primary">
          Add {page}
        </Typography>
      </div>
      <div>
        <Button className="bg-transparent text-error focus:bg-transparent active:bg-transparent" onClick={cancelAction}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
