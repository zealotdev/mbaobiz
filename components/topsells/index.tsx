const data = [
  {
    type: '2*4',
    amount: 'TZS345000',
  },
  {
    type: '2*6',
    amount: 'TZS245000',
  },
  {
    type: '2*2',
    amount: 'TZS205000',
  },
  {
    type: '2*8',
    amount: 'TZS145000',
  },
  {
    type: '2*10',
    amount: 'TZS95000',
  },
];

const colors = [
  'text-green-500 border-l-green-500 border-l-4',
  'text-blue-500 border-l-blue-500 border-l-4',
  'text-indigo-500 border-l-indigo-500 border-l-4',
  'text-purple-500 border-l-purple-500 border-l-4',
  'text-pink-500 border-l-pink-500 border-l-4',
  'text-red-500 border-l-red-500 border-l-4',
  'text-red-300 border-l-red-300 border-l-4',
];

const bgColors = [
  'bg-green-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-red-500',
  'bg-red-300',
];

export default function TopSells() {
  return (
    <div className="pt-4">
      <h2>Top Selling Mbao</h2>
      <ol className="space-y-6 mt-8 list-decimal list-inside">
        {data.map((mbao, index) => (
          <li
            key={mbao.type}
            className={`border-b border-grey-400 text-md py-1 pl-2  md:cursor-pointer ${colors[index]} hover:bg-gray-200`}
          >
            <span className="ml-2">{mbao.type}</span>
            <span className="ml-28">{mbao.amount}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
