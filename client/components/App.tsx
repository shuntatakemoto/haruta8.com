import React from 'react';
import style from '../style.less';

const App = () => (
  <>
    <div className={style.app}>haruta8.com</div>
    <button onClick={(e) => alert('🐼'.repeat(100))}>call</button>
  </>
);

export default App;
