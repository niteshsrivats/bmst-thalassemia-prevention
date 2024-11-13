'use client';
import { Button } from '@mui/base';
import FlagSvg from '~/../public/icons/flag.svg';
import PatientSvg from '~/../public/icons/patients.svg';
import DonationsSvg from '~/../public/icons/donations.svg';
import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const Footer: FC = () => {
  const pathname = usePathname();

  const CampaignPath = new RegExp('/campaigns');
  const PatientsPath = new RegExp('/patients');
  const DonationsPath = new RegExp('/donations');

  return (
    <>
      <footer
        className={
          'sticky bottom-0 flex h-[76px] w-full items-center justify-around border-t border-outline-variant bg-white'
        }
      >
        <Link passHref href={'/campaigns'}>
          <Button
            className={clsx(
              'body-small flex flex-col items-center space-y-2 rounded-[50%] text-on-surface hover:text-primary',
              CampaignPath.test(pathname) && 'text-primary',
            )}
          >
            <FlagSvg className={'h-6 w-6'} />
            Campaigns
          </Button>
        </Link>
        <Link passHref href={'/patients'}>
          <Button
            className={clsx(
              'body-small flex flex-col items-center space-y-2 rounded-[50%] text-on-surface hover:text-primary',
              PatientsPath.test(pathname) && 'text-primary',
            )}
          >
            <PatientSvg className={'h-6 w-6'} />
            Patients
          </Button>
        </Link>
        <Link passHref href={'/donations'}>
          <Button
            className={clsx(
              'body-small flex flex-col items-center space-y-2 rounded-[50%] text-on-surface hover:text-primary',
              DonationsPath.test(pathname) && 'text-primary',
            )}
          >
            <DonationsSvg className={'h-6 w-6'} />
            Donations
          </Button>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
