export default function UserProfile({ params }) {
  return (
    <main style={{ padding: '40px' }}>
      <h1>User Profile: {params.id}</h1>
      <p>Viewing profile for user ID: {params.id}</p>
    </main>
  )
}
