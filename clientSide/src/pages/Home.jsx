import HomeCarousel from "../components/HomeCarousel";

const Home = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-[0.4fr,5fr,2fr,2fr] gap-2.5 grid grid-cols-2">
        <div className="md:row-span-3 md:col-span-1 bg-primary-500 col-span-full rounded-2xl">
          rotated text
        </div>
        <HomeCarousel cn={"md:row-span-3 md:col-span-1 col-span-full"} />
        <div className="md:col-span-2 col-span-full bg-success-500 rounded-2xl">
          to join
        </div>
        <div className="bg-secondary-500 rounded-2xl">no. blogs</div>
        <div className="bg-secondary-500 rounded-2xl">no. users</div>
        <div className="bg-default-200 md:col-span-2 md:block hidden">typed</div>
      </div>
    </>
  );
};

export default Home;

{
  /* <div className="w-full h-96 bg-[url('/images/test_img1.jpeg')] bg-no-repeat bg-cover bg-fixed bg-center" /> */
}
