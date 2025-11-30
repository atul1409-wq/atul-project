import './StatCard.css'

type StatCardProps = {
  title: string
  value: string | number
  delta?: string
}

export default function StatCard({ title, value, delta }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className="stat-title">{title}</div>
        {delta && <div className="stat-delta">{delta}</div>}
      </div>
      <div className="stat-value">{value}</div>
    </div>
  )
}
