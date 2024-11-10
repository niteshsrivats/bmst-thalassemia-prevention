import { FC } from 'react';
import Typography from '~/components/base/Typography';
import { Campaign } from '~/lib/interfaces/campaign';
import CampaignIcon from '~/../public/icons/campaign.svg';
import CalendarIcon from '~/../public/icons/calendar.svg';
import FlagIcon from '~/../public/icons/flag.svg';

export const CampaignCard: FC<{ campaign: Campaign }> = ({ campaign }) => {
  return (
    <div className={'w-full rounded-xl border border-outline-variant bg-surface-1 p-3'}>
      <div className={'mb-3 flex items-center space-x-1'}>
        <CampaignIcon className={'h-5 w-5 text-outline-variant'} />
        <Typography type={'body'} size={'large'}>
          {campaign.name}
        </Typography>
      </div>

      <div className={'flex items-center space-x-1'}>
        <CalendarIcon className={'h-5 w-5 text-primary'} />
        <Typography type={'body'} size={'medium'} className={'text-on-surface-variant'}>
          {campaign.startDate} - {campaign.endDate}
        </Typography>
      </div>

      <div className={'flex items-center space-x-1'}>
        <FlagIcon className={'h-5 w-5 text-primary'} />
        <Typography type={'body'} size={'medium'} className={'text-on-surface-variant'}>
          {campaign.activeDrives} Active drives
        </Typography>
      </div>
    </div>
  );
};
