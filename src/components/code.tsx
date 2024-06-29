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
      <code className='bg-[#222222] p-3 block rounded-md'>
        <span className='text-curious-blue-50 ml-4'>{`${variable}`}</span>
        <span className='text-curious-blue-400 '>{`${nameVar}`}</span>
        <span className='text-purple-600'>{`${operator}`}</span>
        <span className='text-emerald-500'>{`${value}`}</span>
        <span className='text-zinc-400'>;</span>
        <br />
        <br />
        <span className='text-gray-700 ml-4'>{`${result}`}</span>
      </code>
    </pre>
  );
}
