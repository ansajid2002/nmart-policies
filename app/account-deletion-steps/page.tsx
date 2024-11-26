// import BreadCrumb from '@/components/BreadCrumb';
// import Deleteform from '@/components/Deleteform';
import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Deleteform from '../components/Deleteform'

const page = () => {

  return (
    <div className=" container px-4 mx-auto">

      <BreadCrumb label1={"Home"} label2={"Account Deletion Steps"} />
      <div className="p-5 lg:p-10">
      <div className="lg:text-center">
  <h1 className="text-3xl pb-2 font-semibold">Delete Your Suuqa Bakaaraha Account</h1>
  <p className='text-lg'>
    We regret to see you go. Your account will be deleted within 45 days following your form submission request.
  </p>
</div>
      
        <div className='w-full px-4 lg:w-1/2 xl:w-[50%] mx-auto mt-10'>

        <Deleteform/>
        </div>

      </div> 

    </div>
  )
}

export default page