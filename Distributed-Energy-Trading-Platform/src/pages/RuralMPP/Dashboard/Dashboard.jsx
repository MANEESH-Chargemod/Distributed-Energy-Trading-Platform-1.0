import React from 'react'
import { TrendingUp, Zap, Battery, Users } from 'lucide-react'
import { StatCard } from '../../../components'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Energy Generated',
      value: '1,234 kWh',
      icon: Zap,
      trend: '+12.5%',
      trendDirection: 'up',
    },
    {
      title: 'Battery Storage',
      value: '456 kWh',
      icon: Battery,
      trend: '+8.2%',
      trendDirection: 'up',
    },
    {
      title: 'Active Users',
      value: '89',
      icon: Users,
      trend: '+5.1%',
      trendDirection: 'up',
    },
    {
      title: 'Revenue Today',
      value: '$2,340',
      icon: TrendingUp,
      trend: '+15.3%',
      trendDirection: 'up',
    },
  ]

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-2">Overview with charts and statistics.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Placeholder for charts */}
      <div className="space-y-6">
        {/* Charts and additional content will go here */}
      </div>
    </div>
  )
}

export default Dashboard
