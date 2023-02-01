import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header'
import  Content from './components/Content'
import Footer from './components/Footer'
import Files from './components/Files'
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="755454320186-6j957vkuja58icjt4mh4ca9548bud6rj.apps.googleusercontent.com">
    <div >
     <Header/>
     <div className='container mt-4'>
                 <p className='text-danger'>
                 IMPORTANT NOTE: This application works only for test email addresses since 
                    it needs to be verified by google which needs 3-5 business days.
                    To try it with your google account, please mail your email address so 
                    that i can add it to the test accounts list in my google developer console. 
                </p>
                <p>
                  For testing purposes<br/>
                    Email: 
                </p>
            </div>
     <div className = 'container my-5'>
      <div className='row'>
        <div className='col-md-8 order-2'>
          <div className='container my-5 d-flex justify-content-center'>
            <Content/>
          </div>
        </div>
        <div className='col-md-4 order-1'>
          <div className='container my-5'>
              <Files/>
          </div>
        </div>
      </div>
     </div>
     <Footer/>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
