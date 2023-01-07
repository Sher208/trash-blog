import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-900">
      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12">
          <div className="flex flex-wrap justify-center">
            <div className="w-6/12 px-4 sm:w-3/12">
              <Image
                className="h-auto max-w-full rounded-full border-none align-middle"
                src="/image/site/Rick.jpg"
                alt="my image"
                width={200}
                height={200}
              />
            </div>
          </div>
          <h1 className="my-5 text-4xl font-extrabold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl">
            Hi, I am Thilak
          </h1>
          <p className="mb-8 px-48 text-lg font-normal text-gray-400 sm:px-12 lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae et delectus cupiditate, molestiae quisquam impedit
            explicabo laboriosam quod, sit eum reiciendis doloribus! Id
            repudiandae perferendis officiis vel omnis ab aperiam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
