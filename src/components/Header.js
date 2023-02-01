export default function Header(){
    return (<div>
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-040.jpg')", height: 400 }}
      >
        {/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}> */}
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white textshadow'>
              <h1 >DriveDox</h1>
              <h4 >Find your docx files</h4>
            </div>
          </div>
        {/* </div> */}
      </div>
    </header>
    </div>)
}