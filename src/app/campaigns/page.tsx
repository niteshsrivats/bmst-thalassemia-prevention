'use client';

import { NextPage } from 'next';
import Typography from '~/components/base/Typography';
import { campaigns } from '~/lib/dummy-data/campaigns';
import { CampaignCard } from '~/components/CampaignCard';
import { IconButton } from '~/components/base/IconButton';
import { useRouter } from 'next/navigation';
import { ROUTES } from '~/lib/constants/routes';
import { Button } from '~/components/base/Button';
import FlagSvg from '~/../public/icons/flag.svg';
import PatientSvg from '~/../public/icons/patients.svg';
import DonationsSvg from '~/../public/icons/donations.svg';

const CampaignsPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <header className={'flex h-16 w-full items-center px-5'}>
        <Typography type={'title'} size={'large'}>
          Campaigns
        </Typography>
        <div className={'ml-auto flex space-x-2'}>
          <IconButton onClick={() => router.push(ROUTES.CAMPAIGNS.CREATE)}>+</IconButton>
          <div
            className={'flex h-8 w-8 items-center justify-center rounded-full bg-surface-5 font-bold text-on-surface'}
          >
            P
          </div>
        </div>
      </header>

      <main className={'space-y-8 px-5 py-4'}>
        {campaigns.map((c, i) => (
          <CampaignCard key={i} campaign={c} />
        ))}
      </main>

      <footer className={'flex h-[76px] w-full items-center justify-around border-t border-outline-variant'}>
        <Button className={'body-small flex flex-col items-center space-y-2 rounded-[50%] p-0 text-on-surface'}>
          <FlagSvg className={'h-6 w-6'} />
          Campaigns
        </Button>
        <Button className={'body-small flex flex-col items-center space-y-2 rounded-[50%] text-on-surface'}>
          <PatientSvg className={'h-6 w-6'} />
          Patients
        </Button>
        <Button className={'body-small flex flex-col items-center space-y-2 rounded-[50%] text-on-surface'}>
          <DonationsSvg className={'h-6 w-6'} />
          Donations
        </Button>
      </footer>
    </>
  );
};

export default CampaignsPage;
