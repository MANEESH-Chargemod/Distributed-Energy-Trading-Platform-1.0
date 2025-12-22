import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { navItems } from '../../config/navItems'

const Sidebar = ({ isOpen }) => {
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState({})

  const isActive = (route) => location.pathname === route

  const toggleDropdown = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  const renderNavItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isCurrentActive = isActive(item.route)
    const isExpanded = expandedItems[item.id]
    const hasActiveChild = hasChildren && item.children.some(child => isActive(child.route))

    return (
      <div key={item.id}>
        <div className="flex items-center">
          <Link
            to={item.route}
            className={`flex-1 flex items-center px-4 py-3 rounded-lg transition-colors ${
              isCurrentActive
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            style={{ paddingLeft: `${level * 1.5 + 1}rem` }}
          >
            <span className="mr-3 flex-1">{item.title}</span>
          </Link>

          {/* Dropdown toggle button */}
          {hasChildren && (
            <button
              onClick={() => toggleDropdown(item.id)}
              className={`px-2 py-3 transition-transform  ${
                isCurrentActive ? 'text-gray-600' : 'text-gray-600'
              } ${isExpanded || hasActiveChild ? 'rotate-180' : ''}`}
              aria-label={`Toggle ${item.title} submenu`}
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Render children if they exist and dropdown is open or has active child */}
        {hasChildren && (isExpanded || hasActiveChild) && (
          <div className="pl-4">
            {item.children.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } bg-white shadow-lg transition-all duration-300 overflow-hidden flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">ChargeMODVPP</h2>
        <p className="text-sm text-gray-500">Admin Dashboard</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navItems.map(item => renderNavItem(item))}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">v0.0.1</p>
      </div>
    </aside>
  )
}

export default Sidebar
