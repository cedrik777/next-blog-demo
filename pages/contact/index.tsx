import Link from 'next/link'
import { MainLayout } from '../../components/Layouts/MainLayout'


export default function Contact() {
    return (
        <>

            <h1>Esta es la pagina Contact</h1>
                <h1 className={'title'}>
                Ve a home <Link href="/">Home!</Link>
                </h1>
                <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/contact.jsx</code>
                </p>
        </>
    )
}

Contact.getLayout = function getLayout(page: JSX.Element){
    return(
        <MainLayout>

            { page }
        
        </MainLayout>
    )
}
