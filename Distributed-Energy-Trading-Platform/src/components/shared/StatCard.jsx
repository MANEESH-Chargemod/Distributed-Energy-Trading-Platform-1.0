import React from 'react'
import { Card, CardContent } from '../ui/card'
import { cn } from '../../lib/utils'

/**
 * StatCard Component
 * Reusable card component for displaying statistics
 */
const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendDirection = 'up',
  className,
  ...props
}) => {
  const isPositive = trendDirection === 'up'

  return (
    <Card className={cn('hover:shadow-md transition-shadow', className)} {...props}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
            {trend && (
              <p
                className={cn(
                  'mt-2 text-sm font-medium',
                  isPositive ? 'text-green-600' : 'text-red-600'
                )}
              >
                {trend}
              </p>
            )}
          </div>
          {Icon && (
            <div
              className={cn(
                'p-3 rounded-lg',
                isPositive ? 'bg-green-100' : 'bg-red-100'
              )}
            >
              <Icon
                className={cn(
                  'w-6 h-6',
                  isPositive ? 'text-green-600' : 'text-red-600'
                )}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default StatCard
