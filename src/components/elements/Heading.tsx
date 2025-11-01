
type Props = {
    title: string
};

const Heading = (props: Props) => {
  return (
    <>
      <h1
        className="uppercase text-main font-extrabold text-4xl lg:text-6xl mb-7 tracking-tight font-poppins"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        {props.title}
      </h1>
    </>
  );
};

export default Heading;
