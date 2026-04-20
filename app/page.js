import AuthStatus from './components/AuthStatus'

export default function HomePage() {
  return (
    <main style={{ padding: '40px' }}>
      <h1>Welcome to Auth Vitamin</h1>
      <p>This text was rendered on the server.</p>
      <AuthStatus />
    </main>
  )
}