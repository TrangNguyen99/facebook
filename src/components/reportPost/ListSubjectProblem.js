import React from 'react';
import {REPORT_POST} from '../../constants/reportPost';
import SubjectProblem from './SubjectProblem';

function ListSubjectProblem({activeId, handleSubjectProblemPress}) {
  let listSubjectProblemComponent = REPORT_POST.map((value) => (
    <SubjectProblem
      key={value.id}
      id={value.id}
      subject={value.subject}
      isActive={activeId === value.id}
      handleSubjectProblemPress={handleSubjectProblemPress}
    />
  ));

  return <>{listSubjectProblemComponent}</>;
}

export default ListSubjectProblem;
