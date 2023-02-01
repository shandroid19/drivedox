import { GoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';
import { populate,setuser,setselected } from "../redux/slices/fileslices";
import { useSelector, useDispatch } from 'react-redux';
export default function Header(){
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.files.user); 
    const API_KEY='AIzaSyDBR9Wm9gCc664tgAuk4QZafMll-P10CHY'    // API KEY is left in the open since the app has not been verified 
    const CLIENT_ID='755454320186-6j957vkuja58icjt4mh4ca9548bud6rj.apps.googleusercontent.com' // CLIENT ID is left in the open since the app has not been verified 
    const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
    const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
  
          dispatch(setuser(gapi.auth2.getAuthInstance().currentUser.le.wt.Ad));
          listFiles();
        } else {
          handleAuthClick();
        }
      };
      

      const listFiles = (searchTerm = 'fileExtension=\'docx\'') => {
        gapi.client.drive.files
          .list({
            pageSize: 1000,
            fields: 'files(id, name, mimeType, modifiedTime)',
            q: searchTerm,
          })
          .then(function (response) {

            const res = JSON.parse(response.body);
            dispatch(populate(res));

          });
      };
      const handleSignOutClick = (event) => {
        dispatch(setuser(""));
        dispatch(populate([]));
        dispatch(setselected(""));
        window.location.reload();
        gapi.auth2.getAuthInstance().signOut();
      }; 


      const handleAuthClick = (event) => {
        gapi.auth2.getAuthInstance().signIn().then(function(){}, function(error){ if (error) alert('please allow popup for this app')})
      };

    const handleClientLoad = () => {
        gapi.load('client:auth2', initClient);
      };
      const initClient = () => {
        gapi.client
          .init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
          .then(
            function () {
              gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    
              updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            },
            function (error) {}
          );
      };

    return (<div>
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-040.jpg')", height: 400 }}
      >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div >
              <h1 className='text-white textshadow'>DriveDox</h1>
              <h4 className='text-white textshadow mb-5'>Find your docx files</h4>
              {user.length>0?<h4 className='text-white textshadow mb-5'>Welcome {user}</h4>:<></>}
              {user.length==0?
              <button className='btn-lg btn btn-success' onClick={handleClientLoad}
                onSuccess={credentialResponse => {
                    handleClientLoad();
                }}
                >Login</button>:
                <a className=" btn btn-danger btn-lg" onClick={handleSignOutClick} >Logout</a>}
                
            </div>
            
          </div>
            
      </div>
    </header>
    </div>)
}