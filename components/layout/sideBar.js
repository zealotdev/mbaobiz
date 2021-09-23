import Link from 'next/link';
import router, { useRouter } from 'next/router';
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { FaHome, FaUserFriends, FaPrint, FaThList } from 'react-icons/fa';

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default function Sidebar() {
  return (
    <div className="bg-blue-500 px-4" style={{ height: '58rem' }}>
      <div className="pt-20 space-y-4 w-full">
        <ActiveLink
          href="/"
          activeClassName="flex space-x-2 items-center text-white font-medium text-sm bg-blue-600 rounded px-2 py-2"
        >
          <a className="flex space-x-2 items-center text-white font-medium text-sm hover:text-blue-600 duration-500">
            <FaHome /> <span>Dashboard</span>
          </a>
        </ActiveLink>
        <ActiveLink
          href="/stocks"
          activeClassName="flex space-x-2 items-center text-white font-medium text-sm bg-blue-600 rounded px-2 py-2"
        >
          <a className="flex space-x-2 items-center text-white font-medium text-sm hover:text-blue-600 duration-500">
            <FaThList />
            <span>Stocks</span>
          </a>
        </ActiveLink>
        <ActiveLink
          href="/managers"
          activeClassName="flex space-x-2 items-center text-white font-medium text-sm bg-blue-600 rounded px-2 py-2"
        >
          <a className="flex space-x-2 items-center text-white font-medium text-sm hover:text-blue-600 duration-500">
            <FaUserFriends />
            <span>Managers</span>
          </a>
        </ActiveLink>
        <ActiveLink
          href="/reports"
          activeClassName="flex space-x-2 items-center text-white font-medium text-sm bg-blue-600 rounded px-2 py-2"
        >
          <a className="flex space-x-2 items-center text-white font-medium text-sm hover:text-blue-600 duration-500">
            <FaPrint />
            <span>Reports</span>
          </a>
        </ActiveLink>
      </div>
    </div>
  );
}
