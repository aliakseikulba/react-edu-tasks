import React, {useState} from 'react';
import Affairs from './Affairs';

// types
export type AffairPriorityType = 'low' | 'middle' | 'high';
export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'Anime', priority: 'low'},
  {_id: 3, name: 'Games', priority: 'low'},
  {_id: 4, name: 'Work', priority: 'high'},
  {_id: 5, name: 'HTML & CSS', priority: 'middle'},
];

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
  if (filter === 'all') return affairs;
  return affairs.filter((a: AffairType) => a.priority === filter)
};

export const deleteAffair = (affairs: AffairType[], id: number): AffairType[] => {
  return affairs.filter((a: AffairType) => a._id !== id)
};

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

  return (
    <div>
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
    </div>
  );
}

export default HW2;
