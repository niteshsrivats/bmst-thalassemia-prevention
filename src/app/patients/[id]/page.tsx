import { NextPage } from 'next';
import Typography from '~/components/base/Typography';
import { person } from '~/lib/dummy-data/person';
import { differenceInCalendarYears } from 'date-fns';
import { FamilyTree } from '~/components/FamilyTree';

const FamilyDetailsPage: NextPage<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  const id = (await params).id;
  console.log('id', id);

  return (
    <>
      <div className={'mb-5 mb-6 w-full rounded-lg p-4 outline outline-outline-variant'}>
        <Typography type={'title'} size={'medium'} className={'mb-4 text-on-surface'}>
          Details
        </Typography>
        <div className={'flex flex-col space-y-2.5'}>
          {[
            { label: 'Name', value: person.name },
            { label: 'Gender', value: person.gender },
            { label: 'Age', value: differenceInCalendarYears(new Date(), person.dob) },
            { label: 'Phone', value: person.phone },
            { label: 'Pin', value: person.pincode },
          ].map(({ label, value }, i) => (
            <>
              {i !== 0 && <hr className={'border- h-0 w-full border-on-surface'} />}
              <div className={'flex justify-between'}>
                <Typography type={'label'} size={'large'} className={'font-bold text-on-surface'}>
                  {label}
                </Typography>
                <Typography type={'label'} size={'large'} className={'font-bold text-on-surface'}>
                  {value}
                </Typography>
              </div>
            </>
          ))}
        </div>
      </div>

      <FamilyTree person={person} />
    </>
  );
};

export default FamilyDetailsPage;
