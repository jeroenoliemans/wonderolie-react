import React from 'react';
import { FiCheck } from 'react-icons/fi';

const SkillList = ({
    listData
})=> {
    const listItems = listData.map((item, index) => {
        return (
            <li className="SkilllListItem" key={index}>
                <FiCheck/>
                <span className="SkillListItemLabel">{item}</span>
            </li>
        )
      });

  return (
    <ul className="SkilllList">
      {listItems}
    </ul>
  )
}

export default SkillList;