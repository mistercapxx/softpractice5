import React from 'react';
import './App.css';

export default function App() {

  const names = [
{  id:1, text: 'Animfasfals' },
{  id:2, text: 'Animae' },
{  id:3, text: 'Anti Malware' },
{  id:1, text: 'Anasdaimals' }
{  id:1, text: 'cddfd' }
];
  return (
    <div>
      Some List:
      <ul>
        {names.map((item => 
          <li key={item.id}>{item.text}</li>
          ))}
      </ul>
    </div>
  );
}
