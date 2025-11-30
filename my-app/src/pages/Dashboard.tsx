import './Dashboard.css'
import StatCard from '../components/StatCard'
import ActivityList from '../components/ActivityList'

const sampleActivities = [
  { id: 'a1', text: 'User Tara signed up', time: '2m ago' },
  { id: 'a2', text: 'Order #324 completed', time: '15m ago' },
  { id: 'a3', text: 'Monthly backup finished', time: '1h ago' },
]

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      <header className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="dashboard-sub">Overview — real-time snapshot</div>
      </header>

      <section className="dashboard-grid">
        <div className="dashboard-left">
          <div className="stats-row">
            <StatCard title="Active Users" value={3421} delta="+8%" />
            <StatCard title="Revenue" value="$12,350" delta="+3%" />
            <StatCard title="New Signups" value={128} delta="+12%" />
            <StatCard title="Errors" value={4} delta="-30%" />
          </div>

          <div className="chart-card">
            <div className="chart-title">Visits (last 7 days)</div>
            <div className="chart-placeholder">[chart placeholder]</div>
          </div>
        </div>

        <aside className="dashboard-right">
          <div className="activity-card">
            <h3>Recent activity</h3>
            <ActivityList items={sampleActivities} />
          </div>
        </aside>
      </section>
    </div>
  )
}
