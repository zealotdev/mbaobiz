import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

export default function QuickActions() {
  const [activeTab, setActiveTab] = useState('tab-1');

  const handleOnClick = () => {
    if (activeTab == 'tab-1') setActiveTab('tab-2');
    if (activeTab == 'tab-2') setActiveTab('tab-1');
  };
  return (
    <div className="pt-8">
      <div className="flex w-full justify-center space-x-3 text-gray-400">
        <span>Restock</span>
        <div
          className="bg-blue-500 rounded-xl h-6 w-14 flex p-1 cursor-pointer relative"
          onClick={() => handleOnClick()}
        >
          {activeTab == 'tab-1' && (
            <button className="h-4 w-4 bg-white rounded-full absolute left-1"></button>
          )}
          {activeTab == 'tab-2' && (
            <button className="h-4 w-4 bg-white rounded-full absolute right-1"></button>
          )}
        </div>
        <span>Sell</span>
      </div>
      <div>
        <InsertForm type={activeTab == 'tab-1' ? 'restock' : 'sell'} />
      </div>
    </div>
  );
}

export function InsertForm({ type }) {
  return (
    <div className="py-2 px-20 text-center mt-10">
      <h1 className=" text-blue-500">
        {type == 'restock' ? 'Quick Restock' : 'Quick Sell'}
      </h1>
      <Formik
        initialValues={{ type: '2*2', amount: 0 }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col space-y-2 mt-4 text-left">
            <label htmlFor="type" className="text-sm text-gray-400">
              Mbao Type
            </label>
            <select
              name="type"
              id="type"
              className="border-b border-gray-400 py-2 text-blue-500 px-2"
            >
              <option value="2*6">2*6</option>
              <option value="2*2">2*2</option>
              <option value="2*4">2*4</option>
              <option value="2*10">2*10</option>
            </select>
            <label htmlFor="amount" className="text-sm text-gray-400">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="border-b border-gray-400 py-2 text-blue-500 px-2"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-blue-500 text-white py-2 hover:bg-blue-600 duration-700"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {type == 'restock' && (
        <Link href="/stocks">
          <a className="font-light text-blue-500 text-sm underline text-center mt-10">
            Register a new Mbao type
          </a>
        </Link>
      )}
    </div>
  );
}
