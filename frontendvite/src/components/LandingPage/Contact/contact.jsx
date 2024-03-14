import { Card } from 'flowbite-react';

function Info() {
  return (
    <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-40 mt-10 mb-10">
      <Card className="max-w-sm md:ml-10" imgSrc="https://static.vecteezy.com/system/resources/previews/006/950/963/original/shake-phone-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Telephone
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          +91 9823445378
        </p>
      </Card>
      <Card className="max-w-sm" imgSrc="https://newoldstamp.com/system/posts/twitter_images/000/000/298/original/Images_in_Email_Everything_You_Need_to_Know_and_Even_More_-_Twitter.png?1592831717" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Email
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          info@egyanam.com
        </p>
      </Card>
      <Card className="max-w-sm" imgSrc="https://i.pinimg.com/originals/b2/2e/f5/b22ef558f8ca14caa12e3e25aa54e343.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Location
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Kanpur, Pune 
        </p>
      </Card>
    </div>
  );
}

export default Info;
