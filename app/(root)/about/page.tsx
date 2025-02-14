import BackBtn from '@/components/BackBtn'
import ContactSection from '@/components/ContactSection'
import EducationSection from '@/components/EducationSection'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import React from 'react'

const page = () => {
  return (
    <div className='page'>
      <BackBtn />
      <ThemeSwitcher />
      <div className='w-full'>
        <h2 className='section-title text-lg'>About me</h2>

        <div className='text-description text-sm my-5 flex flex-col gap-5'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ullam, perferendis consectetur iste et praesentium a non facere possimus officia, similique obcaecati amet quos quas consequatur suscipit, nostrum labore quia rem deserunt. Incidunt, velit fuga! Nesciunt quae molestias ullam corporis, dignissimos nam deserunt perspiciatis! Facilis animi odit neque voluptatem sint!</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ullam, perferendis consectetur iste et praesentium a non facere possimus officia, similique obcaecati amet quos quas consequatur suscipit, nostrum labore quia rem deserunt. Incidunt, velit fuga! Nesciunt quae molestias ullam corporis, dignissimos nam deserunt perspiciatis! Facilis animi odit neque voluptatem sint!</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ullam, perferendis consectetur iste et praesentium a non facere possimus officia, similique obcaecati amet quos quas consequatur suscipit, nostrum labore quia rem deserunt. Incidunt, velit fuga! Nesciunt quae molestias ullam corporis, dignissimos nam deserunt perspiciatis! Facilis animi odit neque voluptatem sint!</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ullam, perferendis consectetur iste et praesentium a non facere possimus officia, similique obcaecati amet quos quas consequatur suscipit, nostrum labore quia rem deserunt. Incidunt, velit fuga! Nesciunt quae molestias ullam corporis, dignissimos nam deserunt perspiciatis! Facilis animi odit neque voluptatem sint!</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ullam, perferendis consectetur iste et praesentium a non facere possimus officia, similique obcaecati amet quos quas consequatur suscipit, nostrum labore quia rem deserunt. Incidunt, velit fuga! Nesciunt quae molestias ullam corporis, dignissimos nam deserunt perspiciatis! Facilis animi odit neque voluptatem sint!</p>
        </div>

        <div className='w-full'>
          <EducationSection />
        </div>
        
        <ContactSection/>
      </div>
    </div>
  )
}

export default page