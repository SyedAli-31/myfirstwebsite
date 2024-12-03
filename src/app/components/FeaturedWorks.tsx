import React from 'react';
import Image from 'next/image';

interface Work {
  title: string;
  year: string;
  subtitle: string;
  description: string;
  image: string;
}

const FeaturedWorks: React.FC = () => {
  const works: Work[] = [
    {
      title: 'Designing Dashboards',
      year: '2020',
      subtitle: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: '/image2.png', // Replace with your actual image paths
    },
    {
      title: 'Designing Dashboards',
      year: '2020',
      subtitle: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: '/image3.png', // Replace with your actual image paths
    },
    {
      title: 'Designing Dashboards',
      year: '2020',
      subtitle: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: '/image4.png', // Replace with your actual image paths
    },
  ];

  return (
    <div className="bg-[#F6F0F0] p-5 max-w-[250px] md:max-w-[919px] mx-auto">
      {/* Heading */}
      <h2 className="text-black font-medium text-[22px] mb-8">Featured works</h2>

      {/* Featured Items */}
      {works.map((work, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start mb-10 gap-5"
        >
          {/* Image */}
          <div className="flex-shrink-0 w-[246px] h-[180px] rounded-md overflow-hidden">
            <Image
              src={work.image}
              alt={work.title}
              width={246}
              height={180}
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="font-bold text-[18px] mb-2 text-[#212121]">{work.title}</h3>
            <div className="flex items-center gap-3">
              {/* Year */}
              <span className="bg-[#FF6464] text-white rounded px-2 py-1 text-[12px]">{work.year}</span>
              {/* Subtitle */}
              <span className="text-[12px] text-[#212121]">{work.subtitle}</span>
            </div>
            {/* Description */}
            <p className="text-[14px] text-[#666] mt-2">{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedWorks;
