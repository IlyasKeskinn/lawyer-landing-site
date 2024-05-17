import { Carousel } from "../components/slider/Carousel";
import { Services } from "../components/services/Services";
import { SectionImage } from "../components/section/SectionImage";
import { JusticeSection } from "../components/section/JusticeSection";
import { AchievementSection } from "../components/section/AchievementSection";
import { ReviewsSection } from "../components/section/ReviewsSection";
import { PricingSection } from "../components/section/PricingSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <div className="h-[calc(100vh-500px)] md:h-[calc(100vh-300px)] lg:h-[calc(100vh-150px)]">
        <Carousel />
      </div>
      <div className="container my-10">
        <Services />
      </div>
      <div className="h-32 bg-slate-500 my-10 flex items-center justify-center text-center">
        <p className="text-zinc-200 text-4xl">
          Emergency? Call us now +35 123 456 789
        </p>
      </div>
      <div className="container rounded shadow-sm shadow-black/5 my-10">
        <div className="flex flex-col px-4 py-8 space-y-8 md:space-y-0 md:flex-row">
          <div className="flex flex-col basis-full  justify-center items-center text-center md:items-start md:text-start px-10 space-y-4 md:basis-1/2">
            <h4>We’re there for you</h4>
            <p>
              With 25 years of experience in low and justice, our team is
              focused on delivering quality and value to our clients. We achieve
              this through practical and innovative legal solutions that help
              our clients. Everyone deserves support on the way to justice.
            </p>
            <div>
              <img
                src="./src/assets/signature.png"
                alt="lawyer"
                className="h-full w-auto object-fit object-top"
              />
            </div>
          </div>
          <div className="flex flex-col basis-full  items-center justify-center md:items-start text-center px-10 space-y-4 rounded md:basis-1/2">
            <SectionImage src={"lawyer.jpeg"} alt={"lawyer"} />
          </div>
        </div>
      </div>
      <JusticeSection />
      <div className="my-10">
        <AchievementSection />
      </div>
      <ReviewsSection />
      <PricingSection />
      <div className="mt-10 mb-20">
       
      </div>
      <Footer/>
     
    </div>
  );
};
