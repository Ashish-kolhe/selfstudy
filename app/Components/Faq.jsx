import React from 'react'

export const Faq = () => {
  return (
    <div className='flex justify-center bg-white text-gray-900'>
    <div className='max-w-4xl p-6 lg:p-10 '>
   
        <h1 className='text-gray-800 font-black text-xl lg:text-4xl text-center my-8'>Frequently Asked Questions</h1>
        <div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" defaultChecked />
  
  <div className="collapse-title text-xl font-bold">What is SelfStudy?</div>
  <div className="collapse-content">
    <p>SelfStudy is a digital learning platform that allows you to learn new skills at your own pace through high-quality courses, real-world projects, and a supportive community.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-bold">Who can use SelfStudy?</div>
  <div className="collapse-content">
    <p>Anyone! Whether you’re a student, professional, or beginner looking to upskill, SelfStudy offers courses tailored to different experience levels.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-bold">Is SelfStudy free to use?</div>
  <div className="collapse-content">
    <p>We offer both free and premium courses. You can explore a variety of free resources, while premium content provides deeper insights and certifications.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-bold">Do I get a certificate after completing a course?</div>
  <div className="collapse-content">
    <p>Yes! Upon successfully completing a course, you’ll receive a verified certificate that you can add to your resume or LinkedIn profile.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-bold"> Can I learn at my own pace?</div>
  <div className="collapse-content">
    <p>Absolutely! All courses are self-paced, so you can start, pause, and continue learning whenever it’s convenient for you.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-bold">What subjects are covered on SelfStudy?</div>
  <div className="collapse-content">
    <p>We offer courses in programming, design, business, marketing, data science, and much more! Our library is constantly expanding.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-bold">How can I get support if I face issues?</div>
  <div className="collapse-content">
    <p>You can reach out to our support team via email or live chat. We’re always here to help!</p>
  </div>
</div>

    </div>
    </div>
  )
}
