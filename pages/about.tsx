import Link from 'next/link'
import { DarkLayout } from '../components/Layouts/DarkLayout'
import { MainLayout } from '../components/Layouts/MainLayout'



export default function AboutPage() {
    return (
        <>
        
                <h1>Esta es la pagina About</h1>
                <h1 className={'title'}>
                Ve a home <Link href="/">Home!</Link>
                </h1>

                <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.jsx</code>
                </p>
        
        </>
    )
}

AboutPage.getLayout = function getLayout(page: JSX.Element){
    return(
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}
