import Link from 'next/link';

function Header() {
  return (
    <header className="bg-yellow-500 p-4 border-b border-b-black">
        <div className="flex justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-5">
                    <Link href="/">
                        <img className='w-44 object-contain cursor-pointer' src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="" />
                    </Link>
                <div className='hidden items-center space-x-5'>
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className='text-white bg-green-500 px-4 py-1 rounded-full'>Follow</h3>
                    {/* <h3>Our Story</h3>
                    <h3>Membership</h3>
                    <h3>Write</h3>
                    <h3>Sign in</h3> */}
                </div>
            </div>
            <div className="flex items-center space-x-5 text-black-600">
                <h6>Our Story</h6>
                <h6>Membership</h6>
                <h6>Write</h6>
                <h6>Sign in</h6>
                <h6 className='px-4 py-2 rounded-full bg-black text-white'>Get Started</h6>
            </div>
        </div>
    </header>
  )
}

export default Header