import { GoArrowUp, GoArrowDown } from 'react-icons/go';

let activities = [
  {
    time: '12:00 am',
    date: '10-09-2021',
    name: 'sold',
    size: '2*4',
    amount: 1203400,
    quantity: 23,
    by: 'Brayson',
  },
  {
    time: '14:45 am',
    date: '1-09-2021',
    name: 'sold',
    size: '2*2',
    amount: 103400,
    quantity: 7,
    by: 'Stan',
  },
  {
    time: '10:10 am',
    date: '10-07-2021',
    name: 'restocked',
    size: '2*2',
    quantity: 230,
    by: 'Brayson',
  },
  {
    time: '10:20 am',
    date: '10-05-2021',
    name: 'restocked',
    size: '2*4',
    quantity: 200,
    by: 'Brayson',
  },
  {
    time: '11:27 am',
    date: '10-08-2021',
    name: 'restocked',
    size: '2*6',
    quantity: 100,
    by: 'Brayson',
  },
];

const test = [1, 2, 3, 4];

export default function ActivityTracker() {
  return (
    <div className="p-4">
      <h1>Activity</h1>
      <RenderActivity />
    </div>
  );
}

export function RenderActivity() {
  return (
    <div className="overflow-y-scroll" style={{ height: '40rem' }}>
      {activities.map((activity) => (
        <div
          className="flex my-10 items-start space-x-2 relative"
          key={activity.date}
        >
          <div className="flex flex-col w-20">
            <span className="text-xs">{activity.time}</span>
            <span className="text-xs">{activity.date}</span>
          </div>
          <div className=" p-1 rounded-full bg-white-200 shadow-lg relative">
            {activity.name == 'sold' && (
              <span className="text-red-400 z-10">
                <GoArrowUp />
              </span>
            )}
            {activity.name == 'restocked' && (
              <span className="text-green-400 z-10">
                <GoArrowDown />
              </span>
            )}
            <div
              className="absolute bg-gray-200 top-6 z-0"
              style={{ width: '2px', height: '130px', left: '11px' }}
            ></div>
          </div>
          <div className="text-xs shadow-md border border-gray-200 rounded-lg p-2 w-44 h-28">
            <span className="text-blue-500 text-sm">Mbao {activity.name}</span>
            <p>
              Size {activity.size} <br /> Amount {activity.amount} <br />{' '}
              Quantity {activity.quantity}
            </p>
            <span className="text-blue-500 italic">By {activity.by}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
