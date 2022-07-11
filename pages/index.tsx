import Link from 'next/link'
import { MainLayout } from '../components/Layouts/MainLayout'



export default function Home() {
  return (

    <>
    
      <h1>Esta es la pagina Home</h1>
        <h1 className={'title'}>
          Ve a About <Link href="/about">About!</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>

    </>
  )
}

Home.getLayout = function getLayout(page: JSX.Element){
  return(
      <MainLayout>

          { page }
      
      </MainLayout>
  )
}
