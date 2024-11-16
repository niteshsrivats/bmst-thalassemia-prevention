import { FC } from 'react';
import Typography from '~/components/base/Typography';
import { differenceInCalendarYears } from 'date-fns';
import { cn } from '~/lib/utils';
import { IconButton } from '~/components/base/IconButton';

export const FamilyTree: FC<{ person: Person }> = ({ person }) => {
  const renderTree = (p: Person, depth = 0) => {
    return (
      <div style={{ marginLeft: depth > 1 ? 32 : 0 }} className={cn({ 'border-l border-outline-variant': depth > 0 })}>
        {depth > 0 ? (
          <div className={'flex flex-row items-center space-x-3 pt-2'}>
            <hr className={'h-0 w-5 border bg-outline-variant text-outline-variant'} />
            <PersonNode person={p} />
          </div>
        ) : (
          <div className={'pb-2'}>
            <PersonNode person={p} />
          </div>
        )}
        {p.relatives.map((child) => renderTree(child, depth + 1))}
      </div>
    );
  };

  return <div className={'space-y-4'}>{person.relatives.map((r) => renderTree(r))}</div>;
};

const PersonNode: FC<{ person: Person }> = ({ person }) => {
  return (
    <div className={'flex w-full flex-row items-center justify-between'}>
      <div className={'space-y-1 py-2.5 text-on-surface'}>
        <Typography type={'body'} size={'large'} className={'text-on-surface'}>
          {person.name}
        </Typography>
        <div className={'flex flex-row items-center space-x-1.5'}>
          <Typography type={'body'} size={'medium'} className={'text-on-surface'}>
            Age {differenceInCalendarYears(new Date(), person.dob)}
          </Typography>
          <div className={'h-1 w-1 rounded-full bg-on-surface'} />
          <Typography type={'body'} size={'medium'} className={'text-on-surface'}>
            {person.relationship} ({person.gender})
          </Typography>
        </div>
      </div>
      <div className={'flex flex-row items-center space-x-2'}>
        <IconButton>+</IconButton>
        <IconButton>✏️</IconButton>
      </div>
    </div>
  );
};
