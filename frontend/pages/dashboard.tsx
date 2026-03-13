import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }
    
    // Fetch user data
    fetch('http://localhost:5000/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUser(data.data)
        } else {
          router.push('/login')
        }
      })
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  if (!user) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <p className="text-gray-600 mb-4">Welcome, {user.name}!</p>
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
