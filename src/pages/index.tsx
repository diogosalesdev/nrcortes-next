import { GetServerSideProps } from 'next'
import { getSession, signIn, useSession } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      }
    }
  }

  return {
    props: {
      
    }
  }
}

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
