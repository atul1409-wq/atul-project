import './ActivityList.css'

export type Activity = {
  id: string
  text: string
  time?: string
}

export default function ActivityList({ items }: { items: Activity[] }) {
  return (
    <ul className="activity-list">
      {items.map((it) => (
        <li key={it.id} className="activity-item">
          <div className="activity-text">{it.text}</div>
          {it.time && <div className="activity-time">{it.time}</div>}
        </li>
      ))}
    </ul>
  )
}
