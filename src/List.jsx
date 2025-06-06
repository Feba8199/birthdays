import React from 'react';
import Person from './Person';

const List = ({ people }) => {
  return (
    <section>
      {people.map((eachPerson) => {
        return <Person key={eachPerson.id} {...eachPerson} />;
      })}
    </section>
  );
};

export default List;
