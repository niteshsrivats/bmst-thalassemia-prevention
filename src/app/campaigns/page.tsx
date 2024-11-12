'use client';

import { NextPage } from 'next';
import { CampaignCard } from '~/components/CampaignCard';
import { campaigns } from '~/lib/dummy-data/campaigns';

const CampaignsPage: NextPage = () => {
  return (
    <div className={'space-y-8'}>
      {campaigns.map((c, i) => (
        <CampaignCard key={i} campaign={c} />
      ))}
    </div>
  );
};

export default CampaignsPage;
