import React from 'react';
import {REPORT_POST} from '../../constants/reportPost';
import DetailProblem from './DetailProblem';

function ListDetailProblem({subjectId, activeId, handleDetailProblemPress}) {
  if (!subjectId) {
    return null;
  }

  let listDetailProblemComponent = REPORT_POST[
    parseInt(subjectId, 10)
  ].details.map((value) => (
    <DetailProblem
      key={value.id}
      id={value.id}
      detail={value.name}
      isActive={activeId === value.id}
      handleDetailProblemPress={handleDetailProblemPress}
    />
  ));

  return <>{listDetailProblemComponent}</>;
}

export default ListDetailProblem;
