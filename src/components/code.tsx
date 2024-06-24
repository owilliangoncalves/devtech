interface CodeProps {
  variable: string;
  nameVar: string;
  operator: string;
  value: string;
  result: string;
}
import React from 'react';

export default function Code({
  variable,
  nameVar,
  operator,
  value,
  result,
  ...props
}: CodeProps) {
  return (
    <pre>
      <code className='bg-black p-3 block rounded-md'>
        <span className='text-link ml-4'>{`${variable}`}</span>
        <span className='text-card '>{`${nameVar}`}</span>
        <span className='text-purple-600'>{`${operator}`}</span>
        <span className='text-green-500'>{`${value}`}</span>
        <span className='text-zinc-400'>;</span>
        <br />
        <br />
        <span className='text-gray-700 ml-4'>{`${result}`}</span>
      </code>
    </pre>
  );
}
