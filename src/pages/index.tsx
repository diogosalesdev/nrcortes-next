import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  const {data} = useSession()
  function handleSingIn() {
    signIn('google')
  }
  return (
    <>
      <p>{JSON.stringify(data)}</p>
      <button onClick={handleSingIn}>
        Sign In
      </button>
    </>
  )
}
