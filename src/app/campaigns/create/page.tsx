import { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '~/components/base/Button';
import { Input } from '~/components/base/Input';
import Typography from '~/components/base/Typography';

const CreateCampaign: NextPage = () => {
  return (
    <main>
      <form action="POST">
        <div className="space-y-3 pb-5">
          <Typography type={'label'} size={'medium'}>
            Campaign Name
          </Typography>
          <Input />
        </div>
        <div className="space-y-3 pb-5">
          <div className="flex gap-x-3">
            <div className="flex flex-col gap-y-3">
              <Typography type={'label'} size={'medium'}>
                Start Date
              </Typography>
              <Input />
            </div>
            <div className="flex flex-col gap-y-3">
              <Typography type={'label'} size={'medium'}>
                End Date
              </Typography>
              <Input />
            </div>
          </div>
        </div>
        <div className="space-y-3 pb-5">
          <div className="flex items-center justify-between">
            <Typography type={'label'} size={'medium'}>
              Key Contacts
            </Typography>
            {/* TODO needs plus SVG */}
            <Button className="focus:bg-transparent active:bg-transparent">Add</Button>
          </div>
          <div>
            <div className="flex flex-col gap-y-1.5">
              <div className="align-center flex justify-between">
                <div className="flex items-center">
                  <Typography type={'label'} size={'medium'}>
                    Name
                  </Typography>
                </div>
                <Input type="text" />
              </div>
              <div className="align-center flex justify-between">
                <div className="flex items-center">
                  <Typography type={'label'} size={'medium'}>
                    Phone no.
                  </Typography>
                </div>
                <Input type="number" />
              </div>
              <div className="align-center flex justify-between">
                <div className="flex items-center">
                  <Typography type={'label'} size={'medium'}>
                    Role
                  </Typography>
                </div>
                {/* TODO needs to be a select */}
                <Input />
              </div>
            </div>
          </div>
        </div>
        {/* TODO temporary linking, reroute on successful submit to main campaigns page */}
        <Link passHref href={'/campaigns'}>
          <Button className="w-full rounded-3xl bg-primary text-white" type="submit">
            Save
          </Button>
        </Link>
      </form>
    </main>
  );
};

export default CreateCampaign;
