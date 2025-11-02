type Props = {
  section: string;
  bgColor: string;
  title: string;
  desc1: string;
  desc2?: string;
  textColor: string;
};

const Heading = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        className={`first-letter:uppercase text-md  mb-2 tracking-tight font-poppins p-2 ${props.textColor} ${props.bgColor} shadow-[0_0_3px] shadow-slate-400 w-fit px-4 py-2 rounded-xl font-bold`}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        {props.section}
      </h1>
      <h1
        className="font-poppins text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-6 mt-4 text-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {props.title}
      </h1>
      <p
        className="text-md md:text-lg lg:text-xl font-thin text-desc md:leading-8 font-roboto mb-4 md:text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {props.desc1}
      </p>
      <p
        className="text-md md:text-lg lg:text-xl font-thin text-desc md:leading-8 font-roboto md:text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {props.desc2}
      </p>
    </div>
  );
};

export default Heading;
