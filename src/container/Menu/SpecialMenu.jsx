import React from 'react';

import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
const SpecialMenu = () => (
  <div
    className='app__specialMenu flex__center section__padding'
    id='menu'
  >
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your palatte' />
      <h1 className='headtext__cormorant'>Today&apos;s Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu-items'>
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
