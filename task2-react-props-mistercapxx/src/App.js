import React from 'react';
import './App.css';
import First from './First'

export default function App() {

  const appList = [
    'Animfasfals' ,
   'Animae' ,
    'Anti Malware' ,
    'Anasdaimals' ,
  'cddfd' 
    ];
  return (
    <div>
      Some data:
   <First firstList = {appList}/>
    </div>
  );
}
